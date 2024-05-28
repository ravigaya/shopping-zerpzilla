import { Heading } from './components/Heading'
import  {Body} from './components/Body'
import Shimmer from './components/Shimmer';
import { useState } from 'react';
import  cartdata  from './utils/cartdata';
import {
  Outlet
} from "react-router-dom";
import './index.css';
import {Provider} from 'react-redux';
import {appStore} from './utils/appStore';



function App() {
  const [cartCount, setCartCount] = useState(0);
  
  return (
   <>
 <Provider store={appStore}>
<cartdata.Provider value={{ cartCount, setCartCount }}>
      <Heading/>
       <Outlet/> 
    </cartdata.Provider>
    {/* <Heading />
    <Outlet/>     */}
</Provider>
   </>
  )
}

export default App
