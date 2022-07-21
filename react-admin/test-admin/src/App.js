import drfProvider from 'ra-data-drf';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import React from 'react';
import { OrderCreate, OrderEdit, OrderList } from './orders/orders';
import { CustomerCreate, CustomerEdit, CustomerList } from './customers/customers';
import { ProductCreate, ProductEdit, ProductList } from './products/products';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Home from './pages/home/Home';

const dataProvider = drfProvider("http://localhost:8000/api");

function App() {
  return (
    <Admin dataProvider={dataProvider} dashboard={Home} >
      <Resource name='orders' list={OrderList} edit={OrderEdit} create={OrderCreate} icon={AttachMoneyIcon} />
      <Resource name='customers' list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={GroupIcon} />
      <Resource name='products' list={ProductList} edit={ProductEdit} create={ProductCreate} icon={PrecisionManufacturingIcon} />
    </Admin>
  );
}

export default App;
