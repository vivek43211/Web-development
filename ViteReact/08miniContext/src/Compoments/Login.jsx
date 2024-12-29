import React ,{ useState , useContext} from 'react'
import UserContext from '../Context/UserContext.js'

function Login() {

    const [Username,setUsername] = useState('')
    const [Password , setpassword] = useState('')

    const {setuser} = useContext(UserContext); 
    const handlesubmit = (e)=>{
         e.preventDefault()
         setuser({Username, Password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={Username}
        onChange={(e) =>{
          setUsername(e.target.value)
        }}
        placeholder = "username"
  />
    {" "}
        <input type="text"
         value={Password}
         onChange={(e) =>{
           setpassword(e.target.value)
         }}
          placeholder="Passwords"  />
        <button onClick={handlesubmit}>Submit</button>

    </div>
      )
}

export default Login