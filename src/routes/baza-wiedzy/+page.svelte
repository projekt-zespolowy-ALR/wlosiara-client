<script lang="ts">
	import PostList from "$lib/features/blog/PostList.svelte";
	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
</script>

<PostList blogEntries={data.blogEntries} />
