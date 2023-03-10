import type User from "$lib/features/users/User.js";
import type BlogEntry from "$lib/features/blog/BlogEntry.js";

type PopulatedBlogEntry = Omit<BlogEntry, "authorId"> &
	Readonly<{
		author: User;
	}>;

export default PopulatedBlogEntry;
