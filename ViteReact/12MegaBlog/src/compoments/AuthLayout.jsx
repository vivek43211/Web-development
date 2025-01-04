import React , {useEffect , useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'




export default function Protected({children , authentication = true}) {

    const [loader ,setloader] = useState(true)
    const authstatus = useSelector((state)=>state.auth.status)
    const Navigate = useNavigate();

    useEffect(()=>{
        if ( authentication && authstatus !== authentication) {
            Navigate("/login")
            
        } else if (!authentication && authstatus !== authentication){
            Navigate("/")
            
        }
        setloader(false)
    },[Navigate , authentication, authstatus])



  return loader ? <h1>Loading...</h1> : <>{children}</>
}
