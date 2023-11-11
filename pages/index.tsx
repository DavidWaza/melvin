import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Navbar/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
   <Header />
    </main>
  )
}
