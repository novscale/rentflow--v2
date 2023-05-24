import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type NestCreateInput = {
  isOccupied?: boolean | null;
  isUnit?: boolean | null;
  name?: string | null;
  propertyId?: PropertyWhereUniqueInput | null;
};
