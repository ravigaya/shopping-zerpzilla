// import {IMG_URL} from './utils/constant'
import {Itemcard,TopChoiceProduct} from "./Itemcard";
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus";
// import '../index.css'

import {resObj }from "../utils/mockdata";
import {useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Heading from "./Heading";


export const Body =()=> {
  const[rescard,Setrescard] = useState([]);
  const[filterButton,SetfilterButton] =useState('Pocket Friendly Options')
  const[buttonflag,Setbuttonflag] = useState(true);
  const[searchText,setSearchText] = useState('');
  const[filteredData,setfilteredData] = useState([]);
  
   const status = useOnlineStatus();
   console.log('status',status);
  useEffect(()=>{
    fetchData()
  },[])
  
  // useEffect(()=>{
  //   console.log('Its useeffect called')
    
  // },[filteredData])

  const fetchData = async()=>{
     const data = await fetch('https://fakestoreapi.com/products');
     const json =  await data.json()
      Setrescard(json)
      setfilteredData(json)
      console.log(json)
    }


  const handleClick = ()=>{
    const data = rescard.filter(x =>x.price<10);
    SetfilterButton ( buttonflag ? 'Normal Options' : 'Pocket Friendly Options');
    setfilteredData(buttonflag?data:resObj);
    Setbuttonflag(!buttonflag);   
 }

 const handleClickSearchText = ()=>{
     console.log("searchtext Clicked",searchText)
     const filteredCardSearchText = rescard.filter((text)=>
         text.title.toLowerCase().includes(searchText.toLowerCase())
     )
      setfilteredData(filteredCardSearchText);
     console.log('filteredCardSearchText',filteredCardSearchText);
 }

 const handleChange = (e)=> {
 // console.log("Entered Item",e.target.value)
 // console.log(rescard.includes(e.target.value))
  setSearchText(e.target.value)
 
}
    if(status === false) return (
    <h2> You are offline!!! Please connect to Internet </h2>
  )
    return rescard.length === 0 ? <Shimmer/> : (
     <>
     
     <div>

     <div  className=" px-3 mt-3 d-flex justify-content-around">

           <button  onClick={()=>{handleClick()}}>{filterButton}</button>
      
          <form className="d-flex" role="search">
          <input className="form-control me-2" style={{ maxWidth: '200px' }} type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
    </div>

     </div>
     <div className=' body '>

      {filteredData.map((x,i)=>
      <Link  to={`/product/${x.id}`} key={x.id}>         
        { x.price > 50 ?<TopChoice title={x.title}  image={x.image} price={x.price} description = {x.description.substring(0, 30)} /> :
      <Itemcard title={x.title}  image={x.image} price={x.price} description = {x.description.substring(0, 30)}/> }
      </Link>  

        )}
     </div>  
     </>
    )
  }

  export default Body;