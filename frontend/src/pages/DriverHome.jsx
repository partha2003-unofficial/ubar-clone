import React from 'react'
import { Link } from 'react-router-dom'

const DriverHome = () => {
  return (
    <div className='w-full'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://pngimg.com/uploads/uber/uber_PNG30.png" alt="uber logo" />
        <Link to={'/driver-login'} className=' right-2 top-2 fixed h-10 w-10 bg-white flex items-center justify-center rounded-4xl'>
          <i className="text-3xl font-medium ri-logout-box-line"></i>
        </Link>
      </div>

      <div className=' h-110 w-screen'>
        <img className=' h-full w-full object-cover' src="https://preview.redd.it/ubers-car-animations-look-3d-but-its-actually-a-smart-v0-xer1e5ww0wcf1.jpeg?auto=webp&s=b85125fb5b9abe3b6e8fa38c0d4e424ffe9d842d" alt="" />
      </div>

      <div className='h-1/2 p-4 mt-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-4'>
            <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DbgSQyqujLO53YcU6Pc9HZPxj6PVfA1vaHoFyp4OIw&s" alt="driver" />
            <h4 className='text-lg'>harsh patel</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹295.3</h4>
            <p className='text-sm font-medium text-gray-600'>Earned</p>
          </div>
        </div>

        <div className='flex p-3 justify-center items-start bg-gray-200 rounded-4xl gap-5 mt-5'>
          <div className='text-center'>
            <i className="text-3xl font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl font-thin ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DriverHome
