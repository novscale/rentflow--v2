import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PropertyTitle } from "../property/PropertyTitle";

export const NestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isOccupied" source="isOccupied" />
        <BooleanInput label="isUnit" source="isUnit" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="propertyId.id"
          reference="Property"
          label="property_id"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
