"use client";

import { useState } from "react";
import DashboardLayout from "@/components/templates/DashboardLayout";
import YearSelector from "@/components/molecules/YearSelector";
import SalesChart from "@/components/organisms/SalesChart";
import { salesData } from "@/data/salesData";

export default function DashboardPage() {
  const [year, setYear] = useState(2024);

  return (
    <DashboardLayout>
      <YearSelector onSelect={setYear} />

      <div className="mt-6 bg-white p-4 rounded shadow">
        <SalesChart data={salesData[year]} />
      </div>
    </DashboardLayout>
  );
}
