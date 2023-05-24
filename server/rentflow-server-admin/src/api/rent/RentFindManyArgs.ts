import { RentWhereInput } from "./RentWhereInput";
import { RentOrderByInput } from "./RentOrderByInput";

export type RentFindManyArgs = {
  where?: RentWhereInput;
  orderBy?: Array<RentOrderByInput>;
  skip?: number;
  take?: number;
};
