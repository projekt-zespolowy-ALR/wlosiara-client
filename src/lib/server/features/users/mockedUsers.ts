import type {User} from "$lib/features/users/types/User.js";
import type {DeepReadonly} from "ts-essentials";

export const mockedUsers: DeepReadonly<User[]> = [
	{
		id: "anna-nowak",
		username: "annanowak",
		fav_products: [],
	},
	{
		id: "natalia-pawlowska",
		username: "natalcia123",
		fav_products: [],
	},
];
