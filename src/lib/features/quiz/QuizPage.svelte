<script lang="ts">
	const splitArrayAt = <T>(array: readonly T[], index: number) => {
		const first = array.slice(0, index);
		const second = array.slice(index);
		return [first, second] as const;
	};
	import type {DeepReadonly} from "ts-essentials";
	export let quiz: DeepReadonly<Quiz>;

	$: questionNumber = 0;
	$: [previousQuestions, nextQuestions] = splitArrayAt(quiz.questions, questionNumber);
	$: currentQuestion = nextQuestions[0];

	import type {Quiz} from "./types/Quiz.js";
	import QuestionPrompt from "./QuestionPrompt.svelte";
	import QuizResults from "./QuizResults.svelte";

	$: userAnswerKindsCounter = new Map<string, number>();

	const handleAnswer = (e: CustomEvent<string>) => {
		const anwerKind = e.detail;
		userAnswerKindsCounter.set(anwerKind, (userAnswerKindsCounter.get(anwerKind) ?? 0) + 1);
		++questionNumber;
	};
</script>

<div class="quiz-page">
	{#if currentQuestion}
		<QuestionPrompt question={currentQuestion} on:answer_given={handleAnswer} />
	{:else}
		<QuizResults {userAnswerKindsCounter} />
	{/if}
</div>

<style>
	.quiz-page {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
</style>
