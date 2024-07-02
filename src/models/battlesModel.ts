import mongoose from "mongoose";
import { IStandings } from "./standingsModel";

export interface IBattles extends mongoose.Document {
	tour: number;
	room: string;
	teams: IStandings[];
	jury?: {
		specificTeams: IStandings[];
	}
	points: number[];
}

const BattlesSchema = new mongoose.Schema({
	tour: { type: Number, required: true },
	room: { type: String, required: true },
	teams: { type: [mongoose.Schema.Types.ObjectId], required: true, ref: "Standings" },
	jury: {type: {
		specificTeams: { type: [mongoose.Schema.Types.ObjectId], ref: "Standings" }
	}, required: false},
	points: {type: [Number], default: [0, 0]}
});

const Battles = mongoose.model<IBattles>("Battles", BattlesSchema);
export default Battles;
