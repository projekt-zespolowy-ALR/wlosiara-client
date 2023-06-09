import {BlogService} from "../features/blog/BlogService.js";
import {blogApiClient} from "./blogApiClient.js";

export const productsService = new BlogService({
	postsApiClient: blogApiClient,
});
