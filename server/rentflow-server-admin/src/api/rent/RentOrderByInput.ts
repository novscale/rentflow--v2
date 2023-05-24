import { SortOrder } from "../../util/SortOrder";

export type RentOrderByInput = {
  amount?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  nestIdId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
