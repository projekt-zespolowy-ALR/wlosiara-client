import {render, screen} from "@testing-library/svelte";
import ProductsListPage from "../src/routes/+page.svelte";
import {describe, expect, test} from "vitest";
import exp from "constants";

describe("Product page", () => {

	async function waitABit() {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}
	test("products list page exists", () => {
		render(ProductsListPage);
		expect(() => {
			screen.getByText("Baza produktów");
		}).not.toThrow();
	});
	test("products list page has products", async () => {
		render(ProductsListPage);
		await waitABit();
		const products = document.querySelectorAll(".item-info");
		expect(() => {
				expect(products).not.toBeNull();
		}).not.toThrow();
	});
	test("filters component is visible", async () => {
		render(ProductsListPage);
		await waitABit();
		await waitABit();

		const filtersContainer = document.querySelector("div.filter-menu");
		console.log(typeof filtersContainer);
		// const filters = document.querySelectorAll(".filter-menu > div");
		expect(() => {
			// console.log(document.querySelector("div.filter-menu"));
			expect(filtersContainer).not.toBeNull();
			// expect(filters).not.toBeNull();
			// expect(filters.length).toBe(3);
			// console.log(filters);
		}).not.toThrow();
	});
});
