import { NestCreateNestedManyWithoutPropertiesInput } from "./NestCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  city: string;
  country: string;
  nests?: NestCreateNestedManyWithoutPropertiesInput;
  postalCode: string;
  streetName: string;
  streetNumber: string;
};
