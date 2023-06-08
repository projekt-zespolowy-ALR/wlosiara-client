import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async ({params}) => {
	throw new Error(`Product with id "${params.productId}" not found.`);
};
