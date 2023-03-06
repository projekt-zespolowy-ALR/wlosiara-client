<script lang="ts">
	import Navbar from "./Navbar.svelte";
	import {isAuthenticated, user} from "../features/auth/authStore";
</script>

<header class="header">
	<img
		src="https://imagizer.imageshack.com/img922/4453/xLqK5G.png"
		alt="włosiara.pl"
		class="logo"
	/>
	<div class="navbar-nav mr-auto user-details">
		{#if $isAuthenticated && $user}
			<span class="text-white">&nbsp;&nbsp;{$user.name} ({$user.email})</span>
		{:else}<span>&nbsp;</span>{/if}
	</div>
	<Navbar />
</header>

<style>
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--gray-8);
	}
	.logo {
		height: 50px;
	}
</style>
