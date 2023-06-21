import {fail} from "@sveltejs/kit";

export const actions = {
	default: async (event) => {
		const {authService} = await import("$lib/server/instances/authService.js");
		// console.log("hello");
		const data = await event.request.formData();
		// console.log(data);
		const email = data.get("email")?.toString() ?? "";
		const password = data.get("password")?.toString() ?? "";
		const username = data.get("username")?.toString() ?? "";

		try {
			await authService.register({email, password, username});
			// console.log("ssid", sessid);
			//event.cookies.set("session_token", sessid.token);

			return {
				message: "Registered.",
			};
		} catch (error) {
			return fail(401, {message: "Invalid credentials"});
		}
	},
} as const;
