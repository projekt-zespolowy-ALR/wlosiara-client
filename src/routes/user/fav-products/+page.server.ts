import type {Product} from "$lib/features/products/types/Product.js";
import type {DeepReadonly} from "ts-essentials";
import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async () => {
	// const search = url.searchParams.get("search");
	const filteredProducts: DeepReadonly<Product[]> = [];
	return {
		products: filteredProducts,
	} as const;
};
