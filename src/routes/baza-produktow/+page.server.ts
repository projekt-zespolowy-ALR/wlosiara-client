import type {DeepReadonly} from "ts-essentials";

import type {PageServerLoad} from "./$types.js";
import type {Product} from "$lib/features/products/types/Product.js";

export const load: PageServerLoad = async () => {
	const filteredProducts: DeepReadonly<Product[]> = [] as const;

	return {
		products: filteredProducts,
	} as const;
};
