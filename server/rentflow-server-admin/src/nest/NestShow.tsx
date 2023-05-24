import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
} from "react-admin";

import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const NestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
