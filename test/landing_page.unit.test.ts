import {render, screen} from "@testing-library/svelte";
import LandingPage from "../src/routes/+page.svelte";
import {describe, expect, test} from "vitest";

describe("Landing page", () => {
	test("Quiz message", () => {
		render(LandingPage);
		expect(() => {
			screen.getByText("Jakie są twoje włosy?");
		}).not.toThrow();
	});
});
