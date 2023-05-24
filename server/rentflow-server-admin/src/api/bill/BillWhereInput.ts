import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";

export type BillWhereInput = {
  amount?: FloatFilter;
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
  date?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  nestId?: NestWhereUniqueInput;
};
