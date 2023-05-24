import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type NestWhereInput = {
  id?: StringFilter;
  isOccupied?: BooleanNullableFilter;
  isUnit?: BooleanNullableFilter;
  name?: StringNullableFilter;
  propertyId?: PropertyWhereUniqueInput;
};
