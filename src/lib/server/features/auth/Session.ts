import type {User} from "$lib/features/users/types/User.js";

export type Session = {
	// id: string;
	token: string;
	user: User;
};
