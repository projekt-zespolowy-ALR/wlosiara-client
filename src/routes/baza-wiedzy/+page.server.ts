import type BlogEntry from "$lib/features/blog/types/BlogEntry.js";
import mockedBlogEntries from "$lib/server/features/blog/mockedBlogEntries.js";
import mockedUsers from "$lib/server/features/users/mockedUsers.js";

import type {PageServerLoad} from "./$types.js";

function populateBlogEntry(blogEntry: BlogEntry) {
	const author = mockedUsers.find((user) => user.id === blogEntry.authorId);
	if (!author) {
		throw new Error(`Author with id "${blogEntry.authorId}" not found.`);
	}

	const blogEntryWithoutAuthorId = (({authorId, ...blogEntryWithoutAuthorId}) =>
		blogEntryWithoutAuthorId)(blogEntry);

	const populatedBlogEntry = {
		...blogEntryWithoutAuthorId,
		author,
	};

	return {
		...populatedBlogEntry,
		author,
	} as const;
}

export const load: PageServerLoad = async ({url}) => {
	const search = url.searchParams.get("search");
	const filteredBlogEntries =
		search === null
			? mockedBlogEntries
			: mockedBlogEntries.filter(
					(blogEntry) =>
						blogEntry.title !== null && blogEntry.title.toLowerCase().includes(search.toLowerCase())
			  );
	const populatedBlogEntries = filteredBlogEntries.map(populateBlogEntry);
	return {
		blogEntries: populatedBlogEntries,
	} as const;
};
