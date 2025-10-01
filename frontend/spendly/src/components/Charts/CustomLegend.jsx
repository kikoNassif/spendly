import React from "react";

const CustomLegend = ({ data, colors }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-2 mt-4 space-x-6">
      {data.map((entry, index) => (
        <li key={`legend-item-${index}`} className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded"
            style={{ backgroundColor: colors[index % colors.length] }}
          />
          <span className="text-s text-gray-700 font-medium">
            {entry.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CustomLegend;
