import { RentWhereUniqueInput } from "./RentWhereUniqueInput";
import { RentUpdateInput } from "./RentUpdateInput";

export type UpdateRentArgs = {
  where: RentWhereUniqueInput;
  data: RentUpdateInput;
};
