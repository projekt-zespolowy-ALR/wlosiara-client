type User = Readonly<{
	id: string;
	username: string;
	fav_products: string[];
}>;

export default User;
