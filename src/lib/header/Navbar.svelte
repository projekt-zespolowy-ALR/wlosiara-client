<script lang="ts">
	import LoginSignIn from "./LoginSignIn.svelte";
	import {isAuthenticated, user} from "../features/auth/authStore";
</script>

<ul class="navbar">
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
			{#if $isAuthenticated && $user}
				<span class="text-white">&nbsp;&nbsp;{$user.name} ({$user.email})</span>
			{:else}<span>&nbsp;</span>{/if}
		</div>
	</li>
	<LoginSignIn />
</ul>

<style>
	.navbar {
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
