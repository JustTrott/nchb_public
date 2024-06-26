import { Request, Response } from 'express';
import Standings from '../models/standingsModel';
import { getStandingById, createStanding, deleteStanding, updateStandingDetails} from "../services/standingsService";

export const getStanding = async (req: Request, res: Response) => {
    const standing = await getStandingById(req.params.id);
    if (standing) {
        res.json(standing);
    } else {
        res.status(404).json({ message: 'Battle not found' });
    }
};

export const addStanding = async (req: Request, res: Response) => {
    const standing = new Standings({
        name: req.body.name,
        initialPoint: req.body.points
    });

    const newBattle = await createStanding(standing);
    res.status(201).json(newBattle);
};

export const updateStanding = async (req: Request, res: Response) => {
    const standing = await updateStandingDetails(req.params.id, req.body);
    if (standing) {
        res.json(standing);
    } else {
        res.status(404).json({ message: 'Battle not found' });
    }
};

export const removeStanding= async (req: Request, res: Response) => {
    const result = await deleteStanding(req.params.id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Battle not found' });
    }
};
