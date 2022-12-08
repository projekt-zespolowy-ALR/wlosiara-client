<script lang="ts">
	import {createEventDispatcher} from "svelte";
	const dispatch = createEventDispatcher();

	export let question: Question;
	import type {Question, QuestionId} from "./interfaces.d";

	const handleGiveAnswer = (questionId: QuestionId, index: number) => {
		dispatch("answer", {
			questionId,
			type: question.answers[index]!.type,
		});
	};
</script>

<div class="question">
	<p>{question.text}</p>
	{#each question.answers as answer, index}
		<button on:click={() => handleGiveAnswer(question.id, index)}>
			{answer.text}
		</button>
	{/each}
</div>

<style>
	.question p {
		cursor: pointer;
	}
</style>
