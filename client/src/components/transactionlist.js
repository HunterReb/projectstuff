import { useState } from 'react'

const TransactionList = ({ transactions, onTransactionDelete, onTransactionSubmit, onTransactionEdit }) => {
  
  const [amount, setAmount] = useState('')
  const [tag, setTag] = useState('')
  const [merchant, setMerchant] = useState('')

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  const handleMerchantChange = (event) => {
    setMerchant(event.target.value)
  }

  const handleTagChange = (event) => {
    setTag(event.target.value)
  }

  const resetForm = () => {
    setAmount('')
    setTag('')
    setMerchant('')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const payload = {
      amount, tag, merchant
    }
    onTransactionSubmit(payload)
    resetForm()
  } // Should start as empty array?
  console.log(transactions[0])

    return (
      <div id="Transactions">
        <h2>Recent Transactions</h2>
        <form onSubmit={handleFormSubmit}>
      <label htmlFor="Amount">Amount:</label>
      <input type="text" name="Amount" value={amount} onChange={handleAmountChange} />
      <label htmlFor="Tag">Tag:</label>
      <input type="text" name="Tag" value={tag} onChange={handleTagChange} />
      <label htmlFor="Merchant">Merchant:</label>
      <input type="text" name="Merchant" value={merchant} onChange={handleMerchantChange} />
      <input type="submit" value="Save" />
    </form>
        <ul>
          {transactions.map(transaction => {
            return (
              <li 
                key={transaction.id}>
                  <p>{transaction.amount} for {transaction.tag} from {transaction.merchant}</p> 
                  <button onClick={() => onTransactionDelete(transaction.id)}>Delete</button>
                  <button onClick={() => onTransactionEdit(transaction.id)}>Edit</button>
                  <footer> </footer>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  
  export default TransactionList;