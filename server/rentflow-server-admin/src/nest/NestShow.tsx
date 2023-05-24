import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { NEST_TITLE_FIELD } from "./NestTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
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
        <ReferenceManyField reference="Bill" target="NestId" label="Bills">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <TextField label="category" source="category" />
            <TextField label="date" source="date" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField label="nest_id" source="nest.id" reference="Nest">
              <TextField source={NEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Rent" target="NestId" label="Rents">
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
        <ReferenceManyField reference="Tenant" target="NestId" label="Tenants">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
