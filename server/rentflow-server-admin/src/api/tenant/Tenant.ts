import { Nest } from "../nest/Nest";
import { Rent } from "../rent/Rent";

export type Tenant = {
  email: string | null;
  firstname: string;
  id: string;
  lastname: string;
  nestId?: Nest;
  phone: string | null;
  rents?: Array<Rent>;
  sin: string;
  updatedAt: Date;
};
