import React, { useContext } from 'react'
import Transaction from './Transaction'
import { UserContext } from '../context/UserContextProvider'

const TransactionList = () => {
  const { transactions } = useContext(UserContext)
  return (
    <>
      <h4 className='history'>Transaction History</h4>
      <ul className='list'>
          { transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>)) }
      </ul>
    </>
  )
}

export default TransactionList