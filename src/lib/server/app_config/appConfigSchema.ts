import envalid from "envalid";

export const appConfigSchema = {
	PRODUCTS_API_BASE_URL: envalid.str(),
};
