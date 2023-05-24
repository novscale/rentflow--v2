import { Bill } from "../bill/Bill";
import { Property } from "../property/Property";
import { Rent } from "../rent/Rent";
import { Tenant } from "../tenant/Tenant";

export type Nest = {
  bills?: Array<Bill>;
  id: string;
  isOccupied: boolean;
  isUnit: boolean;
  name: string;
  propertyId?: Property;
  rents?: Array<Rent>;
  tenants?: Array<Tenant>;
  updatedAt: Date;
};
