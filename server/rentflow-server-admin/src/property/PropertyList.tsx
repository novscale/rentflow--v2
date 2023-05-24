import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label=" city" source="city" />
        <TextField label="country" source="country" />
        <TextField label="ID" source="id" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="streetName" source="streetName" />
        <TextField label="streetNumber" source="streetNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
