import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { id,roll } = router.query

    return <p>Post: {id} { roll}</p>
}

export default Post