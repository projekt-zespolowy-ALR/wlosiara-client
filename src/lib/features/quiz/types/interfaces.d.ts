export type HairType = "Niskoporowate" | "Średnioporowate" | "Wysokoporowate";

export type QuestionId = number;

export type Question = {
	text: string;
	id: QuestionId;
	answers: Array<Answer>;
};

export type Answer = {
	text: string;
	type: HairType;
};

export type AnswerToQuestion = {
	questionId: QuestionId;
	type: HairType;
};
