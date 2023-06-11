import type {DeepReadonly} from "ts-essentials";

import mockedPopulatedProducts from "../../mock/MockedPopulatedProducts.js";
import type {PageServerLoad} from "./$types.js";
import type {Product} from "$lib/features/products/types/Product.js";
import type {Page} from "$lib/server/utils/Page.js";

export const load: PageServerLoad = async () => {
	const {productsService} = await import("$lib/server/instances/productsService.js");
	const productsPage: DeepReadonly<Page<Product>> = await productsService.getProductsPage();

	return {
		productsPage,
	} as const;
	// const page: Page<Product> = {
	// 	items: mockedPopulatedProducts as Product[],
	// 	meta: {
	// 		skip: 0,
	// 		take: 10,
	// 		totalItemsCount: 10
	// 	}
	// } 
	// return {
	// 	page
	// } as const;
};
