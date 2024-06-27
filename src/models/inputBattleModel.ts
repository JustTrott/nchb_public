import mongoose from "mongoose";

interface IInputBattle extends mongoose.Document {
	tour: number;
	room: string;
	teams: {
		name1: string;
		name2: string;
	}[];
	result: number;
	points: {
		pts1: number;
		pts2: number;
	}[];
}

const BattlesSchema = new mongoose.Schema({
	tour: { type: Number, required: true },
	room: { type: String, required: true },
	teams: [
		{
			name1: { type: String, required: true },
			name2: { type: String, required: true },
		},
	],
	result: { type: Number, required: true },
	points: [
		{
			pts1: { type: Number, required: true },
			pts2: { type: Number, required: true },
		},
	],
});

const Battles = mongoose.model<IInputBattle>("Battles", BattlesSchema);
export default Battles;
