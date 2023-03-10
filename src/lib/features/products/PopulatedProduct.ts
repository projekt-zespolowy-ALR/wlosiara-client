import type PopulatedProductInDataSource from "./PopulatedProductInDataSource.js";
import type Product from "./Product.js";

type PopulatedProduct = Product &
	Readonly<{
		/**
		 * Information about the product's availability in the data sources.
		 */
		inDataSources: readonly Omit<PopulatedProductInDataSource, "product">[];
	}>;

export default PopulatedProduct;
