import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async ({params}) => {
	throw new Error(`Blog entry with id "${params.blogEntryId}" not found.`);
};
