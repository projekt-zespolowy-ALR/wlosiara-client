<script lang="ts">
	export let currentUser: DeepReadonly<User> | null;
	import {invalidateAll} from "$app/navigation";
	import type {User} from "$lib/features/users/types/User.js";
	import type {DeepReadonly} from "ts-essentials";

	// const login = async (event: Event) => {
	// 	event.preventDefault();
	// 	const formEl = event.target as HTMLFormElement;

	// 	await fetch(formEl.action, {
	// 		method: "POST",
	// 		body: "",
	// 	});

	// 	await invalidateAll();
	// };

	const logout = async (event: Event) => {
		event.preventDefault();
		const formEl = event.target as HTMLFormElement;
		await fetch(formEl.action, {
			method: "POST",
			body: "",
		});

		await invalidateAll();
	};
</script>

<li class="login-sign-in">
	<i class="fa-solid fa-user" />
	<span class="nav-item">
		{#if currentUser !== null}
			<form action="/logout" method="post" on:submit={logout}>
				<button class="nav-link" type="submit">Log Out</button>
			</form>
		{:else}
			<a href="/login">
				<button class="nav-link">Log In</button>
			</a>
		{/if}
	</span>
</li>

<style>
	button {
		text-decoration: none;
		color: var(--gray-0);
		font-size: 12px;
	}

	i {
		color: var(--primary-color-3);
		font-size: 16px;
	}
</style>
