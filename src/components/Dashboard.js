import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useTable } from 'react-table';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const data = [
    { name: 'Apple', stock: 400, amt: 240000 },
    { name: 'Samsung', stock: 900, amt: 20000 },
    { name: 'Oppo', stock: 100, amt: 2000 },
    { name: 'Xiaomi', stock: 600, amt: 10000 },
    { name: 'Nothing', stock: 800, amt: 100000 },
    { name: 'Poco', stock: 1000, amt: 8000 },
];

const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Stock', accessor: 'stock' },
    { Header: 'Amount', accessor: 'amt' },
];

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const dataTable = useTable({
        columns,
        data,
    });

    return (
        <div className="flex">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-grow p-6">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl mb-4">Line Chart</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <Line type="monotone" dataKey="stock" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>


                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl mb-4">Data Table</h2>
                        <table {...dataTable.getTableProps()} className="min-w-full bg-white">
                            <thead>
                                {dataTable.headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()} className="px-4 py-2 border-b">{column.render('Header')}</th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...dataTable.getTableBodyProps()}>
                                {dataTable.rows.map(row => {
                                    dataTable.prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td {...cell.getCellProps()} className="px-4 py-2 border-b">{cell.render('Cell')}</td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>


                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-x2 mb-5">Indicators</h2>
                        <div className="flex space-x-6">
                            <div className="p-4 bg-blue-200 rounded">
                                <p className="text-lg">Apple</p>
                                <p className="text-2xl">40%</p>
                            </div>
                            <div className="p-4 bg-green-200 rounded">
                                <p className="text-lg">Samsung</p>
                                <p className="text-2xl">90%</p>
                            </div>
                            <div className="p-4 bg-red-200 rounded">
                                <p className="text-lg">Oppo</p>
                                <p className="text-2xl">10%</p>
                            </div>
                            <div className="p-4 bg-blue-200 rounded">
                                <p className="text-lg">Xiaomi</p>
                                <p className="text-2xl">60%</p>
                            </div>
                            <div className="p-4 bg-green-200 rounded">
                                <p className="text-lg">Nothing</p>
                                <p className="text-2xl">80%</p>
                            </div>
                            <div className="p-4 bg-green-200 rounded">
                                <p className="text-lg">Poco</p>
                                <p className="text-2xl">100%</p>
                            </div>
                        </div>
                    </div>


                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl mb-4">Battery Status</h2>
                        <div className="flex items-center">
                            <div className="w-16 h-8 bg-gray-200 rounded-full mr-4 relative">
                                <div className="absolute top-0 left-0 h-8 rounded-full bg-green-500" style={{ width: '73%' }}></div>
                            </div>
                            <p className="text-lg">73%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
