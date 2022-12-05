<script type="ts">
	import {AnswerStore} from "../../stores/answerStore";

	const store = $AnswerStore;
	const k = Object.keys($AnswerStore).filter((key) => key !== "currentQuestion");
	const types: {[key: string]: number} = {
		Wysokoporowate: 0,
		Średnioporowate: 0,
		Niskoporowate: 0,
	};
	k.forEach((key) => {
		const type = store[key].type;
		types[type] = types[type] + 1;
	});
	const typesSorted = Object.entries(types).sort((type1, type2) => type2[1] - type1[1]);
	const max = typesSorted[0];
</script>

<div>
	<p>Twój typ włosów to: {max[0]}</p>
</div>
