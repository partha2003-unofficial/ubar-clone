import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../../components/LocationSearchPanel'
import VehicalPanal from '../../components/VehicalPanal'
import ConfirmRide from '../../components/ConfirmRide'
import LoockingForDriver from '../../components/LoockingForDriver'

const Home = () => {

  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehicalPanelOpen, setVehicalPanelOpen] = useState(false)
  const [confirmRidePanalOpen, setConfirmRidePanalOpen] = useState(false);
  const [vehicalFound, setVehicalFound] = useState(false)

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicalPanalRef = useRef(null);
  const confirmRidePanalRef = useRef(null);
  const vehicalFoundRef = useRef(null);

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

  useGSAP(function () {
    if (confirmRidePanalOpen) {
      gsap.to(confirmRidePanalRef.current, { transform: 'translateY(0)' })
    }
    else {
      gsap.to(confirmRidePanalRef.current, { transform: 'translateY(100%)' })
    }
  }, [confirmRidePanalOpen])

  useGSAP(function () {
    if (vehicalFound) {
      gsap.to(vehicalFoundRef.current, { transform: 'translateY(0)' })
    }
    else {
      gsap.to(vehicalFoundRef.current, { transform: 'translateY(100%)' })
    }
  }, [vehicalFound])

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
          <LocationSearchPanel setVahicalePanal={setVehicalPanelOpen} setPanelOpen={setPanelOpen} />
        </div>

      </div>

      <VehicalPanal
        setVehicalPanelOpen={setVehicalPanelOpen}
        vehicalPanalRef={vehicalPanalRef}
        setConfirmRidePanalOpen={setConfirmRidePanalOpen}
      />

      <ConfirmRide
        setConfirmRidePanalOpen={setConfirmRidePanalOpen}
        confirmRidePanalRef={confirmRidePanalRef}
        setVehicalFound={setVehicalFound}
      />

      <LoockingForDriver
        vehicalFoundRef={vehicalFoundRef}
      />
    </div>
  )
}

export default Home
