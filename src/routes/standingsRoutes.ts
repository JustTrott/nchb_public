import { Router } from 'express';
import { getStandingsList } from '../controllers/standingController'

const standingsRouter = Router();

standingsRouter.get('/', getStandingsList);
// standingsRouter.post('/', addStanding);
// standingsRouter.put('/:id', updateStanding);
// standingsRouter.delete('/:id', removeStanding);

export default standingsRouter;
