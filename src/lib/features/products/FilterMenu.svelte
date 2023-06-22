<script lang="ts">
</script>

<div class="filter-menu">
	<div class="inline">
		<span>Szukaj </span>
		<input placeholder="Szukaj produktu..." />
	</div>
	<div class="inline">
		<span>Sortuj </span>
		<select name="sort" id="sort">
			<option value="increasing">cena rosnąco</option>
			<option value="decreasing">cena malejąco</option>
		</select>
	</div>
	<!-- <div class="inline">
		<span>Filtruj</span>
		<select>
			<option value="keyword">keyword</option>
			<option value="keyword">keyword2</option>
		</select>
	</div> -->
</div>

<style>
	.filter-menu {
		display: flex;
		flex-direction: column;
		margin-left: 50px;
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5%;
		width: 300px;
		background-color: white;
		padding: 10px;
		font-size: 12px;
	}
	.inline {
		display: inline-block;
	}
</style>
