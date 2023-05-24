import { Property } from "../property/Property";

export type Nest = {
  id: string;
  isOccupied: boolean | null;
  isUnit: boolean | null;
  name: string | null;
  propertyId?: Property | null;
  updatedAt: Date;
};
