import { TOption } from ".";

export type TBillType = 'per-month'|'per-year'
export type TBillPlan = "arcade"|"advanced"|"pro"

export interface PersonContextType {
  personInfo: TPerson;
  handleChangePerson: (
    key: keyof TPerson, 
    value: string|TBillType|TBillPlan|string[]
  ) => void;
  stepsList: string[];
  step: number;
  handleStep: (val: number) => void;
  handleBack: () => void;
}

export type TPerson = {
  "name"?: string;
  "email"?: string;
  "phone"?: string;
  "password"?: string;
  "confirmPassword"?: string;
  "billType"?: TBillType;
	"billPlan"?: TBillPlan;
	"addons"?: string[], // id's
}

export interface IPlan {
  value: TBillPlan;
  title: string;
  price: number;
  description?: string;
  id: string;
  billType: TBillType;
}

export interface IAddon {
  value: string;
  isActive: boolean;
  title: string;
  info: string;
  price: number;
  id: string;
  billType: TBillType;
}

export type TCard = IPlan & {
  icon: string;
}

export type TUiInfo = {
  title: string;
  description: string;
  planTitle?: string;
  planPrice?: string;
  selected?: {
    selectedTitle: string; 
    selectePrice: string
  }[];
  totalTitle?: string;
  totalPrice?: string;
}

export type TUiButton = {
  label: string; 
  onClick: () => void;
  isLoading?: boolean;
}

export type TBillOption = TOption & {
  value: TBillType;
}