import React, { createContext, useReducer } from 'react'

const initialState = {
  transactions: []
}

export const UserContext = createContext(initialState)

const UserContextProvider = ({ children }) => {

  function reducer(state, action) {
    if(action.type == 'ADD_TRANSACTION') {
      return {
        ...state,
        transactions: [action.payload,...state.transactions]
      }
    }
    else if(action.type == 'DELETE_TRANSACTION') {
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id != action.payload)
      }
    }
    else {
      return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function addTransaction(transactions) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transactions})
  }

  function deleteTransaction(id) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id})
  }
    
  return (
    <UserContext.Provider value={{transactions:state.transactions, addTransaction, deleteTransaction}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider