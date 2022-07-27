import React, {useEffect, useState} from 'react'; //CHANGED
import MerchContainer from './containers/transcontainer';
import TransContainer from './containers/transcontainer'; 
import TagContainer from './containers/transcontainer'; 

function App() {
  return (
    <MerchContainer baseUrl="http://localhost:9000/api/merchants/"/>,
    <TransContainer baseUrl="http://localhost:9000/api/transactions/"/>,
    <TagContainer baseUrl="http://localhost:9000/api/tags/"/>
  ); 
}

export default App;
