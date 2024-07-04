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
	const spreadsheetId = "1i5AYjg6eRziiwn8XY9X-_DGYAV1Kv5y2NyqjK_2woZ4";
	const GId = "2121330770";

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
