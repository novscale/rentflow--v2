import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  id?: SortOrder;
  postalCode?: SortOrder;
  streetName?: SortOrder;
  streetNumber?: SortOrder;
  updatedAt?: SortOrder;
};
