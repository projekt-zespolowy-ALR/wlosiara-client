import {render, screen} from "@testing-library/svelte";
import ProductsListPage from "../src/routes/+page.svelte";
import {describe, expect, test} from "vitest";

describe("Product page", () => {
	test("rendering products list", () => {
		render(ProductsListPage);
		expect(() => {
			screen.getByText("Baza produktów");
		}).not.toThrow();
	});
});
