import mongoose from "mongoose";

interface IStandings extends mongoose.Document {
	teamId: number;
	QualPoints: number;
	Tours: [
		{
			Number: number;
			Points: number;
			CB: number;
		}
	];
	Total: number;
}

const standingsSchema: mongoose.Schema = new mongoose.Schema({
	teamId: { type: String, required: true },
	QualPoints: { type: Number, required: true },
	Tours: {type: [
		{
			Number: { type: Number },
			Points: { type: Number },
			CB: { type: Number },
		},
	], default: []},
	Total: { type: Number },
});

const Standings = mongoose.model<IStandings>("Standings", standingsSchema);
export default Standings;
