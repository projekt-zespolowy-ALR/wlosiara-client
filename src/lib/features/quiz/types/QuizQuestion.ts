import type {Quiz} from "./Quiz.js";
import type {QuizQuestionAnswer} from "./QuizQuestionAnswer.js";

export type QuizQuestion = {
	answers: QuizQuestionAnswer[];
	content: string;
	id: string;
	quiz: Quiz;
};
