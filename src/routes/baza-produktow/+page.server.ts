import type {DeepReadonly} from "ts-essentials";

import type {PageServerLoad} from "./$types.js";
import type {Product} from "$lib/features/products/types/Product.js";
import type {Page} from "$lib/server/utils/Page.js";

export const load: PageServerLoad = async () => {
	const {productsService} = await import("$lib/server/instances/productsService.js");
	const productsPage: DeepReadonly<Page<Product>> = await productsService.getProductsPage();

	return {
		productsPage,
	} as const;
};
