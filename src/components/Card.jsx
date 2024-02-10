import React from 'react'

const Card = ({
    image,
    title,
    shortContent,
}) => {
  return (
    <div className='flex flex-col  group'>
        <img className='w-[314px] h-[178px] object-cover' src={image} alt="Image" />
        <div className='bg-[#000] p-[12px]'>
            <p className='text-white'>{title}</p>
        </div>
    </div>
  )
}

export default Card