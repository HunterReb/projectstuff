// import { useState } from 'react'

// const NewTransactionForm = ({ onTransactionSubmit }) => {

//   const [amount, setAmount] = useState('')
//   const [tag, setTag] = useState('')
//   const [merchant, setMerchant] = useState('')

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value)
//   }

//   const handleMerchantChange = (event) => {
//     setMerchant(event.target.value)
//   }

//   const handleTagChange = (event) => {
//     setTag(event.target.value)
//   }

//   const resetForm = () => {
//     setAmount('')
//     setTag('')
//     setMerchant('')
//   }

//   const handleFormSubmit = (event) => {
//     event.preventDefault()
//     const payload = {
//       amount, tag, merchant
//     }
//     onTransactionSubmit(payload)
//     resetForm()
//   }
  

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="Amount">Amount:</label>
//       <input type="text" name="Amount" value={amount} onChange={handleAmountChange} />
//       <label htmlFor="name">Tag:</label>
//       <input type="text" name="Tag" value={tag} onChange={handleTagChange} />
//       <label htmlFor="name">Merchant:</label>
//       <input type="text" name="Merchant" value={merchant} onChange={handleMerchantChange} />
//       <input type="submit" value="Save" />
//     </form>
//   )
// }

// export default NewTransactionForm