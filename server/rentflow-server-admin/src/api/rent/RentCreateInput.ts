import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type RentCreateInput = {
  amount: number;
  date: Date;
  nestId: NestWhereUniqueInput;
  tenantId: TenantWhereUniqueInput;
};
