import type {DeepReadonly} from "ts-essentials";

import type {PageServerLoad} from "./$types.js";
import type {Product} from "$lib/features/products/types/Product.js";
import type {PagingOptions} from "$lib/utils/PagingOptions.js";
import type {Page} from "$lib/server/utils/Page.js";

export const load: PageServerLoad = async ({url, parent}) => {
	const [{productsService}, {currentUser}] = await Promise.all([
		import("$lib/server/instances/productsService.js"),
		parent(),
	]);
	const pagingOptions: DeepReadonly<PagingOptions> = {
		number: Number(url.searchParams.get("page-number") ?? "1"),
		size: Number(url.searchParams.get("page-size") ?? "12"),
	};
	const userId = currentUser?.id ?? null;
	if (userId === null) {
		throw new Error("User is not authenticated");
	}
	const productsPage: DeepReadonly<Page<Product & {isFavorite: boolean | null}>> =
		await productsService.getFavoriteProductsPage(userId, pagingOptions);
	return {
		productsPage,
	} as const;
};
