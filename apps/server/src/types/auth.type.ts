import { Document, Types } from "mongoose";

export type TBillType = 'per-month'|'per-year'
export type TBillPlan = "arcade"|"advanced"|"pro"
export type TAddonnType = "online"|"storage"|"customize"

export interface IRegisterBody {
  name: string;
  email: string;
  phone: string;
  billType?: TBillType;
  billPlan?: TBillPlan;
  password?: string;
  addons?: string[]; //addonn ids
  _id: unknown;
  ip?: string;
  userAgent?: string;
}

export interface IPlan {
  value: TBillPlan;
  title: string;
  price: number;
  billType: TBillType;
  description?: string;
}

export interface IAddonn {
  info: string;
  isActive: boolean;
  price: number;
  title: string;
  value: TAddonnType;
  billType: TBillType;
}

export interface IRegister extends Document, IRegisterBody {}

export interface IPlanSchem extends Document, IPlan {}

export interface IAddonnSchem extends Document, IAddonn {}
