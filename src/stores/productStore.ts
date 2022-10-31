import type {Product} from "src/components/products/interfaces";
import {writable, type Writable} from "svelte/store";

export const ProductStore: Writable<Product[]> = writable([
	{
		id: "0",
		name: "Krem",
		category: "Kremy",
		description: "po prostu krem",
		image_url: "images/krem.png",
	},
	{
		id: "1",
		name: "Krem1",
		category: "Kremy",
		description: "po prostu krem",
		image_url: "images/krem.png",
	},
	{
		id: "2",
		name: "Krem2",
		category: "Kremy",
		description: "po prostu krem",
		image_url: "images/krem.png",
	},
	{
		id: "3",
		name: "Krem3",
		category: "Kremy",
		description: "po prostu krem",
		image_url: "images/krem.png",
	},
	{
		id: "4",
		name: "Krem4",
		category: "Kremy",
		description: "po prostu krem",
		image_url: "images/krem.png",
	},
]);
