import type BlogEntry from "$lib/features/blog/types/BlogEntry.js";
import mockedBlogEntries from "$lib/server/features/blog/mockedBlogEntries.js";
import mockedUsers from "$lib/server/features/users/mockedUsers.js";
import type {PageServerLoad} from "./$types.js";

function populateBlogEntry(blogEntry: Omit<BlogEntry, "author"> & {authorId: string}) {
	const author = mockedUsers.find((user) => user.id === blogEntry.authorId);
	if (!author) {
		throw new Error(`Author with id "${blogEntry.authorId}" not found.`);
	}

	const blogEntryWithoutAuthorId = (({authorId, ...blogEntryWithoutAuthorId}) =>
		blogEntryWithoutAuthorId)(blogEntry);

	const BlogEntry = {
		...blogEntryWithoutAuthorId,
		author,
	};

	return {
		...BlogEntry,
		author,
	} as const;
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
	} as const;
};
