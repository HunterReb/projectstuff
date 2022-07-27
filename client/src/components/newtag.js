// import { useState } from 'react'

// const NewTagForm = ({ onTagSubmit }) => {

//   const [tag, setTag] = useState('')

//   const handleTagChange = (event) => {
//     setTag(event.target.value)
//   }

//   const resetForm = () => {
//     setTag('')
//   }

//   const handleFormSubmit = (event) => {
//     event.preventDefault()
//     const payload = {
//       tag,
//     }
//     onTagSubmit(payload)
//     resetForm()
//   }

// //   return (
// //     <form onSubmit={handleFormSubmit}>
// //       <label htmlFor="name">Tag:</label>
// //       <input type="text" name="name" value={tag} onChange={handleTagChange} />
// //       <input type="submit" value="Save" />
// //     </form>
// //   )
// // }

// // export default NewTagForm