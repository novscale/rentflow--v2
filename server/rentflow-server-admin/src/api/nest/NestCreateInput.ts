import { BillCreateNestedManyWithoutNestsInput } from "./BillCreateNestedManyWithoutNestsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RentCreateNestedManyWithoutNestsInput } from "./RentCreateNestedManyWithoutNestsInput";
import { TenantCreateNestedManyWithoutNestsInput } from "./TenantCreateNestedManyWithoutNestsInput";

export type NestCreateInput = {
  bills?: BillCreateNestedManyWithoutNestsInput;
  isOccupied: boolean;
  isUnit: boolean;
  name: string;
  propertyId: PropertyWhereUniqueInput;
  rents?: RentCreateNestedManyWithoutNestsInput;
  tenants?: TenantCreateNestedManyWithoutNestsInput;
};
