<script lang="ts">
	import QuizPage from "$lib/features/quiz/QuizPage.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
	$: quiz = data.quiz;
</script>

<QuizPage {quiz} />
