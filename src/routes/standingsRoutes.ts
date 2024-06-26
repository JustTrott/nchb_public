import { Router } from 'express';
import { getStanding, addStanding, removeStanding, updateStanding} from '../controllers/standingController'

const standingsRouter = Router();

standingsRouter.get('/:id', getStanding);
standingsRouter.post('/', addStanding);
standingsRouter.put('/:id', updateStanding);
standingsRouter.delete('/:id', removeStanding);

export default standingsRouter;
