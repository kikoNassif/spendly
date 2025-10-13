import React from 'react';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart
} from 'recharts';

const CustomLineChart = ({ data }) => {
  // Give each data point a unique x value (date + index)
  const chartData = data.map((item, idx) => ({
    uniqueX: `${item.date}-${idx}`,
    date: item.date,
    amount: item.amount,
    category: item.category,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const point = payload[0].payload;

    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-purple-800 mb-1">
          {point.date}
        </p>
        <p className="text-sm text-gray-600">
          {point.category}:{' '}
          <span className="text-sm font-medium text-black">
            ${point.amount}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="uniqueX"
            tick={{ fontSize: 12, fill: '#555' }}
            stroke="none"
            tickFormatter={(val) => val.split('-')[0]} // show only date
          />
          <YAxis tick={{ fontSize: 12, fill: '#555' }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#875cf5"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: '#ab8df8' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
