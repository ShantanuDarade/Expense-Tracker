import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContextProvider'

const AddTransaction = () => {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState()

  const { addTransaction } = useContext(UserContext)

  function addTrans() {
    const newTransaction = {
      id: crypto.randomUUID(),
      amount: +amount,
      description: description,
      type: type
    }
    addTransaction(newTransaction)
    setAmount('')
    setDescription('')
  }

  return (
    <>
      <div className='addTransaction-container'>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder='Amount'/>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Description'/>
        <div className="radio-div">
          <input type="radio" name='type' value="INCOME" onChange={e => setType(e.target.value)}/>
          <label>Income</label>
          <input type="radio" name='type' value="EXPENSE" onChange={e => setType(e.target.value)}/>
          <label>Expense</label>

        </div>
        <button onClick={addTrans}>Add Transaction</button>
      </div>
    </>
  )
}

export default AddTransaction