import {writable, type Writable} from "svelte/store";
import {examplePostText} from "./examplePostText.js";
import {BlogEntry} from "./interfaces.js";

const postStore: Writable<BlogEntry[]> = writable([
	{
		id: "0",
		title: "Jak dbać o włosy?",
		author: "Anna Nowak",
		text: "Nie wiem.",
		imageUrl:
			"https://content.latest-hairstyles.com/wp-content/uploads/ombre-hair-colors-for-women.jpg",
		comments: [],
	},
	{
		id: "1",
		title: "Jak dbać o włosy? pt.1",
		author: "Anna Nowak",
		text: "Nie wiem.",
		imageUrl:
			"https://content.latest-hairstyles.com/wp-content/uploads/ombre-hair-colors-for-women.jpg",
		comments: [],
	},
	{
		id: "2",
		title: "Jak dbać o włosy? pt.2",
		author: "Anna Nowak",
		text: "Nie wiem.",
		imageUrl:
			"https://content.latest-hairstyles.com/wp-content/uploads/ombre-hair-colors-for-women.jpg",
		comments: [],
	},
	{
		id: "3",
		title: "Jak dbać o włosy? pt.3",
		author: "Anna Nowak",
		text: "Nie wiem.",
		imageUrl:
			"https://content.latest-hairstyles.com/wp-content/uploads/ombre-hair-colors-for-women.jpg",
		comments: [],
	},
	{
		id: "4",
		title: "Jak zacząć dbać o włosy?",
		author: "Natalia Pawłowska [blondhaircare.com]",
		text: examplePostText,
		imageUrl:
			"https://content.latest-hairstyles.com/wp-content/uploads/ombre-hair-colors-for-women.jpg",
		comments: [],
	},
]);

export {postStore};
