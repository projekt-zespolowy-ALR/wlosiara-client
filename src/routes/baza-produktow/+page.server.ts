import mockedPopulatedProducts from "$lib/server/features/products/mockedPopulatedProducts.js";
import usersThatLikedProduct from "$lib/server/features/products/usersThatLikedProduct.js";
import type {PageServerLoad, Actions} from "./$types.js";

export const load: PageServerLoad = async ({url}) => {
	const search = url.searchParams.get("search");
	const filteredProducts =
		search === null
			? mockedPopulatedProducts
			: mockedPopulatedProducts.filter(
					(product) =>
						product.name !== null && product.name.toLowerCase().includes(search.toLowerCase())
			  );

	return {
		products: filteredProducts,
	};
};

export const actions: Actions = {
	addProductToFavorites: async ({request}) => {
		const data = await request.formData();
		const productId = data.get("productId") as string;
		const userId = data.get("userId") as string;
		// console.log(`Product with id ${productId} was added to favorites`);

		const usersWhoLikedProduct = usersThatLikedProduct[productId];
		if (usersWhoLikedProduct === undefined) {
			usersThatLikedProduct[productId] = [userId];
		} else {
			usersWhoLikedProduct.push(userId);
		}

		console.log(usersThatLikedProduct);

		return {
			success: true,
		};
	},
};
