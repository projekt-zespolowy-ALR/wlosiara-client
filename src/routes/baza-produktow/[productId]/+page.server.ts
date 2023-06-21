import type {DeepReadonly} from "ts-essentials";
import type {PageServerLoad} from "./$types.js";
import type {Product} from "$lib/features/products/types/Product.js";

export const load: PageServerLoad = async ({params, cookies}) => {
	const [{productsService}, {authService}] = await Promise.all([
		import("$lib/server/instances/productsService.js"),
		import("$lib/server/instances/authService.js"),
	]);
	const {productId} = params;
	const sessionToken = cookies.get("session_token");
	const session = sessionToken === undefined ? null : await authService.me(sessionToken);

	const product: DeepReadonly<Product> = await productsService.getProductById(
		productId,
		session?.user.id ?? null
	);
	return {
		product,
	} as const;
};
