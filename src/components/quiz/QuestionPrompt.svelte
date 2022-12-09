<script lang="ts">
	import {createEventDispatcher} from "svelte";
	const dispatch = createEventDispatcher();

	export let question: Question;
	import type {Question, AnswerToQuestion} from "./interfaces.d";

	const handleGiveAnswer = (userAnswer: AnswerToQuestion) => {
		dispatch("answer", userAnswer);
	};
</script>

<div class="question">
	<p>{question.text}</p>
	{#each question.answers as answer}
		<button on:click={() => handleGiveAnswer({questionId: question.id, type: answer.type})}>
			{answer.text}
		</button>
	{/each}
</div>

<style>
	.question p {
		cursor: pointer;
	}
</style>
