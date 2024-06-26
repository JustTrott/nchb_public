import {Schema, model, Document} from 'mongoose';

interface IStandings extends Document {
    teamId: number;
    QualPoints: number;
    Tour1Points: number;
    Tour1CB: number;
    Tour2Points: number;
    Tour2CB: number;
    Tour3Points: number;
    Tour3CB: number;
    Tour4Points: number;
    Tour4CB: number;
    Tour5Points: number;
    Tour5CB: number;
    Tour6Points: number;
    Tour6CB: number;
    Tour7Points: number;
    Tour7CB: number;
    Total: number;
}

const standingsSchema: Schema = new Schema({
    teamId: { type: String, required: true },
    QualPoints: { type: Number, required: true },
    Tour1Points: { type: Number, required: true },
    Tour1CB: { type: Number, required: true },
    Tour2Points: { type: Number, required: true },
    Tour2CB: { type: Number, required: true },
    Tour3Points: { type: Number, required: true },
    Tour3CB: { type: Number, required: true },
    Tour4Points: { type: Number, required: true },
    Tour4CB: { type: Number, required: true },
    Tour5Points: { type: Number, required: true },
    Tour5CB: { type: Number, required: true },
    Tour6Points: { type: Number, required: true },
    Tour6CB: { type: Number, required: true },
    Tour7Points: { type: Number, required: true },
    Tour7CB: { type: Number, required: true },
    Total: {type: Number, required: true},


})

const Standings = model<IStandings>("Standings", standingsSchema);
export default Standings;