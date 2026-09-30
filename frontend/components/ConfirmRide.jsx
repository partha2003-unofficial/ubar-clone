import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div ref={props.confirmRidePanalRef} className='fixed w-full z-10 bottom-0 px-3 py-8 bg-white translate-y-full'>
      <div>
        <h5
          onClick={() => {
            props.setConfirmRidePanalOpen(false)
          }}
          className='w-full flex justify-center cursor-pointer'>
          <i className="text-3xl ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your ride</h3>

        <div className='flex gap-2 justify-between flex-col items-center'>
          <img className="h-50" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="car image" />

          <div className='w-full'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className="ri-map-pin-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm text-gray-600'>Kankariya talab,Bhopal</p>
              </div>
            </div>

            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className="ri-map-pin-user-line"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm text-gray-600'>Kankariya talab,Bhopal</p>
              </div>
            </div>

            <div className='flex items-center gap-5 p-3'>
              <i className="ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>$2.3</h3>
                <p className='text-sm text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>

          <button onClick={() => {
            props.setVehicalFound(true)
            props.setConfirmRidePanalOpen(false)
          }}
            className='w-full text-white bg-green-700 font-semibold p-2 rounded-2xl'>Confirm</button>
        </div>

      </div>
    </div>
  )
}

export default ConfirmRide

