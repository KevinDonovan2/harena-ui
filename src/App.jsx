import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/users/users';
import MyChart from './components/Chart';
import { PatrimoineInput } from './components/patrimoine/patrimoine';
import  Possession  from './components/possession/possession';

const Dashboard = () => (
    <div>
      <h1>Dashboard</h1>
      <MyChart />
    </div>
  );

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="users" list={UserList} />
        <Resource name="Patrimoine" list={PatrimoineInput} />
        <Resource name="possession" list={Possession.list} create={Possession.create} edit={Possession.edit} />
    </Admin>
);

export default App;
