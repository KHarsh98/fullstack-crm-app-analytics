import Chart from '../../charts/Chart';
import Featured from '../../featured/Featured';
import React from 'react'
import Widget from '../../widget/Widget';
import "./home.scss";
import { TransactionList } from 'transactions/transactions';
import { useGetList } from 'react-admin';


const Home = () => {
    const { data, total, isLoading, error } = useGetList(
        'transactions',
        {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'published_at', order: 'DESC' }
        }
    );

    return (
        <div className="home">
            <div className="widgets">
                <Widget type='total-orders' />
                <Widget type='pending-orders' />
                <Widget type='delivered-orders' />
                <Widget type='customers' />
            </div>
            <div className='charts'>
                <Featured />
                <Chart />
            </div>

            <div>
                <h1>Latest news</h1>
                <ul>
                    {data.map(record =>
                        <li key={record.id}>{record.status}</li>
                    )}
                </ul>
                <p>{data.length} / {total} transactions</p>

            </div>

        </div>
    )
}

export default Home