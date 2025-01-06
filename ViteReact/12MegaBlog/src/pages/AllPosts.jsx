import React , {useEffect , useState} from 'react'
import { Container , PostCard } from '../compoments'
import appwriteService from "../appwrite/config";


function AllPosts() {
    const  [ posts  , setposts]  = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((post)=>{
        if (post) {
            setposts(post.documents)
        }
    })
  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
        </Container>
</div>
  )
}

export default AllPosts