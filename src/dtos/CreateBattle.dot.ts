import mongoose from "mongoose";

export interface CreateBattleDto {
	tour: number;
	room: string;
	teams: mongoose.Schema.Types.ObjectId[];
	jury?: {
		specificTeams: mongoose.Schema.Types.ObjectId[];
	};
}