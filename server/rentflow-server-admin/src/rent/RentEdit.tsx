import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { NestTitle } from "../nest/NestTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const RentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateInput label="date" source="date" />
        <ReferenceInput source="nestId.id" reference="Nest" label="nest_id">
          <SelectInput optionText={NestTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="tenant_id"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
