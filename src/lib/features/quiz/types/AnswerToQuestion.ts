import type HairType from "./HairType.js";

type AnswerToQuestion = Readonly<{
	questionId: number;
	type: HairType;
}>;

export default AnswerToQuestion;
