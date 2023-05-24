import { NestWhereInput } from "./NestWhereInput";
import { NestOrderByInput } from "./NestOrderByInput";

export type NestFindManyArgs = {
  where?: NestWhereInput;
  orderBy?: Array<NestOrderByInput>;
  skip?: number;
  take?: number;
};
