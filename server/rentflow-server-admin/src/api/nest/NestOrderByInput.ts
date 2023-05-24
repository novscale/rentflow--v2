import { SortOrder } from "../../util/SortOrder";

export type NestOrderByInput = {
  id?: SortOrder;
  isOccupied?: SortOrder;
  isUnit?: SortOrder;
  name?: SortOrder;
  propertyIdId?: SortOrder;
  updatedAt?: SortOrder;
};
