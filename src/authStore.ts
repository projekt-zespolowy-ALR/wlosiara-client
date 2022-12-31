// src/store.js

import {Writable, writable} from "svelte/store";

export interface UserData {
	name: string;
	email: string;
}

export const isAuthenticated = writable(false);
export const user: Writable<UserData> = writable();
export const popupOpen = writable(false);
export const error = writable();
