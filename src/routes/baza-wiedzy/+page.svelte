<script lang="ts">
	import PostList from "$lib/features/blog/PostList.svelte";
	import type {PageData} from "./$types.js";

	export let data: PageData;
</script>

<svelte:head>
	<title>Baza wiedzy</title>
</svelte:head>
<PostList blogEntriesPage={data.blogEntriesPage} type={"tips"} />
