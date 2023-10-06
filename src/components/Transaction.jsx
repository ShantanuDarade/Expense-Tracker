import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(UserContext)

  return (
    <li className={transaction.type=="INCOME" ? 'incomelist' : 'expenselist'}>
      { transaction.description } <span>{transaction.amount}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction