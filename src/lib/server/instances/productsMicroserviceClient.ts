import ProductsMicroserviceClient from "../features/products/ProductsMicroserviceClient.js";
import appConfig from "../app_config/appConfig.js";

export default new ProductsMicroserviceClient(appConfig.PRODUCTS_MICROSERVICE_BASE_URL);
