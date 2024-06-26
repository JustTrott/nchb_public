import Standings from '../models/standingsModel';

export const getStandingById = async (standingId: string) => {
    return await Standings.findById(standingId).exec();
};

export const createStanding = async (standing: typeof Standings) => {
    return await standing.save();
};

export const updateStandingDetails = async (standingId: string, StandingData: Partial<typeof Standings>) => {
    return await Standings.findByIdAndUpdate(standingId, StandingData, {new: true}).exec();
};

export const deleteStanding = async (standingId: string) => {
    const standing = await Standings.findById(standingId).exec();
    if(standing){
        await standing.remove();
        return true;
    }
    return false;
};
