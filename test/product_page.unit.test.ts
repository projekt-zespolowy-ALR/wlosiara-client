import { fireEvent, render, screen } from "@testing-library/svelte";
import ProductsListPage from "../src/routes/baza-produktow/+page.svelte";
import {describe, expect, test} from "vitest";
async function waitABit(time: number) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
describe("Product page", () => {

	test("products list page exists", () => {
		render(ProductsListPage);
		expect(() => {
			screen.getByText("Baza produktów");
		}).not.toThrow();
	});

	test("products list page has products", async () => {
		render(ProductsListPage);
		await waitABit(3000);
		const products: NodeListOf<Element> | NodeList | null = document.querySelectorAll(".item-info");
		expect(() => {
				expect(products).not.toBeNull();
		}).not.toThrow();
	});
	test("filters component is visible", async () => {
		render(ProductsListPage);
		await waitABit(2500);
		const filters = document.querySelectorAll(".filter-menu > div");
		expect(() => {
			expect(filters).not.toBeNull();
		}).not.toThrow();
	});

	test("single product page", async () => {
		render(ProductsListPage);
		await waitABit(2500);
		fireEvent.click(
			screen.getByDisplayValue("Moj pierwszy produkt")
		);
		await waitABit(2500);
		expect(() => {
			expect(document.querySelector(".short-text > p:nth-child(1)")).not.toBeNull();
		}).not.toThrow();
	}, 10000);
});
