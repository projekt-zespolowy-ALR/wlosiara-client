import type {PageInApi} from "$lib/server/utils/PageInApi.js";
import type {PostCommentApi} from "./types/PostCommentApi.js";
import type {PostInApi} from "./types/PostInApi.js";

export class PostsApiClient {
	private readonly postsApiBaseUrl: string;
	public constructor({postsApiBaseUrl}: {postsApiBaseUrl: string}) {
		this.postsApiBaseUrl = postsApiBaseUrl;
	}
	async fetchPostsPage(): Promise<PageInApi<PostInApi>> {
		const response = await fetch(`${this.postsApiBaseUrl}/blog`);
		const postsPage = await response.json();
		return postsPage;
	}

	async fetchPostById(targetPostId: string): Promise<PostInApi> {
		const response = await fetch(`${this.postsApiBaseUrl}/blog/${targetPostId}`);
		const post = await response.json();
		return post;
	}

	async fetchPostCommentsPage(postId: string): Promise<PageInApi<PostCommentApi>> {
		const response = await fetch(`${this.postsApiBaseUrl}/blog/${postId}/comments`);
		const postsPage = await response.json();
		return postsPage;
	}

	async fetchPostCommentById(postId: string, commentId: string): Promise<PostCommentApi> {
		const response = await fetch(`${this.postsApiBaseUrl}/blog/${postId}/comments/${commentId}`);
		const post = await response.json();
		return post;
	}
}
