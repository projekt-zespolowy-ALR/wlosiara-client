import type {User} from "$lib/features/users/types/User.js";
import {writable} from "svelte/store";
// import type {UserCredentials} from "./UserCredentials.js";

function createCurrentUserStore() {
	const {subscribe, set, update} = writable<User | null>(null);

	const login = async (/*credentials: UserCredentials*/): Promise<void> => {
		set({
			id: "mock-user-id",
			username: "mockuser",
			fav_products: ["0", "1", "2", "3"],
		});
	};

	const logout = async (): Promise<void> => {
		set(null);
	};

	const addFavProduct = (id: string) => {
		update((user) => {
			if (user) {
				// let new_fav = user?.fav_products;
				// new_fav = Array.of(...(new Set(new_fav)));
				// return {
				// 	...user,
				// 	fav_products: new_fav
				// }
				let fav_products = user.fav_products;
				if (fav_products.includes(id)) {
					return {
						...user,
						fav_products: fav_products.filter((prodId) => prodId !== id),
					};
				}
				return {
					...user,
					fav_products: [...fav_products, id],
				};
			}
			return user;
		});
	};

	return {
		subscribe,
		login,
		logout,
		addFavProduct,
	};
}

export const currentUserStore = createCurrentUserStore();
