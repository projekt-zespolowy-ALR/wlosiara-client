import type {UserCredentials} from "$lib/features/auth/types/UserCredentials.js";
import type {UserRegistrationPayload} from "$lib/features/auth/types/UserRegistrationPayload.js";
import type {AuthApiClient} from "./auth_api_client/AuthApiClient.js";
import type {UsersApiClient} from "../users/users_api_client/UsersApiClient.js";
import type {Session} from "./Session.js";
import {AuthApiClientLoginInvalidEmailOrPasswordError} from "./auth_api_client/errors/AuthApiClientLoginInvalidEmailOrPasswordError.js";
import {AuthServiceLoginInvalidEmailOrPasswordError} from "./errors/AuthServiceLoginInvalidEmailOrPasswordError.js";

export class AuthService {
	private readonly authApiClient: AuthApiClient;
	private readonly usersApiClient: UsersApiClient;

	public constructor({
		authApiClient,
		usersApiClient,
	}: {
		authApiClient: AuthApiClient;
		usersApiClient: UsersApiClient;
	}) {
		this.authApiClient = authApiClient;
		this.usersApiClient = usersApiClient;
	}

	public async register(userRegistrationPayload: UserRegistrationPayload): Promise<void> {
		await this.authApiClient.register(userRegistrationPayload);
	}

	public async login(userCredentials: UserCredentials): Promise<Session> {
		try {
			const loginResponseBody = await this.authApiClient.login(userCredentials);
			const userInApi = await this.usersApiClient.getUserById(loginResponseBody.userId);
			const session: Session = {
				// id: loginResponseBody.id,
				token: loginResponseBody.token,
				user: {
					...userInApi,
					fav_products: [], // TODO: Remove this when fav_products is correctly implemented
				},
			};

			return session;
		} catch (error) {
			if (error instanceof AuthApiClientLoginInvalidEmailOrPasswordError) {
				throw new AuthServiceLoginInvalidEmailOrPasswordError();
			}
			throw error;
		}
	}

	public async me(sessionToken: string): Promise<Session> {
		const meResponseBody = await this.authApiClient.me(sessionToken);
		const userInApi = await this.usersApiClient.getUserById(meResponseBody.userId);
		const session: Session = {
			token: sessionToken,
			user: {
				...userInApi,
				fav_products: [], // TODO: Remove this when fav_products is correctly implemented
			},
		};

		return session;
	}
}
