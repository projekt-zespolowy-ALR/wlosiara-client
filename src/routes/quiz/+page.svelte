<script lang="ts">
	import QuizPage from "$lib/features/quiz/QuizPage.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
	$: quiz = data.quiz;
	$: currentUser = data.currentUser;
</script>

<svelte:head>
	<title>Quiz</title>
</svelte:head>
<QuizPage {quiz} {currentUser} />
