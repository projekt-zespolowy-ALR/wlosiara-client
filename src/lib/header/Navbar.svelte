<script lang="ts">
	import type {User} from "$lib/features/users/types/User.js";
	import type {DeepReadonly} from "ts-essentials";
	import LoginSignIn from "./LoginSignIn.svelte";
	export let currentUser: DeepReadonly<User> | null;
</script>

<nav class="navbar">
	<ul class="navbar__content">
		<li>
			<a href="/">
				<i class="fa-solid fa-house" />
				Strona główna</a
			>
		</li>
		<!--	<li><a href="/quiz">Dopasuj pielęgnację</a></li>-->
		<li><a href="/quiz">Quiz</a></li>
		<li><a href="/baza-produktow">Baza produktów</a></li>
		<li><a href="/baza-wiedzy">Aktualności</a></li>
		<li><a href="/baza-wiedzy">Baza wiedzy</a></li>
		<li>
			<div class="navbar-nav mr-auto user-details">
				<a href="/user">
					{#if currentUser}
						<span class="text-white">&nbsp;&nbsp;{currentUser.username}</span>
					{:else}<span>&nbsp;</span>{/if}
				</a>
			</div>
		</li>
		<LoginSignIn {currentUser} />
	</ul>
</nav>

<style>
	.navbar__content {
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;

		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		padding: 10px 0;
		margin-bottom: 0;
		background-color: var(--gray-8);
		border-bottom-left-radius: 3%;
		border-bottom-right-radius: 3%;
		box-shadow: 3px 3px 5px lightgray;
	}
	a {
		text-decoration: none;
		color: black;
		font-size: 12px;
	}

	i {
		color: var(--primary-color-3);
		font-size: 16px;
	}
</style>
