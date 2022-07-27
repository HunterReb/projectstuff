// import { useEffect, useState } from 'react'
// import merchList from '../components/merchList' // gottamake
// import NewMerchantForm from '../components/newmerchant'
// // import transContainer from './transcontainer' //biscuit trans timeline

// const MerchContainer = ({ baseUrl }) => {

//   const [merchants, setMerchants] = useState([])

//   useEffect(() => {
//     fetchMerchants()
//   }, [])

//   const fetchMerchants = () => {
//     fetch(baseUrl)
//       .then(response => response.json())
//       .then(merchants => setMerchants(merchants));
//   }

//   const handleMerchantSubmit = newMerchant => {
//     fetch(baseUrl, {
//       method: 'POST',
//       body: JSON.stringify(newMerchant),
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then(fetchMerchants)
//   }

//   const handleMerchantDelete = (id) => {
//     fetch(baseUrl + id, {
//       method: 'DELETE'
//     })
//       .then(fetchMerchants)
//   }

//   return ( // Because it was just returning everything under here?
//     <>
//       <NewMerchantForm 
//         onMerchantSubmit={handleMerchantSubmit}
//       />
//       <merchList 
//         merchants={merchants} 
//         onMerchantDelete={handleMerchantDelete}
//       />
//      {/* <BiscuitsContainer baseUrl="http://localhost:9000/api/biscuits/"/> */}
    
//     </>
//   )
// } 
// export default MerchContainer;