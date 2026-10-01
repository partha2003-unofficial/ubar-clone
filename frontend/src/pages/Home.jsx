import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../../components/LocationSearchPanel'
import VehicalPanal from '../../components/VehicalPanal'
import ConfirmRide from '../../components/ConfirmRide'
import LoockingForDriver from '../../components/LoockingForDriver'
import WaitForDriver from '../../components/WaitForDriver'

const Home = () => {

  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehicalPanelOpen, setVehicalPanelOpen] = useState(false)
  const [confirmRidePanalOpen, setConfirmRidePanalOpen] = useState(false);
  const [vehicalFound, setVehicalFound] = useState(false)
  const [waitingForDriver, setWatingForDriver] = useState(false)

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicalPanalRef = useRef(null);
  const confirmRidePanalRef = useRef(null);
  const vehicalFoundRef = useRef(null);
  const watingForDriverRef = useRef(null);

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

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(watingForDriverRef.current, { transform: 'translateY(0)' })
    }
    else {
      gsap.to(watingForDriverRef.current, { transform: 'translateY(100%)' })
    }
  }, [waitingForDriver])


  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#f7f7f7]">

      {/* Background / Map */}
      <div className="absolute inset-0 h-full w-full">
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/ubers-car-animations-look-3d-but-its-actually-a-smart-v0-xer1e5ww0wcf1.jpeg?auto=webp&s=b85125fb5b9abe3b6e8fa38c0d4e424ffe9d842d"
          alt="Uber map"
        />

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Uber logo */}
      <img
        className="absolute left-5 top-5 z-20 w-20 brightness-0 invert drop-shadow-lg sm:left-7 sm:top-7 sm:w-24"
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/3840px-Uber_logo_2018.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
        alt="Uber"
      />

      {/* Main booking section */}
      <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col justify-end">

        {/* Search card */}
        <div className="relative rounded-t-4xl bg-white px-5 pb-6 pt-6 shadow-[0_-10px_40px_rgba(0,0,0,0.18)] sm:px-8 sm:pb-8 md:ml-6 md:mb-6 md:w-120 md:rounded-3xl md:px-8 md:shadow-2xl lg:ml-10">

          {/* Close search panel */}
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className="absolute right-6 top-5 cursor-pointer text-2xl text-neutral-500 opacity-0 transition-colors hover:text-black"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          {/* Heading */}
          <div className="mb-5">
            <p className="mb-1 text-sm font-medium text-neutral-500">
              Travel with ease
            </p>

            <h4 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Find a trip
            </h4>
          </div>

          {/* Search form */}
          <form
            onSubmit={(e) => {
              submitHandle(e)
            }}
            className="relative"
          >

            {/* Connecting line */}
            <div className="absolute left-4.75 top-6.5 h-18 w-0.5 rounded-full bg-neutral-300" />

            {/* Pickup */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-black">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <input
                value={pickUp}
                onClick={() => {
                  setPanelOpen(true)
                }}
                onChange={(e) => {
                  setPickUp(e.target.value)
                }}
                className="w-full rounded-2xl border border-neutral-200 bg-[#f5f5f5] py-4 pl-11 pr-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-neutral-500 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 sm:text-base"
                type="text"
                placeholder="Add a pickup location"
              />
            </div>

            {/* Destination */}
            <div className="relative mt-3">
              <div className="absolute left-3 top-1/2 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-black">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <input
                value={destination}
                onClick={() => {
                  setPanelOpen(true)
                }}
                onChange={(e) => {
                  setDestination(e.target.value)
                }}
                className="w-full rounded-2xl border border-neutral-200 bg-[#f5f5f5] py-4 pl-11 pr-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-neutral-500 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 sm:text-base"
                type="text"
                placeholder="Enter your destination"
              />
            </div>

          </form>

        </div>

        {/* Location search results */}
        <div
          ref={panelRef}
          className="h-0 overflow-hidden bg-white opacity-0"
        >
          <LocationSearchPanel
            setVahicalePanal={setVehicalPanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>

      </div>

      {/* Vehicle selection */}
      <VehicalPanal
        setVehicalPanelOpen={setVehicalPanelOpen}
        vehicalPanalRef={vehicalPanalRef}
        setConfirmRidePanalOpen={setConfirmRidePanalOpen}
      />

      {/* Confirm ride */}
      <ConfirmRide
        setConfirmRidePanalOpen={setConfirmRidePanalOpen}
        confirmRidePanalRef={confirmRidePanalRef}
        setVehicalFound={setVehicalFound}
      />

      {/* Looking for driver */}
      <LoockingForDriver
        vehicalFoundRef={vehicalFoundRef}
      />

      {/* Driver found / waiting */}
      <WaitForDriver
        watingForDriverRef={watingForDriverRef}
        setWatingForDriver={setWatingForDriver}
      />

    </div>
  )
}

export default Home