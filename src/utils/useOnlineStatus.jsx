import { useEffect, useState } from "react"



  export const useOnlineStatus = ()=>{
    
    const[onlinestatus,setOnlinestatus] = useState(true)
    useEffect(()=>{
        window.addEventListener('online',()=>{
                setOnlinestatus(true)
        })
        window.addEventListener('offline',()=>{
            setOnlinestatus(false)
         })
    },[])

    console.log('This is onlineStatus hook',onlinestatus)
    return onlinestatus
}

//export default useOnlineStatus