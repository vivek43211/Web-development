import React from 'react'
import { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() => {
    //  fetch("https://api.github.com/users/vivek43211")
    //  .then(res => res.json())
    //  .then(data => {
    //     console.log(data);
    //     setdata(data);
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
     <div className="flex justify-center mt-4">
    <img src={data.avatar_url} alt="Git picture" width={300} />
  </div>
    </div>


  )
}

export default Github
 export const githubinfoloader = async ()=>{
    const  response = await fetch('https://api.github.com/users/vivek43211')
    return response.json();
 }