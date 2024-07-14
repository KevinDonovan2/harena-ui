import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import MyChart from './components/Chart';

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
    </Admin>
);

export default App;
