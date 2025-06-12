export type * from './register';

export type TOption = {
  label: string|number;
  value: string|number|boolean;
}

export type TOrder = {
  id?: number;
  name: string;
  cost: number;
}

export type TNotifyParams = {
  title: string; 
  text: string; 
  type: TNotificationType; 
  duration?: number;
}

export type TObjectKeyString = {[key: string]: string}

type TNotificationType = 'success' | 'info' | 'warning' | 'error';