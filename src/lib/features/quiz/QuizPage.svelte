<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";
	import QuestionPrompt from "./QuestionPrompt.svelte";
	let currentQuestionId = 0;
	import {quiz_all} from "./quiz-answers.js";
	import QuizResults from "./QuizResults.svelte";
	import type {AnswerToQuestion} from "./types/AnswerToQuestion.js";
	import type {Question} from "./types/Question.js";

	let userAnswers: Map<number, DeepReadonly<AnswerToQuestion>> = new Map();

	$: question = quiz_all[currentQuestionId] as Question;

	const answer = (event: CustomEvent<AnswerToQuestion>) => {
		const {detail: userAnswer} = event;
		userAnswers.set(currentQuestionId, userAnswer);
		++currentQuestionId;
	};
</script>

<div class="quiz-page">
	{#if currentQuestionId < quiz_all.length}
		<QuestionPrompt {question} on:answer={answer} />
	{:else}
		<QuizResults {userAnswers} />
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
