import type {UserInApi} from "./types/UserInApi.js";

export class UsersApiClient {
	private readonly usersApiBaseUrl: string;
	public constructor({usersApiBaseUrl}: {usersApiBaseUrl: string}) {
		this.usersApiBaseUrl = usersApiBaseUrl;
	}

	public async getUserById(userId: string): Promise<UserInApi> {
		const response = await fetch(`${this.usersApiBaseUrl}/users/${userId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const user = await response.json();
		return user;
	}
}
