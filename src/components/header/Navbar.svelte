<script type="ts">
	import LoginSignIn from "./LoginSignIn.svelte";


</script>

<ul class="navbar">
	<li>
		<a href="/a">
			<i class="fa-solid fa-house" />
			Strona główna</a
		>
	</li>
	<li><a href="/b">Dopasuj pielęgnację</a></li>
	<li><a href="/c">Quiz</a></li>
	<li><a href="/baza-produktow">Baza produktów</a></li>
	<li><a href="/e">Aktualności</a></li>
	<li><a href="/f">Baza wiedzy</a></li>
	<LoginSignIn/>
</ul>

<style>
	.navbar {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		border-bottom: gray 2px solid;
		padding: 10px 0;
	}
	a {
		text-decoration: none;
		color: black;
		font-size: 12px;
	}

	i {
		color: #6233C6;
		font-size: 16px;
	}
	
</style>
