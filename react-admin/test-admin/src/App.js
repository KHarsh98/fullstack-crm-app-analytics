import drfProvider from 'ra-data-drf';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import React from 'react';
import { OrderCreate, OrderList, OrderShow } from './orders/orders';
import OrderEdit from './orders/OrderEdit';
import OrderLineItemsEdit from './orders/OrderLineItemsEdit';
import { CustomerCreate, CustomerEdit, CustomerList, CustomerShow } from './customers/customers';
import { ProductCreate, ProductEdit, ProductList, ProductShow } from './products/products';
import { TransactionEdit, TransactionList, TransactionShow, TransactionCreate } from './transactions/transactions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Home from './pages/home/Home';

const dataProvider = drfProvider("http://localhost:8000/api");

function App() {
  return (
    <Admin disableTelemetry dataProvider={dataProvider} dashboard={Home} >
      <Resource name='orders' show={OrderShow} list={OrderList} edit={OrderEdit} create={OrderCreate} icon={ListAltIcon} />
      <Resource name='customers' show={CustomerShow} list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={GroupIcon} />
      <Resource name='products' show={ProductShow} list={ProductList} edit={ProductEdit} create={ProductCreate} icon={PrecisionManufacturingIcon} />
      <Resource name='transactions' show={TransactionShow} list={TransactionList} edit={TransactionEdit} create={TransactionCreate} icon={AttachMoneyIcon} />
      <Resource name='product-quantity' edit={OrderLineItemsEdit} />
    </Admin>
  );
}

export default App;
