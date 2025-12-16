"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: { month: string; sales: number }[];
};

export default function SalesChart({ data }: Props) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
