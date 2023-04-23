<script lang="ts">
	import type User from "$lib/features/users/types/User.js";
	import Navbar from "./Navbar.svelte";
	export let currentUser: User | null;
</script>

<header class="header">
	<div class="header__logo-container">
		<img
			src="https://imagizer.imageshack.com/img922/4453/xLqK5G.png"
			alt="włosiara.pl"
			class="header__logo"
		/>
	</div>

	<Navbar {currentUser} />
</header>

<style lang="scss">
	.header {
		display: flex;
		flex-direction: column;
		background-color: var(--gray-8);
		gap: 20px;
	}
	.header__logo {
		height: 50px;
	}
	.header__logo-container {
		display: flex;
		justify-content: center;
	}
</style>
