<script lang="ts">
	import PostPage from "$lib/features/blog/PostPage.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
	$: title = data.blogEntry.title;
</script>

<svelte:head>
	<title>{title ?? "Aktualności"}</title>
</svelte:head>

<PostPage blogEntry={data.blogEntry} />
