import Battles from '../models/battlesModel';
import Team from '../models/teamsModel';
import any = jasmine.any;

export const getBattleById = async (battleId: string) => {
    return await Battles.findById(battleId).exec();
};

export const createBattle = async (battle: typeof Battles) => {
    return await battle.save();
};

export const updateBattleDetails = async (battleId: string, BattleData: Partial<typeof Battles>) => {
    return await Battles.findByIdAndUpdate(battleId, BattleData, {new: true}).exec();
};

export const deleteBattle = async (battleId: string) => {
    const battle = await Battles.findById(battleId).exec();
    if(battle){
        await battle.remove();
        return true;
    }
    return false;
};


export const arrangeTeamsIntoBattles = async () => {
    // Fetch all teams from the database and sort them by score in descending order
    const teams = await Team.find().sort({ score: -1 }).exec();

    // Log the sorted teams for debugging purposes (optional)
    console.log('Sorted teams by score:', teams);

    // Split the teams into two halves
    const midIndex = Math.ceil(teams.length / 2); // Using Math.ceil to handle odd number of teams
    const firstHalf = teams.slice(0, midIndex);
    const secondHalf = teams.slice(midIndex);

    // Prepare an array to hold the battle pairs
    const battles: InstanceType<typeof Battles>[] = [];

    // Pair the top team from the first half with the top team from the second half
    for (let i = 0; i < Math.min(firstHalf.length, secondHalf.length); i++) {
        const battle = new Battles({
            tour: 1, // Assuming tour is 1 for simplicity
            room: `Room-${i + 1}`, // Generating room names dynamically
            teams: [
                {
                    name1: firstHalf[i].name,
                    name2: secondHalf[i].name,
                }
            ],
            result: 0, // Initial result, assuming no result yet
            points: [
                {
                    pts1: 0, // Initial points, assuming no points yet
                    pts2: 0, // Initial points, assuming no points yet
                }
            ]
        });
        battles.push(battle);
    }

    // Save battles to the database
    await Battles.insertMany(battles);

    // Return the created battles
    return battles;
};