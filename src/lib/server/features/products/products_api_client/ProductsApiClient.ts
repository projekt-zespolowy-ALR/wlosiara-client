import type {PageInApi} from "$lib/server/utils/PageInApi.js";
import type {PagingOptionsInApi} from "$lib/server/utils/PagingOptionsInApi.js";
import type {ProductBrandInApi} from "./types/ProductBrandInApi.js";
import type {ProductCategoryInApi} from "./types/ProductCategoryInApi.js";
import type {ProductDataSourceInApi} from "./types/ProductDataSourceInApi.js";
import type {ProductInApi} from "./types/ProductInApi.js";
import type {ProductIngredientInApi} from "./types/ProductIngredientInApi.js";
import type {ProductOfferInApi} from "./types/ProductOfferInApi.js";

export class ProductsApiClient {
	private readonly productsApiBaseUrl: string;
	public constructor({productsApiBaseUrl}: {productsApiBaseUrl: string}) {
		this.productsApiBaseUrl = productsApiBaseUrl;
	}
	async fetchProductsPage(pagingOptions: PagingOptionsInApi): Promise<PageInApi<ProductInApi>> {
		const response = await fetch(
			`${this.productsApiBaseUrl}/products?skip=${pagingOptions.skip}&take=${pagingOptions.take}`
		);
		const productsPage = await response.json();
		return productsPage;
	}

	async fetchProductById(targetProductId: string): Promise<ProductInApi> {
		const response = await fetch(`${this.productsApiBaseUrl}/products/${targetProductId}`);
		const product = await response.json();
		return product;
	}

	async fetchCategoriesOfProduct(targetProductId: string): Promise<ProductCategoryInApi[]> {
		const response = await fetch(
			`${this.productsApiBaseUrl}/products/${targetProductId}/categories`
		);
		const categories = await response.json();
		return categories;
	}

	async fetchCategoryById(targetCategoryId: string): Promise<ProductCategoryInApi> {
		const response = await fetch(`${this.productsApiBaseUrl}/categories/${targetCategoryId}`);
		const category = await response.json();
		return category;
	}

	async fetchOffersOfProduct(targetProductId: string): Promise<ProductOfferInApi[]> {
		const response = await fetch(`${this.productsApiBaseUrl}/products/${targetProductId}/offers`);
		const offers = await response.json();
		return offers;
	}

	async fetchOfferOfProduct(targetDataSourceId: string): Promise<ProductOfferInApi> {
		const response = await fetch(`${this.productsApiBaseUrl}/offers/${targetDataSourceId}`);
		const offer = await response.json();
		return offer;
	}

	async fetchIngredientById(targetIngredientId: string): Promise<ProductIngredientInApi> {
		const response = await fetch(`${this.productsApiBaseUrl}/ingredients/${targetIngredientId}`);
		const ingredient = await response.json();
		return ingredient;
	}

	async fetchIngredientsOfProduct(
		targetProductId: string
	): Promise<ProductIngredientInApi[] | null> {
		const response = await fetch(
			`${this.productsApiBaseUrl}/products/${targetProductId}/ingredients`
		);
		if (response.status === 404) {
			const body = await response.json();
			if (
				body.message ===
				`The ingredients of the product with id "${targetProductId}" is not available.`
			) {
				return null;
			}
			throw new Error(`Unexpected response: ${JSON.stringify(body)}`);
		}
		const ingredients = await response.json();

		return ingredients;
	}

	async fetchBrandById(targetBrandId: string): Promise<ProductBrandInApi> {
		const response = await fetch(`${this.productsApiBaseUrl}/brands/${targetBrandId}`);
		const brand = await response.json();
		return brand;
	}

	async fetchDataSourceById(targetDataSourceId: string): Promise<ProductDataSourceInApi> {
		const response = await fetch(`${this.productsApiBaseUrl}/data-sources/${targetDataSourceId}`);
		const dataSource = await response.json();
		return dataSource;
	}

	public async likeProduct(productId: string, userId: string): Promise<void> {
		const response = await fetch(
			`${this.productsApiBaseUrl}/users/${userId}/favorite-products/${productId}`,
			{
				method: "PUT",
			}
		);
		if (response.status !== 200) {
			throw new Error(`Unexpected response: ${JSON.stringify(response)}`);
		}
	}

	public async checkIfProductisFavorite(productId: string, userId: string): Promise<boolean> {
		const response = await fetch(
			`${this.productsApiBaseUrl}/users/${userId}/favorite-products/${productId}`,
			{
				method: "HEAD",
			}
		);
		if (response.status === 404) {
			return false;
		}
		if (response.status === 200) {
			return true;
		}
		throw new Error(`Unexpected response: ${JSON.stringify(response)}`);
	}
}
