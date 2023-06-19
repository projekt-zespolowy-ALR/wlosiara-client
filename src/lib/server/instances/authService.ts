import {AuthService} from "../features/auth/AuthService.js";
import {authApiClient} from "./authApiClient.js";
import {usersApiClient} from "./usersApiClient.js";

export const authService = new AuthService({
	authApiClient: authApiClient,
	usersApiClient: usersApiClient,
});
