<script lang="ts">
	import {page} from "$app/stores";
	import {postStore} from "$lib/features/blog/postStore.js";
	import Footer from "$lib/ui/footer/Footer.svelte";
	import Header from "$lib/header/Header.svelte";
	import type {BlogEntry} from "$lib/features/blog/interfaces.d.js";
	import PostPage from "$lib/features/blog/PostPage.svelte";

	const urlSegments = $page.url.pathname.split("/");

	const id = urlSegments[2];
	const examplePost: BlogEntry = {
		id: "-1",
		title: "No title",
		author: "unknown",
		text: "No text",
		imageUrl: "",
		comments: [],
	};
	const post: BlogEntry = $postStore.find((post: BlogEntry) => post.id == id) || examplePost;
</script>

<PostPage {post} />
