<script type="ts">
	import { AnswerStore } from "../../stores/answerStore";
    import Question from "./Question.svelte";
    import { quiz_anwen } from "./quiz-answers.js";
    $: questionId = $AnswerStore.currentQuestion.questionId;
    $: question = quiz_anwen[questionId];
    
</script>

<div>
    <Question
    {question}/>
    
</div>