import { NestWhereUniqueInput } from "../nest/NestWhereUniqueInput";
import { RentCreateNestedManyWithoutTenantsInput } from "./RentCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  email?: string | null;
  firstname: string;
  lastname: string;
  nestId: NestWhereUniqueInput;
  phone?: string | null;
  rents?: RentCreateNestedManyWithoutTenantsInput;
  sin: string;
};
