import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-w-7xl mx-auto w-full flex items-center gap-6'>
        <div className='flex flex-col gap-4 max-w-2xs w-full text-xl pr-3 pt-10 border-r border-gray-300'>
            <div className='flex justify-between'>
                <p>Woman&apos;s Fashion</p>
                <ChevronRight />
            </div>
            <div className='flex justify-between'>
                <p>Men&apos;s Fashion</p>
                <ChevronRight />
            </div>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby&apos;s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
        </div>
        <div>
            <Image src="/Hero.png" alt='Hero Image' width={1120} height={800}/>
        </div>
      
    </section>
  )
}

export default Hero;
