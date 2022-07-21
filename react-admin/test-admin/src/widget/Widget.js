import "./widget.scss";
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const Widget = ({ type }) => {
    let data;
    // TODO: Replace with API call
    const amount = 100;
    const diff = 20;
    switch (type) {
        case 'orders':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'See all orders',
                icon: <ShoppingCartOutlinedIcon className="icon" style={{
                    backgroundColor: "#f5e5bd",
                    color: "goldenrod",
                }} />
            }
            break;
        case 'customers':
            data = {
                title: 'CUSTOMERS',
                isMoney: false,
                link: 'See all customers',
                icon: <PersonOutlineOutlinedIcon className="icon" style={{
                    backgroundColor: '#ff9999',
                    color: 'red',
                }} />
            }
            break;
        case 'products':
            data = {
                title: 'PRODUCTS',
                isMoney: false,
                link: 'See all products',
                icon: <PrecisionManufacturingOutlinedIcon className="icon" style={{
                    color: '#0000ff',
                    backgroundColor: '#9999ff'
                }} />
            }
            break;
        case 'sales':
            data = {
                title: 'SALES',
                isMoney: true,
                link: 'See all sales',
                icon: <MonetizationOnOutlinedIcon className="icon" style={{
                    color: 'green',
                    backgroundColor: '#ccffcc'
                }} />
            }
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && <CurrencyRupeeOutlinedIcon />} {amount} </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget