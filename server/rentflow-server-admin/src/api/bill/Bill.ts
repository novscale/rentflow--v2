import { Nest } from "../nest/Nest";

export type Bill = {
  amount: number;
  category?:
    | "Electricity"
    | "Gas"
    | "Insurance"
    | "Maintenance"
    | "Mortgage"
    | "PropertyTax"
    | "Water"
    | "Repairs"
    | "Ltb"
    | "Other";
  date: Date;
  description: string | null;
  id: string;
  name: string;
  nestId?: Nest;
  updatedAt: Date;
};
