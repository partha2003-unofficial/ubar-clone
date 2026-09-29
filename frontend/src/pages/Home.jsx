import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../../components/LocationSearchPanel'

const Home = () => {

  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehicalPanelOpen, setVehicalPanelOpen] = useState(false)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicalPanalRef = useRef(null);

  const submitHandle = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '70%', opacity: 1 })
      gsap.to(panelCloseRef.current, { opacity: 1 })
    }
    else {
      gsap.to(panelRef.current, { height: '0%', opacity: 0 })
      gsap.to(panelCloseRef.current, { opacity: 0 })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehicalPanelOpen) {
      gsap.to(vehicalPanalRef.current, { transform: 'translateY(0)' })
    }
    else {
      gsap.to(vehicalPanalRef.current, { transform: 'translateY(100%)' })
    }
  }, [vehicalPanelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://pngimg.com/uploads/uber/uber_PNG30.png" alt="" />

      <div className='h-screen w-screen'>
        {/* image for tempurary image  */}
        <img className='h-full w-full object-cover' src="https://preview.redd.it/ubers-car-animations-look-3d-but-its-actually-a-smart-v0-xer1e5ww0wcf1.jpeg?auto=webp&s=b85125fb5b9abe3b6e8fa38c0d4e424ffe9d842d" alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>

        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => { setPanelOpen(false) }}
            className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>

          <form onSubmit={(e) => { submitHandle(e) }}>
            <div className='line absolute h-16 w-1  bg-gray-600 rounded-4xl top-[45%] left-10'></div>

            <input
              value={pickUp}
              onClick={() => { setPanelOpen(true) }}
              onChange={(e) => { setPickUp(e.target.value) }}
              className='bg-[#eee] px-12 py-2 text-base rounded-4xl w-full mt-5'
              type="text"
              placeholder='add a pick-up location ' />

            <input
              value={destination}
              onClick={() => { setPanelOpen(true) }}
              onChange={(e) => { setDestination(e.target.value) }}
              className='bg-[#eee] px-12 py-2 text-base rounded-4xl w-full mt-3'
              type="text"
              placeholder='Enter your distination' />

          </form>

        </div>

        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel  setVahicalePanal={setVehicalPanelOpen} />
        </div>

      </div>

      <div ref={vehicalPanalRef} className='fixed w-full z-10 bottom-0 px-3 py-3 bg-white p-8 translate-y-full'>

        <h5
          onClick={() => { setVehicalPanelOpen(false) }}
          className='text-center absolute w-[90%] h-full top-0'>
          <i className=" text-4xl ri-arrow-down-wide-fill"></i>
        </h5>

        <div className='text-2xl font-semibold'>Choose a vehical</div>

        <div className='flex w-full items-center justify-between p-3 border-2 mb-2 active:border-black rounded-2xl'>
          <img className='h-22' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="" />
          <div className='ml-9 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>$2.2</h2>
        </div>

        <div className='flex w-full items-center justify-between  p-3 border-2 mb-2 active:border-black rounded-2xl'>
          <img className='h-18' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>$0.7</h2>
        </div>

        <div className='flex w-full items-center justify-between p-3 border-2 mb-2 active:border-black rounded-2xl'>
          <img className='h-22' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80ZTcxOGQ1Yy1lNDMxLTU5YzUtYWNiNS1hYzQwYzI2YzI0ZGYud2VicA==" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>5</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>$0.5</h2>
        </div>

      </div>

    </div>
  )
}

export default Home
