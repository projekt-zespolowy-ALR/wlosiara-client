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

<div>
	<p>Twój typ włosów to: {maxType}</p>
</div>
