<script lang="ts">
	import currentUserStore from "$lib/features/auth/currentUserStore.js";
</script>

<li class="login-sign-in">
	<i class="fa-solid fa-user" />
	{#if $currentUserStore}
		<li class="nav-item">
			<button class="nav-link" on:click={currentUserStore.logout}>Log Out</button>
		</li>
	{:else}
		<li class="nav-item">
			<button class="nav-link" on:click={currentUserStore.login}>Log In</button>
		</li>
	{/if}
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
