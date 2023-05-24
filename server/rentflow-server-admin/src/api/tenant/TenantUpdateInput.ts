import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";
import { RentUpdateManyWithoutTenantsInput } from "./RentUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  email?: string | null;
  firstname?: string;
  lastname?: string;
  nestId?: NestWhereUniqueInput;
  phone?: string | null;
  rents?: RentUpdateManyWithoutTenantsInput;
  sin?: string;
};
