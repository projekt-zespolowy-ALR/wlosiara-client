import type {DeepReadonly} from "ts-essentials";
import type {RegisterRequestBody} from "./types/RegisterRequestBody.js";
import type {LoginResponseBody} from "./types/LoginResponseBody.js";
import type {LoginRequestBody} from "./types/LoginRequestBody.js";
import type {MeResponseBody} from "./types/MeResponseBody.js";

export class AuthApiClient {
	private readonly authApiBaseUrl: string;
	public constructor({authApiBaseUrl}: {authApiBaseUrl: string}) {
		this.authApiBaseUrl = authApiBaseUrl;
	}

	async register(registerRequestBody: DeepReadonly<RegisterRequestBody>): Promise<void> {
		await fetch(`${this.authApiBaseUrl}/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(registerRequestBody),
		});
	}

	async login(loginRequestBody: DeepReadonly<LoginRequestBody>): Promise<LoginResponseBody> {
		const response = await fetch(`${this.authApiBaseUrl}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginRequestBody),
		});
		const loginResponseBody = await response.json();
		return loginResponseBody;
	}

	async me(sessionToken: string): Promise<MeResponseBody> {
		const response = await fetch(`${this.authApiBaseUrl}/auth/me`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${sessionToken}`,
			},
		});
		const meResponseBody = await response.json();
		return meResponseBody;
	}
}
