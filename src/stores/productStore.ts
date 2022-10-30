import type { Product } from 'src/components/products/interfaces';
import {writable, type Writable} from 'svelte/store';

export const ProductStore: Writable<Product[]> = writable([
    {
        id: "0",
        name: "Krem1",
        category: "Kremy",
        description: "po prostu krem",
        image_url: "",
    },
    {
        id: "1",
        name: "Krem2",
        category: "Kremy",
        description: "po prostu krem",
        image_url: "",
    }
])

