<script lang="ts">
	import Navbar from "./Navbar.svelte";
</script>

<div class="header">
	<img
		src="https://imagizer.imageshack.com/img922/4453/xLqK5G.png"
		alt="włosiara.pl"
		class="logo"
	/>
	<Navbar />
</div>

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
