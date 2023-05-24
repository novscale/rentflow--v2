import { Bill as TBill } from "../api/bill/Bill";

export const BILL_TITLE_FIELD = "id";

export const BillTitle = (record: TBill): string => {
  return record.id || String(record.id);
};
