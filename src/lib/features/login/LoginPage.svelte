<script lang="ts">
	import {enhance} from "$app/forms";
	import {invalidateAll} from "$app/navigation";
	import type {SubmitFunction} from "@sveltejs/kit";

	// const onSubmit = async (event: Event) => {
	// 	event.preventDefault();
	// 	const form = event.target as HTMLFormElement;
	// 	const formData = new FormData(form);
	// 	const a = await fetch("/login", {
	// 		method: "POST",
	// 		body: formData,
	// 	});
	// 	await invalidateAll();
	// };

	const submit: SubmitFunction = async ({formElement}) => {
		return async ({result}) => {
			console.log(result);
			if (result.type === "success") {
				formElement.reset();
				alert("Zostałeś zalogowany");
				await invalidateAll();
			} else if (result.type === "error") {
				console.log(result.error);
			} else if (result.type === "failure") {
				alert("Something went wrong");
			} else {
				console.log(result);
			}
		};
	};
</script>

<div class="page">
	<form action="/login" method="post" class="login" use:enhance={submit}>
		<div class="inline">
			<span>E-mail: </span>
			<input name="email" placeholder="email..." />
		</div>
		<div class="inline">
			<span>Hasło: </span>
			<input name="password" type="password" placeholder="..." />
		</div>
		<button>Zaloguj</button>
	</form>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		margin: 40px 60px;
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5px;
		padding: 20px;
	}
	.login {
		display: flex;
		flex-direction: column;
		padding: 10px;
		/* width: 50%; */
		font-size: 12px;
	}
	.inline {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto;
		margin: 5px;
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
