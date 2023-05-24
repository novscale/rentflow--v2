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

export const TenantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tenants"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
