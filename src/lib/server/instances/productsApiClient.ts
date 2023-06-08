import {appConfig} from "../app_config/appConfig.js";
import {ProductsApiClient} from "../features/products/products_api_client/ProductsApiClient.js";

export const productsApiClient = new ProductsApiClient({
	productsApiBaseUrl: appConfig.PRODUCTS_API_BASE_URL,
});
