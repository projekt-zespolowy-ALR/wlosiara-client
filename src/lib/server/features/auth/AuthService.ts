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
			const [userInApi, hairType] = await Promise.all([
				this.usersApiClient.getUserById(loginResponseBody.userId),
				this.usersApiClient.getHairType(loginResponseBody.userId),
			]);

			const session: Session = {
				// id: loginResponseBody.id,
				token: loginResponseBody.token,
				user: {
					...userInApi,
					hairType,
				},
			};
			console.log(`AuthService`, `login`, {session});

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
		const [userInApi, hairType] = await Promise.all([
			this.usersApiClient.getUserById(meResponseBody.userId),
			this.usersApiClient.getHairType(meResponseBody.userId),
		]);

		const session: Session = {
			token: sessionToken,
			user: {
				...userInApi,
				hairType,
			},
		};
		console.log(`AuthService`, `me`, {session});

		return session;
	}
}
