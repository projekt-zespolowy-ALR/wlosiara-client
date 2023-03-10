type BlogEntry = Readonly<{
	id: string;
	title: string;
	authorId: string;
	text: string;
	imageUrl: string;
}>;

export default BlogEntry;
