import AddTransaction from "./components/AddTransaction"
import IncomeExpense from "./components/IncomeExpense"
import TransactionList from "./components/TransactionList"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'

function App() {

  return (
    <>
      <h1>Expense Tracker</h1>
      <UserContextProvider>
        <div className="container">
          <AddTransaction />
          <IncomeExpense />
          <TransactionList />
        </div>
      </UserContextProvider>
    </>
  )
}

export default App