export class AuthServiceLoginInvalidEmailOrPasswordError extends Error {
	public constructor() {
		super(`Invalid email or password.`);
		this.name = "AuthServiceLoginInvalidEmailOrPasswordError";
	}
}
