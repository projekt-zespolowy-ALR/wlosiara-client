import {render, screen} from "@testing-library/svelte";
import LandingPage from "../src/routes/+page.svelte";
import matchers from "@testing-library/jest-dom/matchers";
import {describe, expect, test} from "vitest";
expect.extend(matchers);

describe("Landing page", () => {
	test("Quiz message", () => {
		render(LandingPage);
		expect(screen.getByText("Jakie są twoje włosy?")).toBeInTheDocument();
	});
});
