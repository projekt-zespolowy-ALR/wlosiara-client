<script lang="ts">
</script>

<div class="page">
	<div class="login">
		<div class="inline">
			<span>E-mail: </span>
			<input placeholder="email..." />
		</div>
		<div class="inline">
			<span>Wpisz hasło: </span>
			<input type="password" placeholder="..." />
		</div>
	</div>
	<button>Zaloguj</button>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		margin: 40px 60px;
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5px;
		padding: 20px;
	}
	.login {
		display: flex;
		flex-direction: column;
		padding: 10px;
		/* width: 50%; */
		font-size: 12px;
		margin-bottom: 20px;
	}
	.inline {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto;
		margin: 5px;
	}
</style>
