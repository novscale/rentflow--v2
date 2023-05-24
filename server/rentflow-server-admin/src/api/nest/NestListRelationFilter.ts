import { NestWhereInput } from "./NestWhereInput";

export type NestListRelationFilter = {
  every?: NestWhereInput;
  some?: NestWhereInput;
  none?: NestWhereInput;
};
