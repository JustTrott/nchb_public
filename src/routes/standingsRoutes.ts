import { Router } from 'express';
import StandingsController from '../controllers/standingsController'
import StandingsService from '../services/standingsService';

const standingsRouter = Router();

const standingsService = new StandingsService();
const standingsController = new StandingsController(standingsService);

standingsRouter.get('/', standingsController.getStandingsList);
standingsRouter.get('/league/:league', standingsController.getStandingsByLeague);
standingsRouter.put('/:id', standingsController.updateStandingTotal);
standingsRouter.put('/:id/buhgolts', standingsController.updateStandingBuhgolts);
standingsRouter.put('/:id/disqualify', standingsController.disqualifyStanding);
standingsRouter.post('/league/:league/start', standingsController.startNewTour);

export default standingsRouter;
