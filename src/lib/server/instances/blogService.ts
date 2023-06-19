import {BlogService} from "../features/blog/BlogService.js";
import {blogApiClient} from "./blogApiClient.js";

export const blogService = new BlogService({
	postsApiClient: blogApiClient,
});
