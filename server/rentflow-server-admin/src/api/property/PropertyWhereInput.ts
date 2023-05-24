import { StringFilter } from "../../util/StringFilter";
import { NestListRelationFilter } from "../nest/NestListRelationFilter";

export type PropertyWhereInput = {
  city?: StringFilter;
  country?: StringFilter;
  id?: StringFilter;
  nests?: NestListRelationFilter;
  postalCode?: StringFilter;
  streetName?: StringFilter;
  streetNumber?: StringFilter;
};
