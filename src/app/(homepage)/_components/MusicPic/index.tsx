import Image from 'next/image';
import React from 'react'

const Experience = () => {
  return (
    <section className='max-w-7xl  mx-auto w-full flex flex-col items-center gap-6 py-5'>
        <div className='w-full'>
          <Image src="/Music.png" alt='Music pic' width={12100} height={500}/>
        </div>
    </section>
  )
}

export default Experience;
