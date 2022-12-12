<div class="svelte-app-root">
	<slot />
</div>

<style lang="scss" global>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		font-family: "Lato", "sans-serif";
		margin: 0;
		font-family: "Poppins", sans-serif;
		background-color: #f9f9f9;
	}
	html {
		min-height: 100%;
	}
	html,
	body,
	.sveltekit-body,
	.svelte-app-root {
		display: grid;
	}
	.svelte-app-root {
		grid-template-rows: auto 1fr auto;
	}
</style>
