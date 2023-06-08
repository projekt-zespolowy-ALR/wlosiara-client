import {ProductsService} from "../features/products/ProductsService.js";
import {productsApiClient} from "./productsApiClient.js";

export const productsService = new ProductsService({
	productsApiClient: productsApiClient,
});
