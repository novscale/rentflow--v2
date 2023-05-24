import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";

export type BillCreateInput = {
  amount: number;
  category:
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
  description?: string | null;
  name: string;
  nestId: NestWhereUniqueInput;
};
