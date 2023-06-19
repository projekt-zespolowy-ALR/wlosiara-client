<script lang="ts">
	import PostList from "$lib/features/blog/PostList.svelte";
	import type {PageData} from "./$types.js";

	export let data: PageData;
</script>

<PostList blogEntriesPage={data.blogEntriesPage} currentUser={data.currentUser} />
