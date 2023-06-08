import type {Answer} from "./Answer.js";

export type Question = {
	text: string;
	id: number;
	answers: Array<Answer>;
};
