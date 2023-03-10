<script lang="ts">
	import PostPage from "$lib/features/blog/PostPage.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;

	const {blogEntry} = data;
</script>

<PostPage {blogEntry} />
