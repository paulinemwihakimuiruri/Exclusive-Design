import Image from 'next/image';
import React from 'react'

const Customer = () => {
  return (
    <section className="max-w-7xl  mx-auto w-full flex flex-col items-center gap-6 py-10">
      <div className='flex gap-10 items-center'>
        <div className='items-center flex flex-col'>
            <Image src="/Delivery.png" alt='Delivery Service' width={80} height={80} />
            <div className='flex flex-col'>
             <h1 className='text-xl font-bold'>FREE AND FAST DELIVERY</h1> 
             <p>Free delivery for all orders over $140</p>  
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <Image src="/Service.png" alt='Delivery Service' width={80} height={80} />
            <div className='flex flex-col'>
             <h1 className='text-xl font-bold'>24/7 CUSTOMER SERVICE</h1> 
             <p>Friendly 24/7 customer support</p>  
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <Image src="/Guarantee.png" alt='Delivery Service' width={80} height={80} />
            <div className='flex flex-col'>
             <h1 className='text-xl font-bold'>MONEY BACK GUARANTEE</h1> 
             <p>We return money within 30 days</p>  
            </div>
        </div>
      </div>
    </section>
  )
}

export default Customer;
