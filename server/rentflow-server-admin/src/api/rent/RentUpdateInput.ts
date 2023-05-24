import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type RentUpdateInput = {
  amount?: number;
  date?: Date;
  nestId?: NestWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
