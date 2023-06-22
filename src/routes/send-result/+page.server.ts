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
		const bodyJson = await request.json();

		await usersApiClient.setHairType(session.user.id, bodyJson.hairType);
		return;
	},
} as const;
