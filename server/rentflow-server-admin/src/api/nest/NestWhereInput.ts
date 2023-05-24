import { BillListRelationFilter } from "../bill/BillListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RentListRelationFilter } from "../rent/RentListRelationFilter";
import { TenantListRelationFilter } from "../tenant/TenantListRelationFilter";

export type NestWhereInput = {
  bills?: BillListRelationFilter;
  id?: StringFilter;
  isOccupied?: BooleanFilter;
  isUnit?: BooleanFilter;
  name?: StringFilter;
  propertyId?: PropertyWhereUniqueInput;
  rents?: RentListRelationFilter;
  tenants?: TenantListRelationFilter;
};
