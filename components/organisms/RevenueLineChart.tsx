"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RevenueLineChart = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl border border-gray-200 shadow-sm animate-in fade-in zoom-in">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Revenue Trends (Line Chart)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueLineChart;
