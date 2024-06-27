import { Router } from "express";
import {
	// getBattle,
	// addBattle,
	// removeBattle,
	getBattlesList,
	updateBattle,
} from "../controllers/battlesController";

const battlesRouter = Router();

battlesRouter.get("/", getBattlesList);
// battlesRouter.get("/:id", getBattle);
// battlesRouter.post("/", addBattle);
battlesRouter.put("/:id", updateBattle);
// battlesRouter.delete("/:id", removeBattle);

export default battlesRouter;
