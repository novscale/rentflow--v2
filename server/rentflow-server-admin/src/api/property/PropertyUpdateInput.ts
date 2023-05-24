import { NestUpdateManyWithoutPropertiesInput } from "./NestUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  city?: string;
  country?: string;
  nests?: NestUpdateManyWithoutPropertiesInput;
  postalCode?: string;
  streetName?: string;
  streetNumber?: string;
};
