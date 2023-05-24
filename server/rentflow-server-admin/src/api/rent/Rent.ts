import { Nest } from "../nest/Nest";
import { Tenant } from "../tenant/Tenant";

export type Rent = {
  amount: number;
  date: Date;
  id: string;
  nestId?: Nest;
  tenantId?: Tenant;
  updatedAt: Date;
};
