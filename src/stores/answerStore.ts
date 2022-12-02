import type {AnswerToQuestion} from "src/components/products/interfaces";
import {writable, type Writable} from "svelte/store";

export const AnswerStore: Writable<{[key: number | string]: AnswerToQuestion}> = writable({
    currentQuestion: {
        questionId: 0,
        answer: -1
    },
    0: {
        questionId: 0,
        answer: -1
    },
    1: {
        questionId: 0,
        answer: -1
    },
    2: {
        questionId: 0,
        answer: -1
    },
    3: {
        questionId: 0,
        answer: -1
    },
    4: {
        questionId: 0,
        answer: -1
    },
    5: {
        questionId: 0,
        answer: -1
    },
    6: {
        questionId: 0,
        answer: -1
    },
    7: {
        questionId: 0,
        answer: -1
    },
    8: {
        questionId: 0,
        answer: -1
    },
    9: {
        questionId: 0,
        answer: -1
    },
    10: {
        questionId: 0,
        answer: -1
    }
});