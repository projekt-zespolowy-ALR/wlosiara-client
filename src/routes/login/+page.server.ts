import type {DeepReadonly} from "ts-essentials";
import type {Actions} from "./$types.js";
import {invalidateAll} from "$app/navigation";
import { authService } from "$lib/server/instances/authService.js";


export const actions: DeepReadonly<Actions> = {
    default: async (event) => {
        // console.log("hello");
		const data = await event.request.formData();
        console.log(data);
        const email = data.get('email')?.toString() ?? "";
        const password = data.get('password')?.toString() ?? "";
        
        const sessid = await authService.login({email, password});
        console.log("ssid", sessid);
        event.cookies.set('sessionid', sessid.token);

		// await fetch(formEl.action, {
		// 	method: "POST",
		// 	body: "",
		// });

		// await invalidateAll();
    }
} as const;
