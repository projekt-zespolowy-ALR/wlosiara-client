import type {DeepReadonly} from "ts-essentials";
import type {PageServerLoad} from "./$types.js";
import type {Product} from "$lib/features/products/types/Product.js";

export const load: PageServerLoad = async ({params}) => {
	const {productsService} = await import("$lib/server/instances/productsService.js");
	const {productId} = params;
	const product: DeepReadonly<Product> = await productsService.getProductById(productId);
	return {
		product,
	} as const;
};
