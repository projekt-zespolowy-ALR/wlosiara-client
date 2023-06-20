import type {DeepReadonly} from "ts-essentials";
import type {Actions} from "./$types.js";

export const actions: DeepReadonly<Actions> = {
	default: async (event) => {
		const {authService} = await import("$lib/server/instances/authService.js");
		// console.log("hello");
		const data = await event.request.formData();
		// console.log(data);
		const email = data.get("email")?.toString() ?? "";
		const password = data.get("password")?.toString() ?? "";

		const sessid = await authService.login({email, password});
		// console.log("ssid", sessid);
		event.cookies.set("session_token", sessid.token);

		return !!sessid.token;
	},
} as const;
