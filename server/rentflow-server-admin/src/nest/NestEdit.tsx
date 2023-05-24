import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BillTitle } from "../bill/BillTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { RentTitle } from "../rent/RentTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const NestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bills"
          reference="Bill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isOccupied" source="isOccupied" />
        <BooleanInput label="isUnit" source="isUnit" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="propertyId.id"
          reference="Property"
          label="property_id"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="rents"
          reference="Rent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tenants"
          reference="Tenant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TenantTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
