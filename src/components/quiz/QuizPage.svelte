<script type="ts">
	import { AnswerStore } from "../../stores/answerStore";
    import Question from "./Question.svelte";
    import { quiz_all } from "./quiz-answers.js";
	import QuizResults from "./QuizResults.svelte";
    $: questionId = $AnswerStore.currentQuestion.questionId;
    $: question = quiz_all[questionId];
    const questionsLength = quiz_all.length;
    
</script>

<div>
    {#if questionId < questionsLength}
        <Question
        {question}/>
    {/if}
    {#if questionId >= questionsLength}
        <QuizResults/>
    {/if}
    
</div>