import { Bill as TBill } from "../api/bill/Bill";

export const BILL_TITLE_FIELD = "name";

export const BillTitle = (record: TBill): string => {
  return record.name || String(record.id);
};
