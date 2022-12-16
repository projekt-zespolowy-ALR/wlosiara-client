<script lang="ts">
	import type {BlogEntry} from "./interfaces.d.js";

	export let post: BlogEntry;
</script>

<li>
	<a href="/baza-wiedzy/{post.id}">
		<img src={post.imageUrl} alt={post.title} />
		<div class="item-info">
			<p>{post.title}</p>
		</div>
	</a>
</li>

<style>
	a {
		text-decoration: none;
		color: black;
	}
	li {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5%;
		margin: 20px;
		background-color: white;
		padding: 10px 20px;
	}
	img {
		height: 200px;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}
	li .item-info {
		padding: 0 10px;
		text-align: center;
	}
</style>
