import { Router } from 'express';
import standingsRouter from './routes/standingsRoutes';
import battlesRouter from './routes/battlesRoutes';
import Battles from './models/battlesModel';
import Standings from './models/standingsModel';
import parseParticipants from './participantParser';
// other routers can be imported here

const globalRouter = Router();

// Use the userRouter for user-related routes
globalRouter.use('/standings/', standingsRouter);
globalRouter.use('/battles/', battlesRouter);
globalRouter.post('/reset', async (req, res) => {
	await Standings.deleteMany({});
	await Battles.deleteMany({});
	const teams = await parseParticipants();
	// remove all teams with any field that is undefined or null
	const filteredTeams = teams.filter(team => Object.values(team).every(value => value !== undefined && value !== null));
	await Standings.insertMany(filteredTeams);
	console.log('Reset successful!');
	res.send('Reset successful!');
});
globalRouter.use('/', (req, res) => { res.send('Welcome to the API!'); });
// other routers can be added here

export default globalRouter;
