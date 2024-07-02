import { Router } from "express";
import BattlesService from "../services/battlesService";
import BattlesController from "../controllers/battlesController";

const battlesRouter = Router();

const battlesService = new BattlesService();
const battlesController = new BattlesController(battlesService);


battlesRouter.get("/", battlesController.getBattlesList);
battlesRouter.put("/:id", battlesController.updateBattle);
battlesRouter.post("/arrange", battlesController.arrangeTeamsIntoBattles);

export default battlesRouter;
