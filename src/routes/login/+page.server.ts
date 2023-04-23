import type {Actions} from "./$types.js";

export const actions: Actions = {
	default: async ({cookies}) => {
		cookies.set("sessionToken", "1234567890");
	},
};
