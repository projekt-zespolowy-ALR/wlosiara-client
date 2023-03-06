<script>
	import {onMount} from "svelte";
	// import auth from "../../features/auth/authService.js";
	// import {isAuthenticated, user} from "../../features/auth/authStore.js";

	const isAuthenticated = false;

	// let auth0Client;

	onMount(async () => {
		// auth0Client = await auth.createClient();
		// isAuthenticated.set(await auth0Client.isAuthenticated());
		// user.set(await auth0Client.getUser());
	});

	function login() {
		// auth.loginWithPopup(auth0Client);
	}

	async function logout() {
		// auth.logout(auth0Client);
		// isAuthenticated.set(await auth0Client.isAuthenticated());
	}
</script>

<li class="login-sign-in">
	<i class="fa-solid fa-user" />
	{#if isAuthenticated}
		<li class="nav-item">
			<a class="nav-link" href="/#" on:click={logout}>Log Out</a>
		</li>
	{:else}
		<li class="nav-item">
			<a class="nav-link" href="/#" on:click={login}>Log In</a>
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
