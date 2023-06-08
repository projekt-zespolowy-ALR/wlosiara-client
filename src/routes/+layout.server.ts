import type {LayoutServerLoad} from "./$types.js";

export const load: LayoutServerLoad = async () => {
	return {
		currentUser: null,
	} as const;
};
