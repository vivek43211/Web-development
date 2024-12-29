import React , {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Proflie() {
    const {user} = useContext(UserContext);
  if (!user) return <div>Please login</div>
  return <div>welcome  {user.Username}</div>
}

export default Proflie