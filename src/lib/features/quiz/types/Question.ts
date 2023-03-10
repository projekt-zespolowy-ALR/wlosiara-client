import type Answer from "./Answer.js";

type Question = Readonly<{
	text: string;
	id: number;
	answers: Array<Answer>;
}>;

export default Question;
