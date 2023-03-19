import {preview} from "vite";
import {chromium} from "playwright";
import {test, expect} from "@playwright/test";

test.describe("/", () => {
	test("displays hello message", async () => {
		const server = await preview();
		const browser = await chromium.launch();
		const page = await browser.newPage();
		if (!server.resolvedUrls.local[0]) {
			throw new Error("No local URL");
		}
		await page.goto(server.resolvedUrls.local[0]);
		await expect(page.locator("body")).toContainText("Witaj w serwisie włosiara.pl!");
		await browser.close();
		server.httpServer.close();
	});

	// można tylko sprawdzić, czy da się kliknąć w "log in" i czy wyświetla się nowa strona, ponieważ później są skrypty
	// anty-botowe, które blokują automatyczne logowanie

	// test("logging in works", async () => {
	// 	const server = await preview();
	// 	const browser = await chromium.launch();
	// 	const page = await browser.newPage();
	// 	if (!server.resolvedUrls.local[0]) {
	// 		throw new Error("No local URL");
	// 	}
	// 	await page.goto(server.resolvedUrls.local[0]);

	// 	const [pageTwo] = await Promise.all([
	// 		page.waitForEvent("popup"),
	// 		await page.locator(".nav-link").click(),
	// 	]);
	// 	let fail = false;
	// 	if (!pageTwo) {
	// 		fail = true;
	// 		throw new Error("No popup");
	// 	} else {
	// 		fail = false;
	// 	}
	// 	await expect(fail).toBe(false);
	// 	await browser.close();
	// 	server.httpServer.close();
	// });

	// test("product details are shown", async () => {
	// 	const server = await preview();
	// 	const browser = await chromium.launch();
	// 	const page = await browser.newPage();
	// 	if (!server.resolvedUrls.local[0]) {
	// 		throw new Error("No local URL");
	// 	}
	// 	await page.goto(server.resolvedUrls.local[0]);
	// 	await page.getByText("baza produktów").click();
	// 	const products = await page.locator(".product-list-page > ul > li > a");
	// 	const linksCount = await products.count();
	// 	const randomProduct = Math.floor(Math.random() * linksCount);
	// 	await products.nth(randomProduct).click();

	// 	await expect(page.locator(".product")).toBeVisible();
	// 	await browser.close();
	// 	server.httpServer.close();
	// });

	test("blog page", async () => {
		const server = await preview();
		const browser = await chromium.launch();
		const page = await browser.newPage();
		if (!server.resolvedUrls.local[0]) {
			throw new Error("No local URL");
		}
		await page.goto(server.resolvedUrls.local[0]);
		await page.getByText("baza wiedzy").click();
		const posts = await page.locator(".product-list-page > ul > li > a");
		const linksCount = await posts.count();
		const randomPost = Math.floor(Math.random() * linksCount);
		await posts.nth(randomPost).click();

		await expect(page.locator(".post")).toBeVisible();
		await browser.close();
		server.httpServer.close();
	});
});
