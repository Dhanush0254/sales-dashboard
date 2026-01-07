"use client";

import { useState } from "react";
import DashboardLayout from "../../components/templates/DashboardLayout";
import YearSelector from "../../components/molecules/YearSelector";
import SalesChart from "../../components/organisms/SalesChart";
import RevenueLineChart from "../../components/organisms/RevenueLineChart";
import CategoryPieChart from "../../components/organisms/CategoryPieChart";
import { salesData } from "../../data/salesData";

export default function DashboardPage() {
  const [year, setYear] = useState(2024);

  return (
    <DashboardLayout>
      {/* Year Selector and Main Bar Chart */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Yearly Performance
          </h2>
          <YearSelector onSelect={setYear} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <SalesChart data={salesData[year]} />
        </div>
      </div>

      {/* New Charts Section (Grid Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevenueLineChart />
        <CategoryPieChart />
      </div>
    </DashboardLayout>
  );
}
