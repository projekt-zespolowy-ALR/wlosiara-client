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

	private async getIngredientsOfProduct(targetProductId: string): Promise<ProductIngredient[]> {
		const ingredientsInApi = await this.productsApiClient.fetchIngredientsOfProduct(
			targetProductId
		);
		const ingredients = ingredientsInApi.map((ingredientInApi) => ({
			...ingredientInApi,
			name: ingredientInApi.latinName,
		}));
		return ingredients;
	}

	private async getBrandById(targetBrandId: string): Promise<ProductBrand> {
		const brandInApi = await this.productsApiClient.fetchBrandById(targetBrandId);
		return brandInApi;
	}

	private async populateProductInApi(productInApi: ProductInApi): Promise<Product> {
		const [categories, ingredients, offers, brand] = await Promise.all([
			this.getCategoriesOfProduct(productInApi.id),
			this.getIngredientsOfProduct(productInApi.id),
			this.getOffersOfProduct(productInApi.id),
			this.getBrandById(productInApi.brandId),
		]);
		return {
			...productInApi,
			mass: productInApi.massKilograms,
			volume: productInApi.volumeLiters,
			categories,
			ingredients,
			offers,
			brand,
		};
	}

	public async getProductsPage(): Promise<Page<Product>> {
		// const productsPageInApi = await this.productsApiClient.fetchProductsPage();
		// const products = await Promise.all(
		// 	productsPageInApi.items.map((productInApi) => this.populateProductInApi(productInApi))
		// );
		// return {
		// 	...productsPageInApi,
		// 	items: products,
		// };
		return {
			items: [],
			meta: {
				take: 10,
				skip: 0,
				totalItemsCount: 0,
			},
		};
	}

	public async getProductById(targetProductId: string): Promise<Product> {
		const productInApi = await this.productsApiClient.fetchProductById(targetProductId);
		const product = await this.populateProductInApi(productInApi);
		return product;
	}
}
