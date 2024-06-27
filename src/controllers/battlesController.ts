import { Request, Response } from 'express';
import Battles from '../models/battlesModel';
import { getBattleById, createBattle, updateBattleDetails, deleteBattle} from "../services/battlesService";

export const getBattle = async (req: Request, res: Response) => {
    const battle = await getBattleById(req.params.id);
    if (battle) {
        res.json(battle);
    } else {
        res.status(404).json({ message: 'Battle not found' });
    }
};

export const addBattle = async (req: Request, res: Response) => {
    const battle = new Battles({
        name: req.body.name,
        initialPoint: req.body.points
    });

    const newBattle = await createBattle(battle);
    res.status(201).json(newBattle);
};

export const updateBattle = async (req: Request, res: Response) => {
    const battle = await updateBattleDetails(req.params.id, req.body);
    if (battle) {
        res.json(battle);
    } else {
        res.status(404).json({ message: 'Battle not found' });
    }
};

export const removeBattle = async (req: Request, res: Response) => {
    const result = await deleteBattle(req.params.id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Battle not found' });
    }
};
