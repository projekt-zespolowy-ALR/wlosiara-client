import {fireEvent, render, screen} from "@testing-library/svelte";
import QuizPage from "../src/lib/features/quiz/QuizPage.svelte";
import {describe, expect, test} from "vitest";
import type {Quiz} from "$lib/features/quiz/types/Quiz.js";

describe("Quiz page", () => {
	test("Quiz message", () => {
		const quiz: Quiz = {
			id: "1",
			slug: "test",
			name: "Test",
			questions: [
				{
					id: "1",
					content: "Jakie są twoje włosy?",
					answers: [],
				},
			],
		};
		render(QuizPage, {props: {quiz}});
		expect(() => {
			screen.getByText("Jakie są twoje włosy?");
		}).not.toThrow();
	});
	test("Elements are clickable", () => {
		const quiz: Quiz = {
			id: "1",
			slug: "test",
			name: "Test",
			questions: [
				{
					id: "1",
					content: "Jakie są twoje włosy?",
					answers: [
						{
							id: "1",
							content: "Czarne",
							kind: "single",
						},
					],
				},
			],
		};
		render(QuizPage, {props: {quiz}});
		fireEvent.click(screen.getAllByRole("button")[0] as HTMLButtonElement);
		expect(() => {
			const question = document.querySelector(".question");
			expect(question).not.toBeNull();
		}).not.toThrow();
	});
	// test("Results are shown", () => {
	// 	render(QuizPage);
	// 	for (let i = 0; i < 21; i++) {
	// 		fireEvent.click(screen.getAllByRole("button")[0] as HTMLButtonElement);
	// 	}
	// 	expect(() => {
	// 		const result: string | null | undefined = document.querySelector("p")?.textContent;
	// 		expect(result).not.toBeNull();
	// 	}).not.toThrow();
	// });
});
