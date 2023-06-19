import type {PageServerLoad} from "./$types.js";

import type {DeepReadonly} from "ts-essentials";
import type {BlogEntry} from "$lib/features/blog/types/BlogEntry.js";
export const load: PageServerLoad = async ({params}) => {
	const {blogService} = await import("$lib/server/instances/blogService.js");
	const targetBlogEntryId = params.blogEntryId;
	const blogEntry: DeepReadonly<BlogEntry> = await blogService.getPostById(targetBlogEntryId);
	return {
		blogEntry: blogEntry,
	} as const;
};
