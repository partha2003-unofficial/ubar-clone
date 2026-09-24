import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen w-full pt-8 flex flex-col justify-between bg-cover bg-center bg-no-repeat bg-[url(https://wallpapershome.com/images/pages/pic_h/26408.jpg)]'>
      <img
        className='w-16 ml-8 md:w-20 md:ml-12 md:mt-4' 
        src='https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/3840px-Uber_logo_2018.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail'
        alt='Uber'
      />

      {/* Mobile: full-width bottom sheet. Desktop: floating card, bottom-left. */}
      <div className='bg-white py-4 px-4 pb-7 md:self-start md:w-full md:max-w-md md:ml-12 md:mb-12 md:p-10 md:rounded-3xl md:shadow-2xl'>
        <h2 className='text-3xl font-bold md:text-5xl md:tracking-tight md:leading-[1.05]'>
          Get Started with Uber
        </h2>
        <Link
          to='/login'
          className='flex items-center justify-center w-full bg-black text-white py-3 rounded-2xl mt-5 md:mt-8 md:text-lg md:font-medium hover:bg-neutral-800 transition'
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Home
