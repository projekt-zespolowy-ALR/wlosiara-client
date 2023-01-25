import {fireEvent, render, screen} from "@testing-library/svelte";
import QuizPage from "../src/routes/quiz/+page.svelte";
import {describe, expect, test} from "vitest";

describe("Quiz page", () => {
	test("Quiz message", () => {
		render(QuizPage);
		expect(() => {
			screen.getByText("Jakie są twoje włosy?");
		}).not.toThrow();
	});
	test("Elements are clickable", () => {
		render(QuizPage);
		//@ts-ignore
		fireEvent.click(screen.getAllByRole("button")[0]);
		expect(() => {
			const question = document.querySelector(".question");
			expect(question).not.toBeNull();
		}).not.toThrow();
	});
	test("Results are shown", () => {
		render(QuizPage);
		for (let i = 0; i < 21; i++) {
			//@ts-ignore
			fireEvent.click(screen.getAllByRole("button")[0]);
		}
		expect(() => {
			const result: String | null | undefined = document.querySelector("p")?.textContent;
			expect(result).not.toBeNull();
		}).not.toThrow();
	});
});
