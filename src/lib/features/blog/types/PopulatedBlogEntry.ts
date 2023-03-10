import type User from "$lib/features/users/types/User.js";
import type BlogEntry from "$lib/features/blog/types/BlogEntry.js";

type PopulatedBlogEntry = Omit<BlogEntry, "authorId"> &
	Readonly<{
		author: User;
	}>;

export default PopulatedBlogEntry;
