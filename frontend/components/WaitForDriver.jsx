import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div
      ref={props.watingForDriverRef}
      className="fixed bottom-0 left-0 z-50 w-full rounded-t-4xl bg-white px-5 pb-6 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:pb-8 md:px-10 md:pt-4"
    >
      <div className="mx-auto max-w-2xl">

        {/* Close / Collapse button */}
        <h5
          onClick={() => {
            props.setWatingForDriver(false)
          }}
          className="mb-2 flex w-full cursor-pointer justify-center text-neutral-400 transition-colors hover:text-black"
        >
          <i className="ri-arrow-down-wide-fill text-3xl"></i>
        </h5>

        {/* Driver + Car information */}
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5">

          {/* Car */}
          <div className="flex items-center justify-center rounded-2xl bg-neutral-100 p-2">
            <img
              className="h-24 w-32 object-contain sm:h-28 sm:w-36"
              src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"
              alt="car image"
            />
          </div>

          {/* Driver */}
          <div className="text-right">
            <p className="mb-1 text-sm font-medium text-neutral-500">
              Your driver
            </p>

            <h2 className="text-lg font-semibold text-black sm:text-xl">
              Partha
            </h2>

            <h4 className="mt-1 text-xl font-bold tracking-wide text-black sm:text-2xl">
              WB ekd 654
            </h4>

            <p className="mt-1 text-sm text-neutral-500">
              Maruti Suzuki Aulto
            </p>
          </div>
        </div>

        {/* Trip information */}
        <div className="mt-2 w-full">

          {/* Pickup */}
          <div className="flex items-center gap-4 border-b border-neutral-200 px-2 py-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
              <i className="ri-map-pin-fill text-xl text-black"></i>
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-semibold text-black sm:text-lg">
                562/11-A
              </h3>

              <p className="truncate text-sm text-neutral-500">
                Kankariya talab, Bhopal
              </p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-center gap-4 border-b border-neutral-200 px-2 py-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
              <i className="ri-map-pin-user-line text-xl text-black"></i>
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-semibold text-black sm:text-lg">
                562/11-A
              </h3>

              <p className="truncate text-sm text-neutral-500">
                Kankariya talab, Bhopal
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="flex items-center gap-4 px-2 py-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
              <i className="ri-money-rupee-circle-fill text-xl text-black"></i>
            </div>

            <div>
              <h3 className="text-base font-semibold text-black sm:text-lg">
                $2.3
              </h3>

              <p className="text-sm text-neutral-500">
                Cash payment
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WaitForDriver