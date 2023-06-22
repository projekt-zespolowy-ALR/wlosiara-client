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

	public async setHairType(userId: string, hairType: string): Promise<void> {
		const response = await fetch(`${this.usersApiBaseUrl}/users/${userId}/hair-type`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({hairType, isPublic: false}),
		});
		await response.json();
		return;
	}
}
