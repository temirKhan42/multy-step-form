import mongoose, { Schema, Model } from 'mongoose';
import { IPlanSchem } from '../types/auth.type.js';

const planSchema: Schema<IPlanSchem> = new Schema(
  {
    value: {
      type: String,
      enum: ["arcade", "advanced", "pro"],
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
    description: {
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

export const Plan: Model<IPlanSchem> = mongoose.model<IPlanSchem>('Plan', planSchema);
