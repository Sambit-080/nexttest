"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function Home() {
    const [counter, setCounter] = useState(0)
    const [post,setPost]=useState([])
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json =>setPost(json) )
    useEffect(() => {
    },[])
    return (
        < div>
            <h1>this is address page</h1>
            <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>inc</button>
            {post && post.map(function(p){
                return(
                    // <h1>{ p.title}</h1>
                    <Link href={`/post/${p.id}`} style={{margin:"10px"}}>{p.title}</Link>
                )
            })}
        </ div>
    )
}