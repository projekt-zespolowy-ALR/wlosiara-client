import * as Envalid from "envalid";

const appConfigSchema = {
	PRODUCTS_MICROSERVICE_BASE_URL: Envalid.str(),
};

export default appConfigSchema;
