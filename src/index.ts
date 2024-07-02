import "dotenv/config";
import express, { Request, Response } from "express";
import globalRouter from "./global-router";
import { logger } from "./logger";
import parseParticipants from "./participantParser";
import Battles from "./models/battlesModel";
import BattlesService from "./services/battlesService";
import StandingsService from "./services/standingsService";
import mongoose from 'mongoose';
import cors from 'cors';

console.log("Hello, World!");

const app = express();
const PORT = process.env.PORT || 3000;


const mongoURI = process.env.MONGODB_URL || 'mongodb://localhost:27017/random';
mongoose.connect(mongoURI)
	.then(()=> console.log("Hip Hip Hooray! MongoDB Connected"))
	.catch(err => console.log('X( MongoDB connection error: ', err));

app.use(cors());
app.use(logger);
app.use(express.json());
app.use("/api/v1/", globalRouter);


app.listen(PORT, async () => {
	// const teams = await parseParticipants();
	// change 
	// console.log(teams);
	// const existingTeams = await getStandings();
	// if (existingTeams.length === 0) {
	// 	await bulkInsertStandings(teams);
	// }
	// drop battles collection
	// const bs = new BattlesService();
	// const ss = new StandingsService();
	// await Battles.deleteMany({});
	// await bs.arrangeTeamsIntoBattles('junior', 1);
	// await ss.startNewTour('junior');
	// await arrangeTeamsIntoBattles('junior', 1);
	// await arrangeTeamsIntoBattles('junior', 2);
	// await arrangeTeamsIntoBattles('junior', 3);
	// await arrangeTeamsIntoBattles('junior', 4);
	// await arrangeTeamsIntoBattles('junior', 5);
	// const battles = await arrangeTeamsIntoBattles('junior', 6);
	// const populatedBattles = await Promise.all(battles.map(async battle => {
	// 	return await battle.populate('teams'); // Populate directly
	//   }));
	// display teams for each battle
	// populatedBattles.forEach(battle => {
	// 	console.log(battle.teams);
	// });
	console.log(`Server runs at http://localhost:${PORT}`);
	console.log(`But, wait, buddy, look at this https://youtu.be/dQw4w9WgXcQ?si=feE5mAH7CQ5BSRKa`);
});

export default app;