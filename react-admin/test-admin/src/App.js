import drfProvider from 'ra-data-drf';
import { Admin, Resource } from 'react-admin';
import React from 'react';
import { OrderCreate, OrderList } from './orders/orders';
import OrderEdit from './orders/OrderEdit';
import OrderLineItemsEdit from './orders/OrderLineItemsEdit';
import { CustomerCreate, CustomerEdit, CustomerList } from './customers/customers';
import { ProductCreate, ProductEdit, ProductList } from './products/products';
import GroupIcon from '@mui/icons-material/Group';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Dashboard from 'pages/dashboard/Dashboard';
import OrderItemsCreate from 'orders/OrderItemsCreate';

const dataProvider = drfProvider("http://localhost:8000/api");

function App() {
  return (
    <Admin disableTelemetry dataProvider={dataProvider} dashboard={Dashboard} >
      <Resource name='orders' list={OrderList} edit={OrderEdit} create={OrderCreate} icon={ListAltIcon} />
      <Resource name='customers' list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={GroupIcon} />
      <Resource name='products' list={ProductList} edit={ProductEdit} create={ProductCreate} icon={PrecisionManufacturingIcon} />
      <Resource name='product-quantity' edit={OrderLineItemsEdit} create={OrderItemsCreate} />
    </Admin>
  );
}

export default App;
