import type User from "$lib/features/users/User.js";
import {writable} from "svelte/store";
import type UserCredentials from "./UserCredentials.js";

function createCurrentUserStore() {
	const {subscribe, set} = writable<User | null>(null);

	const login = async (credentials: UserCredentials): Promise<void> => {
		set({
			id: "mock-user-id",
			username: "mockuser",
		});
	};

	const logout = async (): Promise<void> => {
		set(null);
	};

	return {
		subscribe,
		login,
		logout,
	};
}

const currentUserStore = createCurrentUserStore();

export default currentUserStore;
