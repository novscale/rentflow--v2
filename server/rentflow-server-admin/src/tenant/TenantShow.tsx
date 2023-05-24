import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { NEST_TITLE_FIELD } from "../nest/NestTitle";
import { TENANT_TITLE_FIELD } from "./TenantTitle";

export const TenantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="email" source="email" />
        <TextField label="firstname" source="firstname" />
        <TextField label="ID" source="id" />
        <TextField label="lastname" source="lastname" />
        <ReferenceField label="nest_id" source="nest.id" reference="Nest">
          <TextField source={NEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="phone" source="phone" />
        <TextField label="SIN" source="sin" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Rent" target="TenantId" label="Rents">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField label="nest_id" source="nest.id" reference="Nest">
              <TextField source={NEST_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="tenant_id"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
