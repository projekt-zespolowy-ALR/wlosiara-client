<script lang="ts">
    import { Sveltik, Field, ErrorMessage } from 'sveltik'
	import { BlogEntry } from './interfaces.js';

    const initialValues = { title: '', author: '',
    imageUrl: '', text: '', id: "-1" }
    
    const onSubmit = (values: BlogEntry, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }
    
</script>

<div class="page">
<Sveltik
    {initialValues}
    {onSubmit}
    let:isSubmitting
>
<form>
    <Field type="title" name="title" />
    <ErrorMessage name="title" as="div" />
    <Field type="author" name="author" />
    <ErrorMessage name="author" as="div" />
    
    <Field type="imageUrl" name="imageUrl" />
    <ErrorMessage name="imageUrl" as="div" />
    
    <Field type="text" name="text" />
    <ErrorMessage name="text" as="div" />

    <button type="submit" disabled="{isSubmitting}">Submit</button>
</form>
</Sveltik>
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
	form {
		display: flex;
		flex-direction: column;
		padding: 10px;
		font-size: 12px;
		margin-bottom: 20px;
	}
</style>