import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  DateInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { NestTitle } from "../nest/NestTitle";

export const BillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <SelectInput
          source="category"
          label="category"
          choices={[
            { label: "Electricity", value: "Electricity" },
            { label: "Gas", value: "Gas" },
            { label: "Insurance", value: "Insurance" },
            { label: "Maintenance", value: "Maintenance" },
            { label: "Mortgage", value: "Mortgage" },
            { label: "Property Tax", value: "PropertyTax" },
            { label: "Water", value: "Water" },
            { label: "Repairs", value: "Repairs" },
            { label: "LTB", value: "Ltb" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="nestId.id" reference="Nest" label="nest_id">
          <SelectInput optionText={NestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
