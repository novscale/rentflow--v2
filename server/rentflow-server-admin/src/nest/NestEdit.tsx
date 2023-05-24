import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PropertyTitle } from "../property/PropertyTitle";

export const NestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
