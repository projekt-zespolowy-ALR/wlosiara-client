<script lang="ts">
	import { AnswerStore } from "../../stores/answerStore";
	import type { Question } from "../products/interfaces";
	import { quiz_all } from "./quiz-answers";
    // import { createEventDispatcher } from "svelte";
    // const dispatch = createEventDispatcher();

    export let question: Question;
    const questionsLength = quiz_all.length;

    const handleGiveAnswer = (questionId: number, index: number) => {
        // dispatch("give-answer", index)
        console.log("click")
        AnswerStore.update((currentStore) => {
            const newStore = {
                ...currentStore
            }
            newStore[questionId] = {
                questionId,
                answer: index,
                type: question.answers[index].type
            }

            if (questionId < questionsLength) {
                newStore.currentQuestion.questionId = questionId+1;
            }
            

            return newStore;
        })
    }
</script>

<div class="question">
    <p>{question.question}</p>
    <p on:keypress={() => {}} 
        on:click={() => handleGiveAnswer(question.id, 0)}>{question.answers[0].answer}
    </p>
    <p on:keypress={() => {}}
    on:click={() => handleGiveAnswer(question.id, 1)}>{question.answers[1].answer}
    </p>
    <p on:keypress={() => {}}
    on:click={() => handleGiveAnswer(question.id, 2)}>{question.answers[2].answer}
    </p>
</div>

<style>
    .question p {
        cursor: pointer;
    }
</style>