import mockedPopulatedProducts from "$lib/server/features/products/mockedPopulatedProducts.js";
import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async ({params}) => {
	const targetProduct = mockedPopulatedProducts.find((product) => product.id === params.productId);

	if (!targetProduct) {
		throw new Error(`Product with id "${params.productId}" not found.`);
	}
	return {
		product: targetProduct,
	} as const;
};
