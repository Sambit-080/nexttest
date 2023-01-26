

import { useRouter } from 'next/router'
import { useState } from 'react'

const Post = () => {
  const [post,setPost]=useState({})
  const router = useRouter()
  const { id } = router.query
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => setPost(json))
  return <p>Post: {JSON.stringify(post)}</p>
}

export default Post