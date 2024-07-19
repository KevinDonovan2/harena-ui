import { Admin, Resource } from 'react-admin';
import MyChart from './components/Chart';
import UserIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import  PossessionList  from './components/possession/possessionList';
import  PossessionCreate from './components/possession/possessionCreate';
import  PossessionEdit  from './components/possession/possessionEdit';
import { PatrimoineCreate } from './components/patrimoine/patrimoineCreate';
import { PatrimoineList } from './components/patrimoine/patrimoineList';
import { PatrimoineEdit } from './components/patrimoine/patrimoineEdit';
import dataProvider from './providers/dataProvider';

const Dashboard = () => (
    <div>
      <h1>Dashboard</h1>
      <MyChart />
    </div>
  );


const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="Patrimoine" list={PatrimoineList} create={PatrimoineCreate} edit={PatrimoineEdit} icon={UserIcon}/>
        <Resource name="Possessions" list={PossessionList} create={PossessionCreate} edit={PossessionEdit} icon={InventoryIcon}/>
    </Admin>
);

export default App;
