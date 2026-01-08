"use client";
import React, { useState } from 'react';
import RevenueLineChart from "@/components/RevenueLineChart";
import CategoryPieChart from "@/components/CategoryPieChart";
import SalesBarChart from "@/components/SalesBarChart";

// 1. Define Data centrally so we can filter it
const INITIAL_SALES_DATA = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
  { name: 'Jul', revenue: 3490 },
];

const INITIAL_CATEGORY_DATA = [
  { name: 'Electronics', value: 400 },
  { name: 'Fashion', value: 300 },
  { name: 'Home', value: 300 },
  { name: 'Books', value: 200 },
  { name: 'Sports', value: 150 },
];

export default function Home() {
  // State for Toggle (Which chart to show)
  const [activeChart, setActiveChart] = useState('bar'); // Options: 'bar', 'line', 'pie'
  
  // State for Threshold Filter (Filter values below this number)
  const [filterValue, setFilterValue] = useState(0);

  // Filter Logic
  const filteredSalesData = INITIAL_SALES_DATA.filter(item => item.revenue >= filterValue);
  const filteredCategoryData = INITIAL_CATEGORY_DATA.filter(item => item.value >= filterValue);

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Dashboard Overview</h1>

        {/* CONTROLS SECTION */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* 1. CHART TOGGLE BUTTONS */}
            <div className="flex bg-gray-100 p-1 rounded-lg">
              {['bar', 'line', 'pie'].map((chart) => (
                <button
                  key={chart}
                  onClick={() => setActiveChart(chart)}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                    activeChart === chart 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {chart} Chart
                </button>
              ))}
            </div>

            {/* 2. THRESHOLD FILTER */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">
                Min. Value Filter:
              </label>
              <input
                type="number"
                value={filterValue}
                onChange={(e) => setFilterValue(Number(e.target.value))}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            *Showing items with value greater than <strong>{filterValue}</strong>
          </p>
        </div>

        {/* CHART DISPLAY AREA */}
        <div className="w-full">
          {activeChart === 'bar' && (
            <SalesBarChart data={filteredSalesData} />
          )}
          {activeChart === 'line' && (
            <RevenueLineChart data={filteredSalesData} />
          )}
          {activeChart === 'pie' && (
            <CategoryPieChart data={filteredCategoryData} />
          )}
        </div>
      </div>
    </div>
  );
}
