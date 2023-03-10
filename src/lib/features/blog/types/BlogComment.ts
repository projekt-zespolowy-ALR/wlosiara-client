type BlogComment = Readonly<{
	id: string;
	authorId: string;
	text: string;
}>;

export default BlogComment;
