import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,

} from 'recharts';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    const loaderData = useLoaderData();
    const data = loaderData.data;

    return (
        <div >
            <p className='text-center text-2xl font-semibold mt-10'>A simple Bar Chart of Total Number of Quiz vs Type of Quiz</p>
            <div className='flex justify-center mt-10'>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="total" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;