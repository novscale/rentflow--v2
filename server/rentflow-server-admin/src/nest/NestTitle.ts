import { Nest as TNest } from "../api/nest/Nest";

export const NEST_TITLE_FIELD = "name";

export const NestTitle = (record: TNest): string => {
  return record.name || String(record.id);
};
