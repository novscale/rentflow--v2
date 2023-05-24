import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { NestTitle } from "../nest/NestTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const RentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
