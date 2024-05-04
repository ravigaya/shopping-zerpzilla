// import {IMG_URL} from './utils/constant'
// import {Itemcard,TopChoiceProduct} from "./Itemcard";
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus";
// import '../index.css'

// import {resObj }from "../utils/mockdata";
import {useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Heading from "./Heading";
import Categorycard from "./Categorycard";
import { Itemcard } from "./Itemcard";


export const Homepage =()=> {
  const[category,Setcategory] = useState([]);
//   const[filterButton,SetfilterButton] =useState('Pocket Friendly Options')
//   const[buttonflag,Setbuttonflag] = useState(true);
//   const[searchText,setSearchText] = useState('');
//   const[filteredData,setfilteredData] = useState([]);
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    
     const data = await fetch('https://fakestoreapi.com/products/categories');
     const json =  await data.json()
     Setcategory(json)
     console.log(json)
    }


  const handleClick = ()=>{
    // const data = rescard.filter(x =>x.price<10);
    // SetfilterButton ( buttonflag ? 'Normal Options' : 'Pocket Friendly Options');
    // setfilteredData(buttonflag?data:resObj);
    // Setbuttonflag(!buttonflag);   
 }
    return category.length === 0 ? <Shimmer/> : (
     <>

          <div style={{margin:'10px', }}>

          
           {category.map((x,i)=>
           
      <Link  to={`/products/${x}`} key={i}>         
         <Categorycard category={x} />
       </Link>  
        
        )}
      </div>
     </>
    )
  }

  export default Homepage;