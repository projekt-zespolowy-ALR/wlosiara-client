import type {Product} from "$lib/features/products/types/Product.js";
import type {Page} from "$lib/server/utils/Page.js";
import type {PagingOptions} from "$lib/server/utils/PagingOptions.js";
import type {DeepReadonly} from "ts-essentials";
import type {ProductCategory} from "$lib/features/product_categories/types/ProductCategory.js";
import type {ProductBrand} from "$lib/features/product_brands/types/Brand.js";
import type {ProductOffer} from "$lib/features/product_offers/types/ProductOffer.js";
import type {ProductIngredient} from "$lib/features/products/types/ProductIngredient.js";
import type {ProductDataSource} from "$lib/features/data_sources/types/DataSource.js";

export default class ProductsMicroserviceClient {
	private readonly productsMicroserviceBaseUrl: string;

	public constructor(productsMicroserviceBaseUrl: string) {
		this.productsMicroserviceBaseUrl = productsMicroserviceBaseUrl;
	}

	private async fetchCategory(categoryId: string): Promise<ProductCategory> {
		const category: ProductCategory = await fetch(
			`${this.productsMicroserviceBaseUrl}/categories/${categoryId}`,
			{
				method: "GET",
			}
		).then((response) => response.json());
		return category;
	}

	private async fetchBrand(brandId: string): Promise<ProductBrand> {
		const brand: ProductBrand = await fetch(
			`${this.productsMicroserviceBaseUrl}/brands/${brandId}`,
			{
				method: "GET",
			}
		).then((response) => response.json());
		return brand;
	}

	private async fetchIngredient(ingredientId: string): Promise<ProductIngredient> {
		const ingredient: ProductIngredient = await fetch(
			`${this.productsMicroserviceBaseUrl}/ingredients/${ingredientId}`,
			{
				method: "GET",
			}
		).then((response) => response.json());
		return ingredient;
	}

	private async fetchIngredientsOfProduct(productId: string): Promise<ProductIngredient[] | null> {
		const ingredients: ProductIngredient[] = await fetch(
			`${this.productsMicroserviceBaseUrl}/products/${productId}/ingredients`,
			{
				method: "GET",
			}
		).then((response) => response.json());
		return ingredients;
	}

	private async fetchRawOffersOfProduct(productId: string): Promise<
		(Omit<ProductOffer, "product" | "dataSource"> & {
			dataSourceId: string;
		})[]
	> {
		const offers = await fetch(`${this.productsMicroserviceBaseUrl}/products/${productId}/offers`, {
			method: "GET",
		}).then((response) => response.json());
		return offers;
	}

	private async fetchDataSource(dataSourceId: string): Promise<ProductDataSource> {
		const dataSource: ProductDataSource = await fetch(
			`${this.productsMicroserviceBaseUrl}/data-sources/${dataSourceId}`,
			{
				method: "GET",
			}
		).then((response) => response.json());
		return dataSource;
	}

	private async fetchRawProduct(productId: string): Promise<
		Omit<Product, "brand" | "categories" | "ingredients" | "offers"> & {
			brandId: string;
		}
	> {
		const rawProduct = await fetch(`${this.productsMicroserviceBaseUrl}/products/${productId}`, {
			method: "GET",
		}).then((response) => response.json());
		return rawProduct;
	}

	private async fetchOffersOfProduct(productId: string): Promise<Omit<ProductOffer, "product">[]> {
		const rawOffers = await this.fetchRawOffersOfProduct(productId);
		const offers = await Promise.all(
			rawOffers.map(async ({dataSourceId, ...rawOfferRest}) => ({
				...rawOfferRest,
				dataSource: await this.fetchDataSource(dataSourceId),
			}))
		);
		return offers;
	}

	private async fetchProduct(productId: string): Promise<Product> {
		const [{brandId, ...rawProductRest}, ingredients, categories, offers] = await Promise.all([
			this.fetchRawProduct(productId),
			this.fetchIngredientsOfProduct(productId),
			this.fetchCategoriesOfProduct(productId),
			this.fetchOffersOfProduct(productId),
		]);
		const product: Product = {
			...rawProductRest,
			brand: await this.fetchBrand(brandId),
			categories: categories,
			ingredients: ingredients,
			offers: offers,
		};
		return product;
	}

	private async fetchCategoriesOfProduct(productId: string): Promise<ProductCategory[]> {
		const categories: ProductCategory[] = await fetch(
			`${this.productsMicroserviceBaseUrl}/products/${productId}/categories`,
			{
				method: "GET",
			}
		).then((response) => response.json());
		return categories;
	}

	private async getRawProductsPage(
		pagingOptions: DeepReadonly<PagingOptions>
	): Promise<
		Page<Omit<Product, "brand" | "categories" | "ingredients" | "offers"> & {brandId: string}>
	> {
		const rawProductsPage = await fetch(
			`${this.productsMicroserviceBaseUrl}/products?take=${pagingOptions.take}&skip=${pagingOptions.skip}`,
			{
				method: "GET",
			}
		).then((response) => response.json());
		return rawProductsPage;
	}

	private async populateProduct(
		rawProduct: Omit<Product, "brand" | "categories" | "ingredients" | "offers"> & {
			brandId: string;
		}
	): Promise<Product> {
		const {brandId, ...rawProductRest} = rawProduct;
		const [brand, ingredients, categories, offers] = await Promise.all([
			this.fetchBrand(brandId),
			this.fetchIngredientsOfProduct(rawProductRest.id),
			this.fetchCategoriesOfProduct(rawProductRest.id),
			this.fetchOffersOfProduct(rawProductRest.id),
		]);
		const product: Product = {
			...rawProductRest,
			brand: brand,
			categories: categories,
			ingredients: ingredients,
			offers: offers,
		};
		return product;
	}

	private async getProductsPage(
		pagingOptions: DeepReadonly<PagingOptions>
	): Promise<Page<Product>> {
		const rawProductsPage = await this.getRawProductsPage(pagingOptions);
		const products = await Promise.all(
			rawProductsPage.items.map((rawProduct) => this.populateProduct(rawProduct))
		);
		const productsPage: Page<Product> = {
			...rawProductsPage,
			items: products,
		};
		return productsPage;
	}
}
