import type {AnswerToQuestion} from "src/components/products/interfaces";
import {writable, type Writable} from "svelte/store";

export const AnswerStore: Writable<{[key: number | string]: AnswerToQuestion}> = writable({
	currentQuestion: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	0: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	1: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	2: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	3: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	4: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	5: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	6: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	7: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	8: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	9: {
		questionId: 0,
		answer: -1,
		type: "",
	},
	10: {
		questionId: 0,
		answer: -1,
		type: "",
	},
});
