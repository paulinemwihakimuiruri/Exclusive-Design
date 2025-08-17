import React from 'react'
interface ButtonProps{
    text: string

}

const Button = ({text}: ButtonProps) => {
  return (
    <button className='bg-red-600 text-white py-4 px-10 rounded-sm'>
      {text}
    </button>
  )
}

export default Button;
