<script type="ts">
	import QuestionPrompt from "./QuestionPrompt.svelte";
	let currentQuestionId = 0;
	import {quiz_all} from "./quiz-answers";
	import QuizResults from "./QuizResults.svelte";
	import type {Question, QuestionId, AnswerToQuestion} from "./interfaces.d";

	let userAnswers: Map<QuestionId, AnswerToQuestion> = new Map();

	$: question = quiz_all[currentQuestionId] as Question;

	const answer = (event: CustomEvent<AnswerToQuestion>) => {
		const {detail: userAnswer} = event;
		userAnswers.set(currentQuestionId, userAnswer);
		++currentQuestionId;
	};
</script>

<div>
	{#if currentQuestionId < quiz_all.length}
		<QuestionPrompt {question} on:answer={answer} />
	{:else}
		<QuizResults {userAnswers} />
	{/if}
</div>
