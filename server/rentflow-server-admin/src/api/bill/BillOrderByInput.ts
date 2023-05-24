import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  amount?: SortOrder;
  category?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  nestIdId?: SortOrder;
  updatedAt?: SortOrder;
};
