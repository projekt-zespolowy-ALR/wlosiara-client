<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";

	export let userAnswerKindsCounter: DeepReadonly<Map<string, number>>;

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
</style>
