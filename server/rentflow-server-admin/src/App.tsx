import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { NestList } from "./nest/NestList";
import { NestCreate } from "./nest/NestCreate";
import { NestEdit } from "./nest/NestEdit";
import { NestShow } from "./nest/NestShow";
import { BillList } from "./bill/BillList";
import { BillCreate } from "./bill/BillCreate";
import { BillEdit } from "./bill/BillEdit";
import { BillShow } from "./bill/BillShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { RentList } from "./rent/RentList";
import { RentCreate } from "./rent/RentCreate";
import { RentEdit } from "./rent/RentEdit";
import { RentShow } from "./rent/RentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Rentflow Server"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
        <Resource
          name="Nest"
          list={NestList}
          edit={NestEdit}
          create={NestCreate}
          show={NestShow}
        />
        <Resource
          name="Bill"
          list={BillList}
          edit={BillEdit}
          create={BillCreate}
          show={BillShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="Rent"
          list={RentList}
          edit={RentEdit}
          create={RentCreate}
          show={RentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
