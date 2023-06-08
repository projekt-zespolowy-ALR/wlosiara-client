import {mockedProducts} from "$lib/server/features/products/mockedProducts.js";

import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async ({url}) => {
	const search = url.searchParams.get("search");
	const filteredProducts =
		search === null
			? mockedProducts
			: mockedProducts.filter(
					(product) =>
						product.name !== null && product.name.toLowerCase().includes(search.toLowerCase())
			  );

	return {
		products: filteredProducts,
	} as const;
};
