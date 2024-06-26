import { Request, Response } from 'express';
import Teams from '../models/teamsModel';
import { getTeamById, createTeam, deleteTeam, updateTeamDetails} from "../services/teamsService";

export const getTeam = async (req: Request, res: Response) => {
    const user = await getTeamById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Team is not found' });
    }
};

export const addTeam = async (req: Request, res: Response) => {
    const team = new Teams({
        name: req.body.name,
        initialPoint: req.body.points
    });

    const newTeam = await createTeam(team);
    res.status(201).json(newTeam);
};

export const updateTeam = async (req: Request, res: Response) => {
    const team = await updateTeamDetails(req.params.id, req.body);
    if (team) {
        res.json(team);
    } else {
        res.status(404).json({ message: 'Team is not found' });
    }
};

export const removeTeam = async (req: Request, res: Response) => {
    const result = await deleteTeam(req.params.id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Team is not found' });
    }
};
