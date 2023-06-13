import type {User} from "$lib/features/users/types/User.js";
import type {BlogEntry} from "./BlogEntry.js";

export type BlogComment = {
	id: string;
	author: User;
	post: BlogEntry;
	text: string;
};
