import { Nest } from "../nest/Nest";

export type Property = {
  city: string;
  country: string;
  id: string;
  nests?: Array<Nest>;
  postalCode: string;
  streetName: string;
  streetNumber: string;
  updatedAt: Date;
};
