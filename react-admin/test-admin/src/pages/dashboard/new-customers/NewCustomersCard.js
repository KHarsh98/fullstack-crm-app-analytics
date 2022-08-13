import CustomerDisplay from 'customers/CustomerDisplay';
import React from 'react'
import "./newcustomerscard.scss";

// TODO: Integrate with API

const customers = [
    'James Patterson',
    'John Smith',
    'William Smith',
    'Nick Jones',
    'Gwen Stacy',
    'Ricardo Stephens',
    'Heather Maldonado',
    'Yazmin Schaefer',
    'Kate Buchanan',
    'Deborah Munoz',
]
const NewCustomersCard = () => {
    return (
        <div className='card'>
            <h3 className='title'>Recent Customers</h3>
            <div className='customer-names'>
                {customers.map(customer =>
                    <li key={customer}>
                        <a href="/#">
                            <CustomerDisplay name={customer} picURL="images/blank-profile.webp" />
                        </a>
                    </li>)}
            </div>
            <a href="/#" className='see-all'><span>See all customers</span></a>

        </div>
    )
}

export default NewCustomersCard