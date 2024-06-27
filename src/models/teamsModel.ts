import mongoose from "mongoose";

export interface ITeams extends mongoose.Document {
	name: string;
	initialPoints: number;
}

const teamsSchema: mongoose.Schema<ITeams> = new mongoose.Schema({
	name: { type: String, required: true },
	initialPoints: { type: Number, required: true },
});

const Teams = mongoose.model<ITeams>("Teams", teamsSchema);
export default Teams;
