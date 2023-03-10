import type Ingredient from "./Ingredient.js";
import type PopulatedProductInDataSource from "./PopulatedProductInDataSource.js";
import type Product from "./Product.js";

type PopulatedProduct = Product &
	Readonly<{
		/**
		 * Information about the product's availability in the data sources.
		 */
		inDataSources: readonly Omit<PopulatedProductInDataSource, "product">[];

		ingredients: readonly Ingredient[];
	}>;

export default PopulatedProduct;
