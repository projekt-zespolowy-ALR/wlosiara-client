<script lang="ts">
	import type {QuestionId, AnswerToQuestion, HairType} from "./interfaces.d.js";

	export let userAnswers: Map<QuestionId, AnswerToQuestion>;

	const types: Map<HairType, number> = new Map<HairType, number>([
		["Wysokoporowate", 0],
		["Średnioporowate", 0],
		["Niskoporowate", 0],
	]);

	interface AnswersCount {
		type: HairType;
		count: number;
	}
	userAnswers.forEach((answer) => {
		const type = answer.type;
		types.set(type, (types.get(type) as number) + 1);
	});

	const maxType = Array.from(types.entries()).reduce(
		(acc: AnswersCount, [type, count]) => {
			return count > acc.count ? {type, count} : acc;
		},
		{
			type: "Średnioporowate",
			count: 0,
		}
	).type;
</script>

<div class="answer">
	<p>Twój typ włosów to: <span>{maxType}</span></p>
</div>

<style>
	.answer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--gray-8);
		border: 1px solid var(--gray-6);
		border-radius: 25px;
		padding: 10px 10px 30px 10px;
		width: 70%;
		height: 400px;
	}

	.answer span {
		font-weight: bold;
		color: var(--primary-color-3);
	}
</style>
