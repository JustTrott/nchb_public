import {Schema, model, Document } from 'mongoose';

interface ITeams extends Document {
    name: string;
    initialPoints: number;
}

const teamsSchema: Schema<ITeams> = new Schema({
    name:{type: String, required: true},
    initialPoints: {type: Number, required: true}
})

const Teams = model<ITeams>("Teams", teamsSchema);
export default Teams;