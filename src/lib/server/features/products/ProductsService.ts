import type {Product} from "$lib/features/products/types/Product.js";
import type {Page} from "$lib/server/utils/Page.js";
import type {ProductsApiClient} from "$lib/server/features/products/products_api_client/ProductsApiClient.js";
import type {ProductCategory} from "$lib/features/products/types/ProductCategory.js";
import type {ProductOffer} from "$lib/features/product_offers/types/ProductOffer.js";
import type {ProductInApi} from "./products_api_client/types/ProductInApi.js";
import type {ProductOfferInApi} from "./products_api_client/types/ProductOfferInApi.js";
import type {ProductDataSource} from "$lib/features/product_data_sources/types/ProductDataSource.js";
import type {ProductIngredient} from "$lib/features/products/types/ProductIngredient.js";
import type {ProductBrand} from "$lib/features/product_brands/types/ProductBrand.js";
import type {DeepReadonly} from "ts-essentials";
import type {PagingOptions} from "$lib/utils/PagingOptions.js";
import {apifyPagingOptions} from "$lib/server/utils/apifyPagingOptions.js";

export class ProductsService {
	private readonly productsApiClient: ProductsApiClient;

	public constructor({productsApiClient}: {productsApiClient: ProductsApiClient}) {
		this.productsApiClient = productsApiClient;
	}

	private async getCategoryById(targetCategoryId: string): Promise<ProductCategory> {
		const categoryInApi = await this.productsApiClient.fetchCategoryById(targetCategoryId);
		return categoryInApi;
	}

	private async getCategoriesOfProduct(targetProductId: string): Promise<ProductCategory[]> {
		const categoriesInApi = await this.productsApiClient.fetchCategoriesOfProduct(targetProductId);
		return categoriesInApi;
	}

	private async getDataSourceById(targetDataSourceId: string): Promise<ProductDataSource> {
		const dataSourceInApi = await this.productsApiClient.fetchDataSourceById(targetDataSourceId);

		return {
			...dataSourceInApi,
			url: dataSourceInApi.url ?? "TODO",
		};
	}

	private async populateOfferInApi(
		offerInApi: ProductOfferInApi
	): Promise<Omit<ProductOffer, "product">> {
		const dataSource = await this.getDataSourceById(offerInApi.dataSourceId);
		return {
			...offerInApi,
			price: offerInApi.pricePln,
			dataSource,
		};
	}

	private async getOffersOfProduct(
		targetProductId: string
	): Promise<Omit<ProductOffer, "product">[]> {
		const offersInApi = await this.productsApiClient.fetchOffersOfProduct(targetProductId);
		const offers = await Promise.all(
			offersInApi.map((offerInApi) => this.populateOfferInApi(offerInApi))
		);
		return offers;
	}

	private async getIngredientsOfProduct(
		targetProductId: string
	): Promise<ProductIngredient[] | null> {
		const ingredientsInApi = await this.productsApiClient.fetchIngredientsOfProduct(
			targetProductId
		);
		const ingredients =
			ingredientsInApi?.map((ingredientInApi) => ({
				...ingredientInApi,
				name: ingredientInApi.latinName,
			})) ?? null;
		return ingredients;
	}

	private async getBrandById(targetBrandId: string): Promise<ProductBrand> {
		const brandInApi = await this.productsApiClient.fetchBrandById(targetBrandId);
		return brandInApi;
	}

	private async checkIfProductisFavorite(
		targetProductId: string,
		userId: string
	): Promise<boolean> {
		const isFavorite = await this.productsApiClient.checkIfProductisFavorite(
			targetProductId,
			userId
		);
		return isFavorite;
	}

	private async populateProductInApi(
		productInApi: ProductInApi,
		userId: string | null
	): Promise<Product & {isFavorite: boolean | null}> {
		const [categories, ingredients, offers, brand, isFavorite] = await Promise.all([
			this.getCategoriesOfProduct(productInApi.id),
			this.getIngredientsOfProduct(productInApi.id),
			this.getOffersOfProduct(productInApi.id),
			this.getBrandById(productInApi.brandId),
			userId !== null ? this.checkIfProductisFavorite(productInApi.id, userId) : null,
		]);
		return {
			...productInApi,
			mass: productInApi.massKilograms,
			volume: productInApi.volumeLiters,
			categories,
			ingredients,
			offers,
			brand,
			isFavorite,
		};
	}

	public async getProductsPage(
		pagingOptions: DeepReadonly<PagingOptions>,
		userId: string | null
	): Promise<Page<Product & {isFavorite: boolean | null}>> {
		const productsPageInApi = await this.productsApiClient.fetchProductsPage(
			apifyPagingOptions(pagingOptions)
		);
		const products = await Promise.all(
			productsPageInApi.items.map((productInApi) => this.populateProductInApi(productInApi, userId))
		);
		return {
			...productsPageInApi,
			items: products,
		};
	}

	public async getProductById(targetProductId: string, userId: string | null): Promise<Product> {
		const productInApi = await this.productsApiClient.fetchProductById(targetProductId);
		const product = await this.populateProductInApi(productInApi, userId);
		return product;
	}

	public async likeProduct(userId: string, productId: string): Promise<void> {
		await this.productsApiClient.likeProduct(productId, userId);
	}

	public async unlikeProduct(userId: string, productId: string): Promise<void> {
		await this.productsApiClient.unlikeProduct(productId, userId);
	}
}
