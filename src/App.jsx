import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import MyChart from './components/Chart';
import { PatrimoineInput } from './components/patrimoine/patrimoine';
import  Possession  from './components/possession/possession';
import UserIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';

const Dashboard = () => (
    <div>
      <h1>Dashboard</h1>
      <MyChart />
    </div>
  );

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="Patrimoine" list={PatrimoineInput} icon={UserIcon}/>
        <Resource name="possession" list={Possession.list} create={Possession.create} edit={Possession.edit} icon={InventoryIcon}/>
    </Admin>
);

export default App;
