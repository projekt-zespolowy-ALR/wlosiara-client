import {render, screen} from "@testing-library/svelte";
import LandingPage from "../src/routes/+page.svelte";
import matchers from "@testing-library/jest-dom/matchers";
import {describe, expect, test} from "vitest";
expect.extend(matchers);

describe("Landing page", () => {
	test("Welcome message", () => {
		render(LandingPage);
		expect(screen.getByText("Content")).toBeInTheDocument();
	});
});
