import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://wallpapershome.com/images/pages/pic_h/26408.jpg')]">

      {/* Background overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/75" />

      {/* Uber Logo */}
      <img
        className="relative z-10 ml-6 mt-6 w-20 brightness-0 invert transition-transform duration-300 hover:scale-105 sm:ml-10 sm:mt-8 sm:w-24 md:ml-14 md:mt-10 md:w-28"
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/3840px-Uber_logo_2018.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
        alt="Uber"
      />

      {/* Bottom content card */}
      <div className="relative z-10 w-full rounded-t-4xl border border-white/20 bg-white px-6 pb-8 pt-5 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] sm:px-10 sm:pb-10 sm:pt-8 md:mb-12 md:ml-12 md:w-[min(90%,440px)] md:rounded-3xl md:px-10 md:py-10 lg:ml-20 lg:w-115 lg:p-12">

        {/* Mobile handle */}
        <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-neutral-300 md:hidden" />

        {/* Heading */}
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-black sm:text-4xl md:text-5xl">
          Get Started
          <br />
          with Uber
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7 md:mt-5">
          Your journey starts here. Move freely, safely, and conveniently
          wherever you need to go.
        </p>

        {/* Continue button */}
        <Link
          to="/login"
          className="mt-7 flex w-full items-center justify-center rounded-2xl bg-black px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl active:translate-y-0 active:scale-[0.98] sm:mt-9 sm:py-5 sm:text-lg"
        >
          Continue
        </Link>

        {/* Terms */}
        <p className="mt-5 text-center text-xs leading-5 text-neutral-500 sm:text-sm">
          By continuing, you agree to Uber's Terms & Conditions.
        </p>
      </div>
    </div>
  )
}

export default Start