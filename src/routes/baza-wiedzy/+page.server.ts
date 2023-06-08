import type {BlogEntry} from "$lib/features/blog/types/BlogEntry.js";
import type {DeepReadonly} from "ts-essentials";

import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async () => {
	// const search = url.searchParams.get("search");
	const filteredBlogEntries: DeepReadonly<BlogEntry[]> = [] as const;
	return {
		blogEntries: filteredBlogEntries,
	} as const;
};
