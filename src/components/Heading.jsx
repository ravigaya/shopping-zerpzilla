import { useState,useContext } from 'react'
// import {resObj} from '../utils/mockdata';
import { Link } from 'react-router-dom';
import {useOnlineStatus} from '../utils/useOnlineStatus';
import { BRAND_LOGO } from '../utils/constant';
import cartdata from '../utils/cartdata';
import { useSelector } from 'react-redux';


export const Heading = ()=>{ 

   const{cartval} = useContext(cartdata)
   console.log('cartcount',cartval);
   const status = useOnlineStatus();

  //---Subscribe to store using useSelector hook----  
  const cartItems = useSelector((store)=> store.cart.items)

    console.log("cartItem",cartItems)
    console.log('Status',status)
    return (
      <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
       <div >
          <img className="img-fluid" style={{ width: 'auto', height: '50px' }} src = {BRAND_LOGO}/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               <Link className="nav-link active" aria-current="page"  to ='/'>Home</Link>
            </li>
            <li className="nav-item">
                {/* <Link className="nav-link" to ='/travel'></Link> */}

                <Link className="nav-link" to ='/Myprofile'>My Profile</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link border-solid" to ='/cart'>Cart-({cartItems.length}){cartval}</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link " to ='/inventry'>Inventry</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
      </>
     )
    
  }


   export default Heading;
