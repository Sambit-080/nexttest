import './globals.css'
import { Poppins } from '@next/font/google'
import Navbar from './component/navbar'
const pop = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <head />
      <body className={`${pop.className}`}>
        <Navbar />
        {children}</body>
    </html>
  )
}
