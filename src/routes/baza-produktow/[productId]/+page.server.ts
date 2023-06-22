import type {DeepReadonly} from "ts-essentials";
import type {PageServerLoad} from "./$types.js";
import type {Product} from "$lib/features/products/types/Product.js";

export const load: PageServerLoad = async ({params, parent}) => {
	const [{productsService}, {currentUser}] = await Promise.all([
		import("$lib/server/instances/productsService.js"),
		parent(),
	]);
	const {productId} = params;

	const product: DeepReadonly<
		Product & {
			isFavorite: boolean | null;
		}
	> = await productsService.getProductById(productId, currentUser?.id ?? null);
	return {
		product,
	} as const;
};
