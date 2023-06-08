import {mockedProducts} from "$lib/server/features/products/mockedProducts.js";
import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async ({params}) => {
	const targetProduct = mockedProducts.find((product) => product.id === params.productId);

	if (!targetProduct) {
		throw new Error(`Product with id "${params.productId}" not found.`);
	}
	return {
		product: targetProduct,
	} as const;
};
