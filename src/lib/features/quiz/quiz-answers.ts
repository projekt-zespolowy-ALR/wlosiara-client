import type {Question} from "./interfaces.d.js";

export const quiz_anwen: Question[] = [
	{
		text: "Jakie są twoje włosy?",
		id: 0,
		answers: [
			{
				text: "gładkie i lśniące",
				type: "Niskoporowate",
			},
			{
				text: "w dobrej kondycji, ale czasem się puszą",
				type: "Średnioporowate",
			},
			{
				text: "suche lub zniszczone",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Jak długo schną twoje włosy?",
		id: 1,
		answers: [
			{
				text: "krótko (mniej niż 1,5 h)",
				type: "Wysokoporowate",
			},
			{
				text: "średnio (1,5 - 3h)",
				type: "Średnioporowate",
			},
			{
				text: "długo (powyżej 3h)",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Czy twoje włosy błyszczą w słabym świetle?",
		id: 2,
		answers: [
			{
				text: "nie",
				type: "Wysokoporowate",
			},
			{
				text: "trochę błyszczą",
				type: "Średnioporowate",
			},
			{
				text: "zdecydowanie błyszczą",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Jeśli przerzucisz pasemko włosów na drugą stronę:",
		id: 3,
		answers: [
			{
				text: "zostanie w tym samym miejscu",
				type: "Wysokoporowate",
			},
			{
				text: "powoli wróci na swoją stronę",
				type: "Średnioporowate",
			},
			{
				text: "szybko wróci na swoją stronę",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Czy są podatne?",
		id: 4,
		answers: [
			{
				text: "Loki albo fale po warkoczu są na nich widoczne długi czas",
				type: "Wysokoporowate",
			},
			{
				text: "loki albo fale utrzymują się jakiś czas",
				type: "Średnioporowate",
			},
			{
				text: "loki lub fale nie robią się wcale lub bardzo szybko się rozprostowują",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Co się dzieje gdy rozczeszesz włosy?",
		id: 5,
		answers: [
			{
				text: "Nabierają objętości",
				type: "Wysokoporowate",
			},
			{
				text: "Objętość się nie zmienia",
				type: "Średnioporowate",
			},
			{
				text: "tracą objętość",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Jakie w dotyku są twoje włosy?",
		id: 6,
		answers: [
			{
				text: "gładkie i miękkie",
				type: "Niskoporowate",
			},
			{
				text: "w miarę gładkie",
				type: "Średnioporowate",
			},
			{
				text: "sztywne i szorstkie",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Czy twoje włosy się plączą?",
		id: 7,
		answers: [
			{
				text: "tak, bardzo",
				type: "Wysokoporowate",
			},
			{
				text: "czasami",
				type: "Średnioporowate",
			},
			{
				text: "nie",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Czy twoje włosy często się puszą?",
		id: 8,
		answers: [
			{
				text: "tak, praktycznie zawsze są napuszone",
				type: "Wysokoporowate",
			},
			{
				text: "czasami się puszą",
				type: "Średnioporowate",
			},
			{
				text: "nigdy się nie puszą",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Czy twoje włosy łatwo się niszczą?",
		id: 9,
		answers: [
			{
				text: "tak, muszę często podcinać rozdwojone końce",
				type: "Wysokoporowate",
			},
			{
				text: "średnio, wystarczy że podetnę włosy raz na kilka miesięcy",
				type: "Średnioporowate",
			},
			{
				text: "nie, praktycznie nigdy nie widzę u siebie rozdwojonych końcówek",
				type: "Niskoporowate",
			},
		],
	},
	{
		text: "Czy zdarza ci się rozjaśniać lub prostować/kręcić włosy?",
		id: 10,
		answers: [
			{
				text: "tak, regularnie",
				type: "Wysokoporowate",
			},
			{
				text: "sporadycznie",
				type: "Średnioporowate",
			},
			{
				text: "nie",
				type: "Niskoporowate",
			},
		],
	},
];

export const quiz_cosibella = [
	{
		text: "Twoje włosy są:",
		id: 11,
		answers: [
			{
				text: "gładkie, lśniące i błyszczące, ale brakuje im objętości.",
				type: "Niskoporowate",
			},
			{
				text: "puszą się, są lekko falowane i matowe.",
				type: "Średnioporowate",
			},
			{
				text: "kręcą się lub są zniszczone, suche i łatwo się łamią.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Czy łatwo obciążyć Twoje włosy?",
		id: 12,
		answers: [
			{
				text: "Zdecydowanie tak, wiele produktów je obciąża",
				type: "Niskoporowate",
			},
			{
				text: "Zależy od produktów, ale zdarza się.",
				type: "Średnioporowate",
			},
			{
				text: "Nie, mogę je odżywiać bez końca.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Czy Twoje włosy się kręcą?",
		id: 13,
		answers: [
			{
				text: "Zdecydowanie nie, są proste jak drut",
				type: "Niskoporowate",
			},
			{
				text: "Bywa, że się falują/zawijają.",
				type: "Średnioporowate",
			},
			{
				text: "Tak, mam kręcone włosy.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Twoje włosy:",
		id: 14,
		answers: [
			{
				text: "Łatwo się elektryzują, są oklapnięte.",
				type: "Niskoporowate",
			},
			{
				text: "Często się puszą, czasami w dotyku są matowe.",
				type: "Średnioporowate",
			},
			{
				text: "Są bardzo suche, zdecydowanie brakuje im nawilżenia.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Czy łatwo stylizuje się Twoje włosy?",
		id: 15,
		answers: [
			{
				text: "Zdecydowanie nie, często po godzinie wracają do poprzedniego stanu.",
				type: "Niskoporowate",
			},
			{
				text: "Tak, ale zdarza się, że po jakimś czasie wracają do poprzedniego stanu.",
				type: "Średnioporowate",
			},
			{
				text: "Zdecydowanie tak, jedno pociągnięcie prostownicą i są proste.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Po rozczesaniu włosów Twoje włosy są:",
		id: 16,
		answers: [
			{
				text: "Gładkie, lśniące, mogą się elektryzować.",
				type: "Niskoporowate",
			},
			{
				text: "Mogą się trochę puszyć, ale w dotyku są gładkie.",
				type: "Średnioporowate",
			},
			{
				text: "Bardzo spuszone.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Czy Twoje włosy są suche i zniszczone?",
		id: 17,
		answers: [
			{
				text: "Zdecydowanie nie.",
				type: "Niskoporowate",
			},
			{
				text: "W niewielkim stopniu.",
				type: "Średnioporowate",
			},
			{
				text: "Są bardzo suche i zniszczone.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Czy Twoje włosy były rozjaśniane/farbowane?",
		id: 18,
		answers: [
			{
				text: "Nie",
				type: "Niskoporowate",
			},
			{
				text: "Bardzo dawno temu",
				type: "Średnioporowate",
			},
			{
				text: "tak",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Gdy wychodzisz na dwór podczas deszczu:",
		id: 19,
		answers: [
			{
				text: "Moje włosy są oklapnięte.",
				type: "Niskoporowate",
			},
			{
				text: "Moje włosy zaczynają się lekko kręcić.",
				type: "Średnioporowate",
			},
			{
				text: "Moje włosy bardzo się kręcą i są spuszone.",
				type: "Wysokoporowate",
			},
		],
	},
	{
		text: "Czy Twoje włosy łatwo się plączą?",
		id: 20,
		answers: [
			{
				text: "Bardzo rzadko.",
				type: "Niskoporowate",
			},
			{
				text: "Zdarza się.",
				type: "Średnioporowate",
			},
			{
				text: "Bardzo często.",
				type: "Wysokoporowate",
			},
		],
	},
];

export const quiz_all = [...quiz_anwen, ...quiz_cosibella];
