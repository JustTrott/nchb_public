import PublicGoogleSheetsParser from "public-google-sheets-parser";

interface ParticipantRaw {
	Название: string;
	Лига: string;
	"Балл за отбор": number;
}

interface Participant {
	name: string;
	league: string;
	qualPoints: number;
}

async function parseParticipants(): Promise<Participant[]>
{
	const spreadsheetId = "1Uc6rHz9mqVQVW12p_7UXeB9s0nO_c1DJR6UMtuukrJU";
	const GId = "2055939208";

	const options = { sheetId: GId };

	const parser = new PublicGoogleSheetsParser(spreadsheetId, options);

	const data = await parser.parse();

	const participants = data.map((participant: ParticipantRaw) => {
		const {
			Название: name,
			Лига: league,
			"Балл за отбор": qualPoints,
		} = participant;
		return { name, league, qualPoints };
	});

	// shuffle participants to make it more random
	participants.sort(() => Math.random() - 0.5);
	return participants as Participant[];
}

export default parseParticipants;
