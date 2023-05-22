import type Answer from "./Answer.js";

type Question = {
	text: string;
	id: number;
	answers: Array<Answer>;
};

export default Question;
