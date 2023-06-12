import type {QuizQuestion} from "./QuizQuestion.js";

export type Quiz = {
	id: string;
	slug: string;
	name: string;
	questions: QuizQuestion[];
};
