import type {Actions} from "./$types.js";
import userIdBySessionToken from "$lib/server/features/auth/userIdBySessionToken.js";
import mockedUsers from "$lib/server/features/users/mockedUsers.js";
import type User from "$lib/features/users/types/User.js";
export const actions: Actions = {
	default: async ({cookies}) => {
		const user = mockedUsers[Math.floor(Math.random() * mockedUsers.length)] as User;
		const sessionToken = Math.random().toString(36).slice(2);
		userIdBySessionToken.set(sessionToken, user.id);
		cookies.set("sessionToken", sessionToken);
	},
};
