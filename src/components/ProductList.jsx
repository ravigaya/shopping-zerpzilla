import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import  './card.css'
import { product_URL } from '../utils/constant'
import Shimmer from './Shimmer'
import { useProductInfo} from '../utils/useProductInfo'
import  ItemList  from './ItemList'
//import { ItemList } from './ItemList'

const ProductList = () => {
  const {category} = useParams();
  console.log('This product list of ',category);
   
  const[productlist,setProductlist] = useState([]);
   
   

  useEffect(()=>{
    fetchProductlist();
  },[])

  const fetchProductlist = async ()=>{
    const productListData =  await fetch(`https://fakestoreapi.com/products/category/${category}`)

    const json = await productListData.json();

    console.log(`This is ${category} json` ,json)
    setProductlist(json);
  }
  console.log(productlist)
  // productlist.map((x,i)=>{
  //   console.log(x.title)
  // })
  

//const productDetails = useProductInfo(id);

   //if(productDetails === '') return <Shimmer/>
  return (
    <>
    
        
      {/* </div> */}
      {console.log('product list000000000000000',productlist)}
      {productlist.map((element, index) => (
        <div key={index}>
          <ItemList productItem={element}/>
        </div>

      ))}
      
      {
        // productlist.map((x)=>{
        //   {console.Console.log('item in the list',x)}
        //   <li key={x.id}>
        //     <div>{x.price}</div>
        //     {/* <ItemList productItem={x}/> */}
        //   </li>
        // })
      }
      <h3>this is product {category}</h3>
    </>
    
     )
}

export default ProductList