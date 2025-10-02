import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"

const CustomBarChart = ({data, xKey}) => {

  // Function to alternate bar colors
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbefb";
  };

  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const entry = payload[0].payload;

      // Pick whichever field exists
      const label = entry.category || entry.source || "";
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          {label && (
            <p className="text-xs font-semibold text-purple-800 mb-1">
              {label}
            </p>
          )}
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">
              ${entry.amount}
            </span>
          </p>
        </div>
      );
    }
    return null
  }

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#555"}} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          <Tooltip content={CustomToolTip} />

          <Bar
            dataKey="amount"
            fill="#FF8042"
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: "yellow" }}
            activeStyle={{fill: "green" }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart