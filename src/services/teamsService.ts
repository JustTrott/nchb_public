import Teams from '../models/teamsModel';

export const getTeams = async () => {
    return await Teams.find().exec();
}

// export const getTeamById = async (teamId: string) => {
//     return await Teams.findById(teamId).exec();
// };

// export const createTeam = async (team: typeof Teams) => {
//     return await team.save();
// };

// export const updateTeamDetails = async (teamId: string, TeamData: Partial<typeof Teams>) => {
//     return await Teams.findByIdAndUpdate(teamId, TeamData, {new: true}).exec();
// };

// export const deleteTeam = async (teamId: string) => {
//     const team = await Teams.findById(teamId).exec();
//     if(team){
//         await team.remove();
//         return true;
//     }
//     return false;
// };
