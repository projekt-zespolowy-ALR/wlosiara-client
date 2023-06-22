<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";
	import type {User} from "../users/types/User.js";
	export let userAnswerKindsCounter: DeepReadonly<Map<string, number>>;
	export let currentUser: DeepReadonly<User> | null;
	import {invalidateAll} from "$app/navigation";
	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		await fetch("/send-result", {
			method: "POST",
			body: JSON.stringify({
				hairType: maxType,
				isPublic: false,
			}),
		});
		console.log("Wynik quizu został zapisany");
		await invalidateAll();
	};

	const maxType = (() => {
		const entriesArray = Array.from(userAnswerKindsCounter.entries());
		const firstEntry = entriesArray[0];
		if (firstEntry === undefined) {
			return null;
		}
		const otherEntries = entriesArray.slice(1);
		return otherEntries.reduce(
			(acc: {kind: string; count: number}, [kind, count]) => {
				return count > acc.count ? {kind, count} : acc;
			},
			{
				kind: firstEntry[0],
				count: firstEntry[1],
			}
		).kind;
	})();
</script>

<div class="answer">
	{#if maxType === null}
		<p>Brak odpowiedzi</p>
	{:else}
		<p>Twój typ włosów to: <span>{maxType}</span></p>
		{#if currentUser}
			<form method="POST" action="/send-result" on:submit={handleSubmit}>
				czy chcesz zapisać wynik quizu?
				<button> zapisz wynik </button>
			</form>
		{/if}
	{/if}
</div>

<style>
	.answer {
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

	.answer span {
		font-weight: bold;
		color: var(--primary-color-3);
	}

	button {
		background-color: var(--primary-color-3);
		border: none;
		border-radius: 5px;
		color: var(--gray-8);
		padding: 5px 10px;
		margin: 10px 0;
		cursor: pointer;
	}
</style>
