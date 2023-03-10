<script lang="ts">
	// import {v4 as uuidv4} from "uuid";
	// import {Sveltik, Field, ErrorMessage, SveltikBag} from "sveltik";
	// import {BlogEntry} from "./interfaces.d.js";
	// import {postStore} from "./postStore.js";

	// const initialValues: BlogEntry = {
	// 	title: "",
	// 	author: "",
	// 	imageUrl: "",
	// 	text: "",
	// 	id: uuidv4(),
	// 	comments: [],
	// };

	// const onSubmit = (values: BlogEntry, {setSubmitting}: SveltikBag) => {
	// 	console.log(values);

	// 	const newPost = {
	// 		...values,
	// 	};

	// 	postStore.update((currentPosts) => {
	// 		return [newPost, ...currentPosts];
	// 	});

	// 	setSubmitting(false);
	// };
</script>

<div class="page">
	<!-- <Sveltik {initialValues} {onSubmit} let:isSubmitting let:props>
		<form on:submit|preventDefault={props.handleSubmit}>
			<Field name="title">
				<div class="formElement">
					<input
						type="text"
						on:input={props.handleInput}
						on:blur={props.handleBlur}
						placeholder="Tytuł posta"
						name="title"
					/>
				</div>
			</Field>
			<ErrorMessage name="title" as="div" />

			<Field name="author">
				<div class="formElement">
					<input
						type="text"
						on:input={props.handleInput}
						on:blur={props.handleBlur}
						placeholder="Autor"
						name="author"
					/>
				</div>
			</Field>
			<ErrorMessage name="author" as="div" />

			<Field name="imageUrl">
				<div class="formElement">
					<input
						type="text"
						on:input={props.handleInput}
						on:blur={props.handleBlur}
						placeholder="Image"
						name="imageUrl"
					/>
				</div>
			</Field>

			<ErrorMessage name="imageUrl" as="div" />

			<Field name="text">
				<div class="formElement">
					<textarea
						on:input={props.handleInput}
						on:blur={props.handleBlur}
						placeholder="Treść posta"
						name="text"
					/>
				</div>
			</Field>
			<ErrorMessage name="text" as="div" />

			<button type="submit" disabled={isSubmitting}>Submit</button>
		</form>
	</Sveltik> -->
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		margin: 40px 60px;
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5px;
		padding: 20px;
	}
	/* form {
		display: flex;
		flex-direction: column;
		padding: 10px;
		font-size: 12px;
		margin-bottom: 20px;
		width: 60%;
	}
	.formElement input,
	textarea {
		width: 100%;
		margin: 5px 0;
	}
	textarea {
		resize: none;
		height: 300px;
		width: 100%;
	} */
</style>
