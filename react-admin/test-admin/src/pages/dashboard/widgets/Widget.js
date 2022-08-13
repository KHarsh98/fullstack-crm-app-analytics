import React from 'react';
import "./widget.scss";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Widget = ({ type }) => {

    let data;
    //TODO: add links to each data item
    //TODO: add amount and API integration
    switch (type) {
        case 'new-orders':
            data = {
                heading: 'New Orders',
                isMoney: false,
                icon: <ShoppingCartIcon fontSize="large" />,
            }
            break;
        case 'new-customers':
            data = {
                heading: 'New Customers',
                isMoney: false,
                icon: <PersonAddIcon fontSize="large" />
            }
            break;
        case 'out-for-delivery':
            data = {
                heading: 'Out for Delivery',
                isMoney: false,
                icon: <LocalShippingIcon fontSize='large' />
            }
            break;
        case 'monthly-revenue':
            data = {
                heading: 'Monthly Revenue',
                isMoney: true,
                icon: <AttachMoneyIcon fontSize="large" />
            }
            break;
        default:
            break;


    }
    return (
        //TODO: Add links to each item
        <div className='widget'>
            <div className='left'>
                <div className='icon'>
                    {data.icon}
                </div>
            </div>
            <div className='right'>
                <h3 className='title'>{data.heading}</h3>
                <span className='counter'>{data.isMoney && <span>&#x20B9;</span>}100</span>
            </div>
        </div>
    )
}

export default Widget