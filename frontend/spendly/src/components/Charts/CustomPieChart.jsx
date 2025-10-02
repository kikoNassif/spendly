import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor
}) => {
  return <ResponsiveContainer width="100%" height={380}>
    <PieChart>
      <Pie
        data={data}
        dataKey="amount"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={130}
        innerRadius={100}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip content={CustomTooltip} />
      <Legend content={<CustomLegend data={data} colors={colors} />}/>

      {showTextAnchor && (
        <>
          <text
            x="50%"
            y={label.includes('\n') ? "38%" : "43%"} // lower y is for 2 lines, upper y is for 1 line
            dy={-25}
            textAnchor="middle"
            fill='#666'
            fontSize="14px"
            className="mb-2"
          >
            {label.split('\n').map((line, idx) => (
              <tspan x="50%" dy={idx === 0 ? 0 : 18} key={idx}>
                {line}
              </tspan>
            ))}
          </text>
          <text
            x="50%"
            y="50%"
            dy={8}
            textAnchor="middle"
            fill='#33'
            fontSize="24px"
            fontWeight="semi-bold"
          >
            {totalAmount}
          </text>
        </>
      )}
    </PieChart>
  </ResponsiveContainer>
}

export default CustomPieChart