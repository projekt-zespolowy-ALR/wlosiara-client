import type User from "$lib/features/users/User.js";

type BlogEntry = Readonly<{
	id: string;
	title: string;
	author: User;
	text: string;
	imageUrl: string;
}>;

export default BlogEntry;
