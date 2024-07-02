import { Request, Response } from 'express';
import Standings from '../models/standingsModel';
import StandingsService from "../services/standingsService";

class StandingsController {
	private standingsService: StandingsService;

	constructor(standingsService: StandingsService) {
		this.standingsService = standingsService;
	}

	getStandingsList = async (req: Request, res: Response) => {
		try {
			const standings = await this.standingsService.getStandings();
			if (standings) {
				res.json(standings);
			}
			else {
				res.status(404).json({ message: 'Standings not found' });
			}
		}
		catch (error) {
			console.error(`Error fetching standings: ${error}`);
			res.status(500).json({ message: 'Error fetching standings' });
		}
	}

	getStandingsByLeague = async (req: Request, res: Response) => {
		try {

			const standings = await this.standingsService.getStandingsByLeague(req.params.league);
			if (standings) {
				res.json(standings);
			}
			else {
				res.status(404).json({ message: 'Standings not found' });
			}
		}
		catch (error) {
			console.error(`Error fetching standings: ${error}`);
			res.status(500).json({ message: 'Error fetching standings' });
		}
	}

	updateStandingTotal = async (req: Request, res: Response) => {
		try {
			const standing = await this.standingsService.updateStandingTotal(req.params.id);
			if (standing) {
				res.json(standing);
			}
			else {
				res.status(404).json({ message: 'Standing not found' });
			}
		}
		catch (error) {
			console.error(`Error updating standing: ${error}`);
			res.status(500).json({ message: 'Error updating standing' });
		}
	}

	updateStandingBuhgolts = async (req: Request, res: Response) => {
		try {
			const standing = await this.standingsService.updateStandingBuhgolts(req.params.id);
			if (standing) {
				res.json(standing);
			}
			else {
				res.status(404).json({ message: 'Standing not found' });
			}
		}
		catch (error) {
			console.error(`Error updating standing: ${error}`);
			res.status(500).json({ message: 'Error updating standing' });
		}
	}

	disqualifyStanding = async (req: Request, res: Response) => {
		try {
			const standing = await this.standingsService.disqualifyStanding(req.params.id);
			if (standing) {
				res.json(standing);
			}
			else {
				res.status(404).json({ message: 'Standing not found' });
			}
		}
		catch (error) {
			console.error(`Error disqualifying standing: ${error}`);
			res.status(500).json({ message: 'Error disqualifying standing' });
		}
	}

	startNewTour = async (req: Request, res: Response) => {
		try {
			const newTour = await this.standingsService.startNewTour(req.params.league);
			if (newTour) {
				res.json(newTour);
			}
			else {
				res.status(404).json({ message: 'Standings not found' });
			}
		}
		catch (error) {
			console.error(`Error starting new tour: ${error}`);
			res.status(500).json({ message: 'Error starting new tour' });
		}
	}
}

export default StandingsController;