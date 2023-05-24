import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NestTitle } from "../nest/NestTitle";
import { RentTitle } from "../rent/RentTitle";

export const TenantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstname" source="firstname" />
        <TextInput label="lastname" source="lastname" />
        <ReferenceInput source="nestId.id" reference="Nest" label="nest_id">
          <SelectInput optionText={NestTitle} />
        </ReferenceInput>
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="rents"
          reference="Rent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentTitle} />
        </ReferenceArrayInput>
        <TextInput label="SIN" source="sin" />
      </SimpleForm>
    </Edit>
  );
};
