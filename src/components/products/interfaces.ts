export interface Product {
	id: string;
	name: string;
	category: string;
	description: string;
	image_url: string;
}

export interface Question {
	question: string;
	id: number;
	answers: Array<Answer>;
}

export interface Answer {
	answer: string;
	type: string;
}

export interface AnswerToQuestion {
	questionId: number;
	answer: number;
	type: string;
}
