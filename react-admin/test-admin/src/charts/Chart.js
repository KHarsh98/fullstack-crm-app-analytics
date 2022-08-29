import React from 'react';
import "./chart.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import API_BASE from 'constants/API_BASE';
import { useQuery } from 'react-query';
import { Loading, Error } from 'react-admin';

const fetchMonthyRevenue = () => {
    let url = API_BASE + '/orders/get_monthly_revenue_history';
    const token = localStorage.getItem('access');
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json().then(data => data));
}

const Chart = () => {
    const { isLoading, error, data } = useQuery('monthly-revenue', fetchMonthyRevenue);

    if (isLoading) return <Loading />;
    if (error) return <Error />;

    return (

        <div className="chart">
            <div className="title">30 Day Revenue History</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data.revenue_history}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke='gray' />
                    <YAxis dataKey="total" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart