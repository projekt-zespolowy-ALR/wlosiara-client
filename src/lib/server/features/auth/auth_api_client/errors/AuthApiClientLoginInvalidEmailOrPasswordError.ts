export class AuthApiClientLoginInvalidEmailOrPasswordError extends Error {
	public constructor() {
		super(`Invalid email or password.`);
		this.name = "AuthApiClientLoginInvalidEmailOrPasswordError";
	}
}
