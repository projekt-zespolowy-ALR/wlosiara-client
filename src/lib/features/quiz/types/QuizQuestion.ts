import type {QuizQuestionAnswer} from "./QuizQuestionAnswer.js";

export type QuizQuestion = {
	answers: QuizQuestionAnswer[];
	content: string;
	id: string;
};
