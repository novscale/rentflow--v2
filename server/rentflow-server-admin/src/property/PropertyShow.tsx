import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PROPERTY_TITLE_FIELD } from "./PropertyTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label=" city" source="city" />
        <TextField label="country" source="country" />
        <TextField label="ID" source="id" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="streetName" source="streetName" />
        <TextField label="streetNumber" source="streetNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Nest" target="PropertyId" label="Nests">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
