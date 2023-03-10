<script lang="ts">
	import {createEventDispatcher} from "svelte";
	const dispatch = createEventDispatcher();

	import type Question from "./types/Question.js";
	import type AnswerToQuestion from "./types/AnswerToQuestion.js";

	export let question: Question;

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
	.question {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--gray-8);
		border: 1px solid var(--gray-6);
		border-radius: 25px;
		padding: 10px 10px 30px 10px;
		width: 70%;
		height: 400px;
	}

	.question p {
		font-size: 20px;
		margin-bottom: 40px;
	}

	.question button {
		cursor: pointer;
		line-height: 30px;
		width: 70%;
		margin-top: 10px;
		border-radius: 10px;
		border: 1px solid var(--gray-6);
		background-color: var(--gray-8);
		padding: 5px;
	}

	.question button:hover {
		background-color: var(--primary-color-3);
		color: var(--gray-8);
		transition: 0.3s;
	}
</style>
