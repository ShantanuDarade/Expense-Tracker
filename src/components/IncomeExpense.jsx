import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'

const IncomeExpense = () => {
  const { transactions } = useContext(UserContext)

  const income_transaction = transactions.filter(transaction => transaction.type=='INCOME')
  const expense_transaction = transactions.filter(transaction => transaction.type=='EXPENSE')

  const income_list = income_transaction.map(transaction => transaction.amount)
  const expense_list = expense_transaction.map(transaction => transaction.amount)

  const income = income_list.reduce((acc, item) => (acc += item),0)
  const expense = expense_list.reduce((acc, item) => (acc += item),0)

  return (
    <>
      <div className='balance-div'>
        Balance:<span>{income-expense}</span>
      </div>
      <div className="income-expense">
        <div className='income-div'>
            Income<span style={{color:'#5372F0'}}>{income}</span>
        </div>
        <div className='income-div'>
            Expense<span style={{color:'#6C757D'}}>{expense}</span>
        </div>
      </div>
    </>
  )
}

export default IncomeExpense