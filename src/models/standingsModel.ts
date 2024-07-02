import mongoose from "mongoose";

export interface IStandings extends mongoose.Document {
	name: string;
	league: "junior" | "senior";
	qualPoints: number;
	tours: [
		{
			number: number;
			points: number;
			CB: number;
		}
	];
	total: number;
	disqualified: boolean;
	specificTeams: IStandings[];
}

const standingsSchema: mongoose.Schema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, index: true},
	league: { type: String, required: true },
	qualPoints: { type: Number, required: true },
	tours: {type: [
		{
			number: { type: Number },
			points: { type: Number },
			CB: { type: Number },
		},
	], default: []},
	total: { type: Number, default: 0 },
	disqualified: { type: Boolean, default: false },
	specificTeams: { type: [mongoose.Schema.Types.ObjectId], ref: "Standings", default: [] }
});

const Standings = mongoose.model<IStandings>("Standings", standingsSchema);
export default Standings;
