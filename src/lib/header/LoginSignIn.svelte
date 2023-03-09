<script>
	import currentUserStore from "$lib/features/auth/currentUserStore.js";
</script>

<li class="login-sign-in">
	<i class="fa-solid fa-user" />
	{#if $currentUserStore}
		<li class="nav-item">
			<a class="nav-link" href="/#" on:click={currentUserStore.logout}>Log Out</a>
		</li>
	{:else}
		<li class="nav-item">
			<a class="nav-link" href="/#" on:click={currentUserStore.login}>Log In</a>
		</li>
	{/if}
</li>

<style>
	a {
		text-decoration: none;
		color: var(--gray-0);
		font-size: 12px;
	}

	i {
		color: var(--primary-color-3);
		font-size: 16px;
	}
</style>
