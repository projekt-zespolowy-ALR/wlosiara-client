import type Brand from "$lib/features/brands/Brand.js";
import type Ingredient from "./Ingredient.js";
import type PopulatedProductInDataSource from "./PopulatedProductInDataSource.js";
import type Product from "./Product.js";
import type ProductCategory from "./ProductCategory.js";

type PopulatedProduct = Omit<Product, "brandId" | "categoryIds"> &
	Readonly<{
		/**
		 * Information about the product's availability in the data sources.
		 */
		inDataSources: readonly Omit<PopulatedProductInDataSource, "product">[];

		ingredients: readonly Ingredient[];

		categories: readonly ProductCategory[];

		brand: Brand;
	}>;

export default PopulatedProduct;
