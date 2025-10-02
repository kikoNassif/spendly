import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment'
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentIncome = ({transactions, onSeeMore}) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">
          Income
          <span className="text-xs ml-2 text-gray-600">
            (last 60 Days)
          </span>
        </h5>

        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions && transactions.length > 0 ? (
          transactions.slice(0, 5).map((income) => (
            <TransactionInfoCard
              key={income._id}
              title={income.source}
              icon={income.icon}
              date={moment(income.date).format("Do MMM YYYY")}
              amount={income.amount}
              type="income"
              hideDeleteBtn
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-6">
            No Income Transactions
          </p>
        )}
      </div>
    </div>
  )
}

export default RecentIncome