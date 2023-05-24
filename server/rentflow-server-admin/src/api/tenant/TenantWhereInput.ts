import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";
import { RentListRelationFilter } from "../rent/RentListRelationFilter";

export type TenantWhereInput = {
  email?: StringNullableFilter;
  firstname?: StringFilter;
  id?: StringFilter;
  lastname?: StringFilter;
  nestId?: NestWhereUniqueInput;
  phone?: StringNullableFilter;
  rents?: RentListRelationFilter;
  sin?: StringFilter;
};
