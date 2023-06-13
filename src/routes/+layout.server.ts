import type {DeepReadonly} from "ts-essentials";
import type {LayoutServerLoad} from "./$types.js";
import type {Session} from "$lib/server/features/auth/Session.js";

export const load: LayoutServerLoad = async ({cookies}) => {
	const [
		{authService},
		{
			appConfig: {SESSION_TOKEN_COOKIE_NAME},
		},
	] = await Promise.all([
		import("$lib/server/instances/authService.js"),
		import("$lib/server/app_config/appConfig.js"),
	]);
	const sessionToken = cookies.get(SESSION_TOKEN_COOKIE_NAME);
	const currentSession: DeepReadonly<Session> | null = sessionToken
		? await authService.me(sessionToken)
		: null;

	return {
		currentUser: currentSession?.user ?? null,
	} as const;
};
