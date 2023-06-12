import type {QuizQuestion} from "./QuizQuestion.js";

export type QuizQuestionAnswer = {
	id: string;
	question: QuizQuestion;
	content: string;
	kind: string;
};
