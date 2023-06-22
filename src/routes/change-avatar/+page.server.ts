import {fail} from "@sveltejs/kit";

export const actions = {
	async default(event) {
		const [{usersApiClient}, {authService}] = await Promise.all([
			import("$lib/server/instances/usersApiClient.js"),
			import("$lib/server/instances/authService.js"),
		]);
		const {cookies} = event;
		const sessionToken = cookies.get("session_token");
		if (sessionToken === undefined) {
			return fail(401);
		}
		const session = await authService.me(sessionToken);

		const body = await event.request.json();
		const {avatarUrl} = body;
		const newUser = {
			username: session.user.username,
			avatarUrl,
		};
		await usersApiClient.updateUser(session.user.id, newUser);
		return;
	},
} as const;
