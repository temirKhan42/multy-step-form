import mongoose, { Schema, Model } from 'mongoose';
import { IAddonnSchem } from '../types/auth.type.js';

const addonnSchema: Schema<IAddonnSchem> = new Schema(
  {
    value: {
      type: String,
      enum: ["online", "storage", "customize"],
      readonly: true
    },
    title: {
      type: String,
      readonly: true
    },
    price: {
      type: Number,
      readonly: true
    },
    isActive: {
      type: Boolean,
      readonly: true
    },
    info: {
      type: String,
      readonly: true
    },
    billType: {
      type: String,
      enum: ['per-month', 'per-year'],
      readonly: true
    },
  },
);

export const Addonn: Model<IAddonnSchem> = mongoose.model<IAddonnSchem>('Addons', addonnSchema);
