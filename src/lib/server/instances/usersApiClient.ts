import {appConfig} from "../app_config/appConfig.js";
import {UsersApiClient} from "../features/users/users_api_client/UsersApiClient.js";

export const usersApiClient = new UsersApiClient({
	usersApiBaseUrl: appConfig.USERS_API_BASE_URL,
});
