export type HairType = "Niskoporowate" | "Średnioporowate" | "Wysokoporowate";

export type QuestionId = number;

export interface Question {
	text: string;
	id: QuestionId;
	answers: Array<Answer>;
}

export interface Answer {
	text: string;
	type: HairType;
}

export interface AnswerToQuestion {
	questionId: QuestionId;
	type: HairType;
}
