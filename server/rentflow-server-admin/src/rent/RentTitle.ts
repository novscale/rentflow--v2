import { Rent as TRent } from "../api/rent/Rent";

export const RENT_TITLE_FIELD = "id";

export const RentTitle = (record: TRent): string => {
  return record.id || String(record.id);
};
