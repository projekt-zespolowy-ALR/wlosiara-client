import type {User} from "$lib/features/users/types/User.js";
import type {BlogComment} from "./BlogComment.js";

export type BlogEntry = {
	id: string;
	title: string;
	author: User;
	text: string;
	imageUrl: string;
	comments: BlogComment[];
	type: string;
};
