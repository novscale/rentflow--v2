import { BillUpdateManyWithoutNestsInput } from "./BillUpdateManyWithoutNestsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RentUpdateManyWithoutNestsInput } from "./RentUpdateManyWithoutNestsInput";
import { TenantUpdateManyWithoutNestsInput } from "./TenantUpdateManyWithoutNestsInput";

export type NestUpdateInput = {
  bills?: BillUpdateManyWithoutNestsInput;
  isOccupied?: boolean;
  isUnit?: boolean;
  name?: string;
  propertyId?: PropertyWhereUniqueInput;
  rents?: RentUpdateManyWithoutNestsInput;
  tenants?: TenantUpdateManyWithoutNestsInput;
};
