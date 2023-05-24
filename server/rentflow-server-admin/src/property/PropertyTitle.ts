import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "streetName";

export const PropertyTitle = (record: TProperty): string => {
  return record.streetName || String(record.id);
};
