import {defineConfig} from "vitest/config";
import {svelte} from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte({hot: !process.env["VITEST"]})],
	test: {
		include: ["**/*.test.ts", "**/*.test.js", "**/*.test.cjs", "**/*.test.mjs"],
		environment: "jsdom",
		coverage: {
			provider: "c8",
			reporter: ["html", "text"],
		},
	},
});
