import Battles from '../models/battlesModel';
import Team, { ITeams } from '../models/teamsModel';

// export const getBattleById = async (battleId: string) => {
//     return await Battles.findById(battleId).exec();
// };

// export const createBattle = async (battle: typeof Battles) => {
//     return await battle.save();
// };

export const getBattles = async () => {
    return await Battles.find().exec();
};

export const updateBattleDetails = async (battleId: string, BattleData: Partial<typeof Battles>) => {
    return await Battles.findByIdAndUpdate(battleId, BattleData, {new: true}).exec();
};

// export const deleteBattle = async (battleId: string) => {
//     const battle = await Battles.findById(battleId).exec();
//     if(battle){
//         await battle.remove();
//         return true;
//     }
//     return false;
// };


export const arrangeTeamsIntoBattles = async (
    divisions: 2 | 4 = 2,
    tour: number = 1
): Promise<InstanceType<typeof Battles>[]> => {
    const teams: InstanceType<typeof Team>[] = await Team.find()
        .sort({ score: -1 })
        .exec();

    if (teams.length % 2 !== 0) {
        // const juryTeam = await createJuryTeam(); // Assuming you have this function implemented
        // teams.push(juryTeam);
    }

    const splitPoints: number[] = [0];
    const chunkSize = Math.floor(teams.length / divisions);
    for (let i = 0; i < divisions; i++) {
        if (divisions === 4 && teams.length % 4 === 2 && (i === 1 || i === 3)) {
            splitPoints.push(splitPoints[splitPoints.length - 1] + chunkSize + 1);
        }
        splitPoints.push(splitPoints[splitPoints.length - 1] + chunkSize);
    }

    const teamChunks: ITeams[][] = [];
    for (let i = 0; i < splitPoints.length - 1; i++) {
        const start = splitPoints[i];
        const end = splitPoints[i + 1];


        teamChunks.push(teams.slice(start, end));
    }

    const battles: InstanceType<typeof Battles>[] = [];
    for (let i = 0; i < teamChunks[0].length; i++) {
        const battleTeams = teamChunks.map(chunk => ({
            name1: chunk[i]?.name || 'BYE',
            name2: chunk[i + 1]?.name || 'BYE'
        }));

    const battle = new Battles({
        tour,
        room: `Room-${i + 1}`,
        teams: battleTeams,
        result: 0,
        points: battleTeams.map(() => ({ pts1: 0, pts2: 0 }))
    });
    battles.push(battle);
    }

    await Battles.insertMany(battles);
    return battles;
};