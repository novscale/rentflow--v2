import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NestTitle } from "../nest/NestTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label=" city" source="city" />
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="nests"
          reference="Nest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NestTitle} />
        </ReferenceArrayInput>
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="streetName" source="streetName" />
        <TextInput label="streetNumber" source="streetNumber" />
      </SimpleForm>
    </Create>
  );
};
