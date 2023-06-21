import {fail} from "@sveltejs/kit";

export const actions = {
	async default(event) {
		const [{productsService}, {authService}] = await Promise.all([
			import("$lib/server/instances/productsService.js"),
			import("$lib/server/instances/authService.js"),
		]);
		const targetProductId = event.url.searchParams.get("product");
		if (targetProductId === null) {
			return fail(400);
		}
		const {cookies} = event;
		const sessionToken = cookies.get("session_token");
		if (sessionToken === undefined) {
			return fail(401);
		}
		const session = await authService.me(sessionToken);

		await productsService.unlikeProduct(session.user.id, targetProductId);
		return;
	},
} as const;
