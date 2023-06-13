import {appConfig} from "../app_config/appConfig.js";
import {AuthApiClient} from "../features/auth/auth_api_client/AuthApiClient.js";

export const authApiClient = new AuthApiClient({
	authApiBaseUrl: appConfig.AUTH_API_BASE_URL,
});
