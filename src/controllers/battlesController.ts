import { Request, Response } from "express";
import Battles from "../models/battlesModel";
import BattlesService from "../services/battlesService";

class BattlesController {
	private battlesService: BattlesService;

	constructor(battlesService: BattlesService) {
		this.battlesService = battlesService;
	}

	getBattlesList = async (req: Request, res: Response) => {
		try {
			const battles = await this.battlesService.getBattles();
			res.json(battles);
		}
		catch (error) {
			console.error(`Error fetching battles: ${error}`);
			res.status(500).json({ message: "Error fetching battles" });
		}
	}

	updateBattle = async (req: Request, res: Response) => {
		try {
			const battle = await this.battlesService.updateBattleDetails(req.params.id, req.body);
			if (battle) {
				res.json(battle);
			} else {
				res.status(404).json({ message: "Battle not found" });
			}
		}
		catch (error) {
			console.error(`Error updating battle: ${error}`);
			res.status(500).json({ message: "Error updating battle" });
		}
	}

	arrangeTeamsIntoBattles = async (req: Request, res: Response) => {
		try {
			const battles = await this.battlesService.arrangeTeamsIntoBattles(req.body.league, req.body.tour);
			res.json(battles);
		}
		catch (error) {
			console.error(`Error arranging battles: ${error}`);
			res.status(500).json({ message: "Error arranging battles" });
		}
	}
}

export default BattlesController;
