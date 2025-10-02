import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({data}) => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);

    return () => {};
  }, [data])

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">
          Expenses In The Last 30 Days

          <span className="text-xs ml-2 text-gray-600">
            (Total by Day)
          </span>
        </h5>
      </div>

      <CustomBarChart data={chartData} xKey="month" />
    </div>
  )
}

export default Last30DaysExpenses