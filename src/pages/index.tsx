import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Courses from '@/sections/Courses'
import Features from '@/sections/Features';
import Works from '@/sections/Works'
import Testimonial from '@/sections/Testimonial'
import Banner from '@/sections/Banner'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Courses/>
    <Features/>
    <Works/>
    <Testimonial/>
    <Banner/>
    <Footer/>
   </div>
  )
}
