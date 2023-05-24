import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const NestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Nests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <BooleanField label="isOccupied" source="isOccupied" />
        <BooleanField label="isUnit" source="isUnit" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="property_id"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
