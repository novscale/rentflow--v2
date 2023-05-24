import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NEST_TITLE_FIELD } from "../nest/NestTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const RentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="nest_id" source="nest.id" reference="Nest">
          <TextField source={NEST_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="tenant_id" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
