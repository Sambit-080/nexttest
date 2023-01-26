import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <Link href="/" style={{margin:"20px"}}>Home</Link>
        <Link href="/contact" style={{margin:"20px"}}>contact</Link>
        <Link href="/address" style={{margin:"20px"}}>address</Link>
        </>
    )
}