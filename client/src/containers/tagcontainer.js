import { useEffect, useState } from 'react'
import NewTagForm from '../components/newtag'

const TagContainer = ({ baseUrl }) => {

    const [tags, setTags] = useState([])
  
    useEffect(() => {
      fetchTags()
    }, [])
  
    const fetchTags = () => {
      fetch(baseUrl)
        .then(response => response.json())
        .then(tags => setTags(tags));
    }
  
    const handleTagSubmit = newTag => {
      fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newTag),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(fetchTags)
    }
  
    const handleTagDelete = (id) => {
      fetch(baseUrl + id, { // is it a base URL problem?
        method: 'DELETE'
      })
        .then(fetchTags)
    }
  
    return (
      <>
        <NewTagForm 
          onTagSubmit={handleTagSubmit}
        />
        <tagList 
          tags={tags} 
          onTagDelete={handleTagDelete}
        />
      </>
    )
  } 
  export default TagContainer;