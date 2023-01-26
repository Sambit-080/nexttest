"use client"
import { useState } from "react"
import Navbar from "../component/navbar"
export default function Home() {
    const [counter,setCounter]=useState(0)
    return (
        < div>
            <h1>this is contact page</h1>
            <h5>{counter}</h5>
            <button onClick={()=>setCounter(counter+1)}>inc</button>
        </ div>
    )
}