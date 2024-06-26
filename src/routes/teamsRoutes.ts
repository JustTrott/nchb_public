import { Router } from 'express';
import { getTeam, addTeam, updateTeam, removeTeam } from '../controllers/teamsController';

const teamsRouter = Router();

teamsRouter.get('/:id', getTeam);
teamsRouter.post('/', addTeam);
teamsRouter.put('/:id', updateTeam);
teamsRouter.delete('/:id', removeTeam);

export default teamsRouter;
