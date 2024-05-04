import { Heading } from './components/Heading'
import  {Body} from './components/Body'
import Shimmer from './components/Shimmer';
import {
  Outlet
} from "react-router-dom";
import './index.css';


function App() {
  
  return (
   <>
    <Heading />
    <Outlet/>    
   </>
  )
}

export default App
