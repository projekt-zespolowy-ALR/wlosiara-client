import { onDestroy } from "svelte";
import currentUserStore from "../auth/currentUserStore.js"
import { get } from 'svelte/store';

export const addProductToFav = (id: string) => {
    let user = get(currentUserStore);
    currentUserStore.addFavProduct(id);
}

export const productLiked = (id: string) => {
    let user = get(currentUserStore);
    // const userStore = currentUserStore;
    const liked = user ? (user.fav_products.includes(id)) : false;
    return liked;
}

