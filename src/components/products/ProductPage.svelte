<script type="ts">
	import type { Product } from "./interfaces";


    export let product: Product;
    // const ingredientList = product.ingredients.reduce((curr, acc) => {
    //     return acc + curr + ", "
    // }, "")
    // .slice(0, -1);
</script>

<div class="page">
    <div class="product">
        <img src={product.image_url} alt="" srcset="">
        <p>{product.name}</p>
        <p>{product.id}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
    </div>
    <button class="back">Go back</button>
</div>

