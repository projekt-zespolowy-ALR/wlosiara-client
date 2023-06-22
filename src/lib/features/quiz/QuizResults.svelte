<script lang="ts">
	import type { SubmitFunction } from "@sveltejs/kit";
	import type {DeepReadonly} from "ts-essentials";
	import type { LayoutServerLoad } from "../../../routes/$types.js";
	import { enhance } from "$app/forms";
	export let userAnswerKindsCounter: DeepReadonly<Map<string, number>>;

	const submit: SubmitFunction = async ({formElement}) => {
		return ({result}) => {
			console.log(result);
			if (result.type === "success") {
				formElement.reset();
				alert("Wynik quizu został zapisany");
			} else if (result.type === "error") {
				console.log(result.error);
			} else if (result.type === "failure") {
				alert("Coś poszło nie tak");
			} else {
				console.log(result);
			}
		};
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
	const load: LayoutServerLoad = async ({cookies}) => {
	const [
		{authService},
		{
			appConfig: {SESSION_TOKEN_COOKIE_NAME},
		},
	] = await Promise.all([
		import("$lib/server/instances/authService.js"),
		import("$lib/server/app_config/appConfig.js"),
	]);
	const sessionToken = cookies.get("session_token");
	const session = sessionToken === undefined ? null : await authService.me(sessionToken);

</script>

<div class="answer">
	{#if maxType === null}
		<p>Brak odpowiedzi</p>
	{:else}
		<p>Twój typ włosów to: <span>{maxType}</span></p>
		{#if session}
		<form method="PUT" action="/send-result" use:enhance={submit}>
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
