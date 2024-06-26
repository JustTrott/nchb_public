import { Router } from 'express';
import { getBattle, addBattle, removeBattle, updateBattle} from '../controllers/battlesController';

const battlesRouter = Router();

battlesRouter.get('/:id', getBattle);
battlesRouter.post('/', addBattle);
battlesRouter.put('/:id', updateBattle);
battlesRouter.delete('/:id', removeBattle);

export default battlesRouter;
