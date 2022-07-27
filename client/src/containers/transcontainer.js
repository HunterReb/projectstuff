import { useEffect, useState } from 'react'
// I want to centralise in TransContainer as transactions are focus
import TransactionList from '../components/transactionlist'
import NewTransactionForm from '../components/newtransactionform'
import NewMerchantForm from '../components/newmerchant'
// import NewTagForm from '../components/newtag'

const TransContainer = ({ baseUrl }) => {

  const [transactions, setTransactions] = useState([])

  useEffect(() => { // TransactionStart
    fetchTransactions()
  }, [])
  console.log(transactions)

  const fetchTransactions = () => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(transactions => setTransactions(transactions));
  }

  const handleTransactionSubmit = newTransaction => {
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(newTransaction),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(fetchTransactions)
  }

  const handleTransactionDelete = (id) => {
    console.log(id)
    fetch(baseUrl + id, { // is it a base URL problem?
      method: 'DELETE'
    })
      .then(fetchTransactions)
  }

  const HandleTransactionEdit = (id) => {
    fetch(baseUrl + id, {
      method: 'PUT'
    })
    .then(fetchTransactions)
  }

  return (
    <>
      {/* <NewTransactionForm 
      /> */}
      <TransactionList 
        transactions={transactions} 
        onTransactionSubmit={handleTransactionSubmit}
        onTransactionDelete={handleTransactionDelete}
        onTransactionEdit={HandleTransactionEdit}
    />
    </>
  )
} 
export default TransContainer;