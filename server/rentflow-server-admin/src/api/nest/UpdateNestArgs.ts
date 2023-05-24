import { NestWhereUniqueInput } from "./NestWhereUniqueInput";
import { NestUpdateInput } from "./NestUpdateInput";

export type UpdateNestArgs = {
  where: NestWhereUniqueInput;
  data: NestUpdateInput;
};
