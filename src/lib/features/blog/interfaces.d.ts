export interface BlogEntry {
	id: string;
	title: string;
	author: string;
	text: string;
	imageUrl: string;
	comments: Comment[];
}

export interface Comment {
	id: string;
	author: string;
	text: string;
}
