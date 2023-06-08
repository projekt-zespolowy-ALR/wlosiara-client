import type {Actions} from "./$types.js";
import {userIdBySessionToken} from "$lib/server/features/auth/userIdBySessionToken.js";

export const actions: Actions = {
	default: async ({cookies}) => {
		const sessionToken = cookies.get("sessionToken");
		if (sessionToken === undefined) return;
		userIdBySessionToken.delete(sessionToken);
		cookies.delete("sessionToken");
	},
};
