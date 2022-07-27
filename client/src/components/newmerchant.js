// import { useState } from 'react'

// const NewMerchantForm = ({ onMerchantSubmit }) => {

//   const [merchant, setMerchant] = useState('')

//   const handleMerchantChange = (event) => {
//     setMerchant(event.target.value)
//   }

//   const resetForm = () => {
//     setMerchant('')
//   }

//   const handleFormSubmit = (event) => {
//     event.preventDefault()
//     const payload = {
//       merchant, 
//     }
//     onMerchantSubmit(payload)
//     resetForm()
//   }

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="name">Merchant:</label>
//       <input type="text" name="name" value={merchant} onChange={handleMerchantChange} />
//       <input type="submit" value="Save" />
//     </form>
//   )
// }

// export default NewMerchantForm