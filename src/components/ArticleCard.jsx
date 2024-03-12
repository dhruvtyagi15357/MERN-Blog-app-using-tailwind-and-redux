import React from 'react'
import images from '../constants/images'

const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ${className}`}>
      <img src={images.card} alt="" srcset="" className='w-full object-cover object-center h-auto'/>
      <div className="p-5">
        <h2 className=' font-roboto'>Hello there!</h2>
      </div>
    </div>
  );
}

export default ArticleCard