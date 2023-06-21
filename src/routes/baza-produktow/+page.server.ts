import type {PageServerLoad} from "./$types.js";
import type {DeepReadonly} from "ts-essentials";
import type {Page} from "$lib/server/utils/Page.js";
import type {Product} from "$lib/features/products/types/Product.js";
import type {PagingOptions} from "$lib/utils/PagingOptions.js";

export const load: PageServerLoad = async ({url, cookies}) => {
	const [{productsService}, {authService}] = await Promise.all([
		import("$lib/server/instances/productsService.js"),
		import("$lib/server/instances/authService.js"),
	]);
	const pagingOptions: DeepReadonly<PagingOptions> = {
		number: Number(url.searchParams.get("page-number") ?? "1"),
		size: Number(url.searchParams.get("page-size") ?? "12"),
	};
	const sessionToken = cookies.get("session_token");
	const session = sessionToken === undefined ? null : await authService.me(sessionToken);
	const productsPage: DeepReadonly<Page<Product & {isFavorite: boolean | null}>> =
		await productsService.getProductsPage(pagingOptions, session?.user.id ?? null);

	return {
		productsPage,
		pagingOptions,
	} as const;
};
