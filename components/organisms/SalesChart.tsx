"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesBarChart = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl border border-gray-200 shadow-sm animate-in fade-in zoom-in">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Monthly Sales (Bar)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarChart;
