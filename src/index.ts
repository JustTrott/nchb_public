import "dotenv/config";
import express, { Request, Response } from "express";
import globalRouter from "./global-router";
import { logger } from "./logger";
import parseParticipants from "./participantParser";
import mongoose from 'mongoose';
import battlesRouter from "./routes/battlesRoutes";
import standingsRouter from "./routes/standingsRoutes";
import teamsRouter from "./routes/teamsRoutes";


const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = 'mongodb+srv://aphb2024:kIqjYFK6CMpBqmEe@cluster0.qforsle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI)
	.then(()=> console.log("Hip Hip Hooray! MongoDB Connected"))
	.catch(err => console.log('X( MongoDB connection error: ', err));

app.use(logger);
app.use(express.json());
app.use("/api/v1/", globalRouter);//delete this line, delete file itself, 'user' folder too
app.use("/battles/", battlesRouter);
app.use("/teams/", teamsRouter);
app.use("/standings/", standingsRouter);


app.listen(PORT, async () => {
	const teams = await parseParticipants();
	console.log(teams);
	console.log(`Server runs at http://localhost:${PORT}`);
	console.log(`But, wait, buddy, look at this https://youtu.be/dQw4w9WgXcQ?si=feE5mAH7CQ5BSRKa`);
});

export default app;