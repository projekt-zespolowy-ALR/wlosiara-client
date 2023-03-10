import mockedPopulatedProducts from "$lib/server/features/products/mockedPopulatedProducts.js";

import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async () => {
	return {
		products: mockedPopulatedProducts,
	};
};
