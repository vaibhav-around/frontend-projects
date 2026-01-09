import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPlace extends Document {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

const PlaceSchema: Schema<IPlace> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'General'
  }
});

const Place: Model<IPlace> = mongoose.models.Place || mongoose.model<IPlace>('Place', PlaceSchema);

export default Place;