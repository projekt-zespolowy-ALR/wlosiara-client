import BlogEntry from "$lib/features/blog/BlogEntry.js";
import PopulatedBlogEntry from "$lib/features/blog/PopulatedBlogEntry.js";
import mockedBlogEntries from "$lib/server/features/blog/mockedBlogEntries.js";
import mockedUsers from "$lib/server/features/users/mockedUsers.js";

import type {PageServerLoad} from "./$types.js";

function populateBlogEntry(blogEntry: BlogEntry): PopulatedBlogEntry {
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
	};
}

export const load: PageServerLoad = async ({params}) => {
	const targetBlogEntry = mockedBlogEntries.find(
		(blogEntry) => blogEntry.id === params.blogEntryId
	);
	if (!targetBlogEntry) {
		throw new Error(`Blog entry with id "${params.blogEntryId}" not found.`);
	}
	const populatedTargetBlogEntry = populateBlogEntry(targetBlogEntry);
	return {
		blogEntry: populatedTargetBlogEntry,
	};
};
