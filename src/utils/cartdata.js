import { createContext } from "react";

const cartdata = createContext({
    cartval :1
})


export  default cartdata;

// import React, { createContext, useState } from "react";

// const cartdata = createContext({
//   cartval: 0,
//   setCartVal: () => {}
// });

// const CartDataProvider = ({ children }) => {
//   const [cartval, setCartVal] = useState(0);

//   return (
//     <cartdata.Provider value={{ cartval, setCartVal }}>
//       {children}
//     </cartdata.Provider>
//   );
// };

// export { cartdata, CartDataProvider };
