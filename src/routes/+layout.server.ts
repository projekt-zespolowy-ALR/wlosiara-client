import mockedUsers from "$lib/server/features/users/mockedUsers.js";
import userIdBySessionToken from "$lib/server/features/auth/userIdBySessionToken.js";
import type {LayoutServerLoad} from "./$types.js";

export const load: LayoutServerLoad = async ({cookies}) => {
	const sessionToken = cookies.get("sessionToken");
	const userId = sessionToken === undefined ? null : userIdBySessionToken.get(sessionToken) ?? null;
	const user = userId === null ? null : mockedUsers.find((user) => user.id === userId) ?? null;
	if (userId !== null && user === null) {
		cookies.delete("sessionToken");
	}
	return {
		currentUser: user,
	} as const;
};
