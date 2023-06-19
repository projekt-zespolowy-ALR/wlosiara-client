import type {BlogEntry} from "$lib/features/blog/types/BlogEntry.js";
import type {DeepReadonly} from "ts-essentials";

import type {PageServerLoad} from "./$types.js";

import {blogService} from "$lib/server/instances/blogService.js";
import type {Page} from "$lib/server/utils/Page.js";

export const load: PageServerLoad = async () => {
	const blogEntriesPage: DeepReadonly<Page<BlogEntry>> = await blogService.getPostsPage({
		number: 1,
		size: 10,
	});
	return {
		blogEntriesPage: blogEntriesPage,
	} as const;
};
