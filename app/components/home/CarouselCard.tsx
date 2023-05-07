import Image from 'next/image'
import React from 'react'
interface Props {
    item: {
        img:string,
        desc:string
    }
}
const CarouselCard: React.FC<Props> = ({ item }) => {
    
  return (
      <div className='w-screen bg-white'>
          <Image src={item.img} alt='hero-image' width={200} height={200} className='w-full h-60' />
          <span className='text-sm text-slate-400' p-10>{item.desc}</span>
    </div>
  )
}

export default CarouselCard