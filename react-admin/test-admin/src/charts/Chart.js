import React from 'react';
import "./chart.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'January', Total: 1200 },
    { name: 'February', Total: 2100 },
    { name: 'March', Total: 3200 },
    { name: 'April', Total: 1300 },
    { name: 'May', Total: 800 },
    { name: 'June', Total: 1100 },
    { name: 'July', Total: 2000 },
    { name: 'August', Total: 1800 },
    { name: 'September', Total: 1900 },
    { name: 'October', Total: 1500 },
    { name: 'November', Total: 3800 },
    { name: 'December', Total: 2200 },
];

const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Yearly Sales</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer></div>
    )
}

export default Chart