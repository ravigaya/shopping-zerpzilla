import { Heading } from './components/Heading'
import  {Body} from './components/Body'
import Shimmer from './components/Shimmer';
import { useState } from 'react';
import  cartdata  from './utils/cartdata';
import {
  Outlet
} from "react-router-dom";
import './index.css';


function App() {
  const [cartCount, setCartCount] = useState(0);
  
  return (
   <>

<cartdata.Provider value={{ cartCount, setCartCount }}>
      <Heading/>
       <Outlet/> 
    </cartdata.Provider>
    {/* <Heading />
    <Outlet/>     */}
   </>
  )
}

export default App
