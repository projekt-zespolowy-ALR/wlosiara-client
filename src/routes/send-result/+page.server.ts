import {fail} from "@sveltejs/kit";

export const actions = {
	async default({cookies, request}) {
		const [{usersApiClient}, {authService}] = await Promise.all([
			import("$lib/server/instances/usersApiClient.js"),
			import("$lib/server/instances/authService.js"),
		]);

		const sessionToken = cookies.get("session_token");
		if (sessionToken === undefined) {
			return fail(401);
		}
		const session = await authService.me(sessionToken);
		const formData = await request.formData();
		console.log(`formData`, formData);
		try {
			await usersApiClient.setHairType(session.user.id, formData.get("hairType") as string);
			return;
		} catch (error) {
			if (error instanceof Error && error.message === "Invalid hair type") {
				return fail(400, {message: "Invalid hair type"});
			}
			throw error;
		}
	},
} as const;
