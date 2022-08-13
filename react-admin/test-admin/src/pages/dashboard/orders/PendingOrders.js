import React from 'react'
import './pendingOrders.scss';

const customers = [
    {
        name: 'James Patterson',
        amount: 800,
        date: '23/09/2022',
        noOfItems: 2,
        picURL: 'images/blank-profile.webp',
    },
    {
        name: 'Jimmy Hnedrix',
        amount: 1200,
        date: '18/09/2022',
        noOfItems: 1,
        picURL: 'images/blank-profile.webp',

    },
    {
        name: 'Jingle Bells',
        amount: 900,
        date: '19/08/2022',
        noOfItems: 5,
        picURL: 'images/blank-profile.webp',

    }
]

const PendingOrders = () => {
    return (
        <div className='pending-orders'>
            <h3 className='title'>Pending Orders</h3>
            {customers.map(customer =>
                // TODO: Add link to order view
                <a href='/#'>
                    <div className='order-item'>
                        <div className='user-details'>
                            <img src={customer.picURL} alt='customer profile' />
                            <div className='order-details'>
                                <span>{customer.date}</span>
                                <span className='user-info'>by {customer.name},&nbsp;
                                    {customer.noOfItems === 1 && 'one item'}
                                    {customer.noOfItems > 1 && customer.noOfItems + ' items'}
                                </span>

                            </div>
                        </div>
                        <div className='amount'>
                            &#8377;{customer.amount}
                        </div>
                    </div>
                </a>
            )}
        </div>

    )
}

export default PendingOrders