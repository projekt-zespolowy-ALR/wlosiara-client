import type {DeepReadonly} from "ts-essentials";
import type {Actions} from "./$types.js";
import {invalidateAll} from "$app/navigation";
import { authService } from "$lib/server/instances/authService.js";

export const actions: DeepReadonly<Actions> = {
    default: async (event) => {
		// const formEl = event.target as HTMLFormElement;
		// await fetch(formEl.action, {
		// 	method: "POST",
		// 	body: "",
		// });

        event.cookies.delete('sessionid');
        // event.locals.user = null;

		await invalidateAll();
    }
} as const;
