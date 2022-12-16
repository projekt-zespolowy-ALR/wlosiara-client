<script lang="ts">
	import type {BlogEntry} from "./interfaces.d.js";

	export let post: BlogEntry;
</script>

<div class="page">
	<a class="back" href="/baza-wiedzy"><i class="fa-sharp fa-solid fa-backward-step" /></a>
	<div class="post">
		<img src={post.imageUrl} alt="" srcset="" />
		<h3>{post.title}</h3>
		<p>{post.author}</p>
		<p>{post.text}</p>
	</div>
</div>

<style>
	.page {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 25px;
		margin: 40px;
		background-color: white;
		padding: 25px;
	}
	.post {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	img {
		height: 400px;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}
	.back {
		color: var(--primary-color-3);
		font-size: 30px;
	}
</style>
