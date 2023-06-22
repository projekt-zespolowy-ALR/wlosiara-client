import type {PageInApi} from "$lib/server/utils/PageInApi.js";
import type {PagingOptionsInApi} from "$lib/server/utils/PagingOptionsInApi.js";
import type {PostCommentApi} from "./types/PostCommentInApi.js";
import type {PostInApi} from "./types/PostInApi.js";

export class PostsApiClient {
	private readonly postsApiBaseUrl: string;
	public constructor({postsApiBaseUrl}: {postsApiBaseUrl: string}) {
		this.postsApiBaseUrl = postsApiBaseUrl;
	}
	async fetchPostsPage(
		pagingOptions: PagingOptionsInApi,
		type: string
	): Promise<PageInApi<PostInApi>> {
		console.log(`PostsApiClient`, `fetchPostsPage`, {pagingOptions, type});
		const response = await fetch(
			`${this.postsApiBaseUrl}/posts?take=${pagingOptions.take}&skip=${pagingOptions.skip}&type=${type}`
		);
		const postsPage = await response.json();
		return postsPage;
	}

	async fetchPostById(targetPostId: string): Promise<PostInApi> {
		console.log(`PostsApiClient`, `fetchPostById`, {targetPostId});
		const response = await fetch(`${this.postsApiBaseUrl}/posts/${targetPostId}`);
		const post = await response.json();
		return post;
	}

	async fetchPostCommentsPage(postId: string): Promise<PageInApi<PostCommentApi>> {
		console.log(`PostsApiClient`, `fetchPostCommentsPage`, {postId});
		const response = await fetch(`${this.postsApiBaseUrl}/blog/${postId}/comments`);
		const postsPage = await response.json();
		return postsPage;
	}

	async fetchPostCommentById(postId: string, commentId: string): Promise<PostCommentApi> {
		console.log(`PostsApiClient`, `fetchPostCommentById`, {postId, commentId});
		const response = await fetch(`${this.postsApiBaseUrl}/blog/${postId}/comments/${commentId}`);
		const post = await response.json();
		return post;
	}
}
