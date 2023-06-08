import type {User} from "$lib/features/users/types/User.js";

export type BlogEntry = {
	id: string;
	title: string;
	author: User;
	text: string;
	imageUrl: string;
};
