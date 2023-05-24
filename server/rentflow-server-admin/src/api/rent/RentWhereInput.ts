import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type RentWhereInput = {
  amount?: FloatFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  nestId?: NestWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
