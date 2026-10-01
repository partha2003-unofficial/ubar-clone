import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div
      ref={props.confirmRidePanalRef}
      className="fixed bottom-0 left-0 z-30 w-full translate-y-full rounded-t-4xl bg-white px-5 pb-7 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:pb-8 md:px-10"
    >
      <div className="mx-auto max-w-2xl">

        {/* Close / collapse */}
        <h5
          onClick={() => {
            props.setConfirmRidePanalOpen(false)
          }}
          className="mb-3 flex w-full cursor-pointer justify-center text-neutral-400 transition-colors hover:text-black"
        >
          <i className="ri-arrow-down-wide-fill text-3xl"></i>
        </h5>

        {/* Heading */}
        <div className="mb-5">
          <p className="mb-1 text-sm font-medium text-neutral-500">
            Almost there
          </p>

          <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Confirm your ride
          </h3>
        </div>

        {/* Vehicle */}
        <div className="mb-5 flex items-center justify-between rounded-2xl bg-neutral-100 px-5 py-4">
          <div>
            <p className="text-sm font-medium text-neutral-500">
              Your vehicle
            </p>

            <h4 className="mt-1 text-lg font-bold text-black">
              UberGo
            </h4>

            <p className="text-sm text-neutral-500">
              4 seats • 2 mins away
            </p>
          </div>

          <img
            className="h-28 w-36 object-contain sm:h-32 sm:w-40"
            src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"
            alt="UberGo vehicle"
          />
        </div>

        {/* Trip details */}
        <div className="mb-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white">

          {/* Pickup */}
          <div className="flex items-center gap-4 border-b border-neutral-200 px-4 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
              <i className="ri-map-pin-fill text-xl text-black"></i>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                Pickup
              </p>

              <h3 className="mt-1 text-base font-semibold text-black sm:text-lg">
                562/11-A
              </h3>

              <p className="truncate text-sm text-neutral-500">
                Kankariya talab, Bhopal
              </p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-center gap-4 border-b border-neutral-200 px-4 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
              <i className="ri-map-pin-user-line text-xl text-black"></i>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                Destination
              </p>

              <h3 className="mt-1 text-base font-semibold text-black sm:text-lg">
                562/11-A
              </h3>

              <p className="truncate text-sm text-neutral-500">
                Kankariya talab, Bhopal
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                <i className="ri-money-rupee-circle-fill text-xl text-black"></i>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                  Payment
                </p>

                <p className="mt-1 text-sm font-medium text-neutral-700">
                  Cash payment
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-black">
              $2.3
            </h3>
          </div>

        </div>

        {/* Confirm button */}
        <button
          onClick={() => {
            props.setVehicalFound(true)
            props.setConfirmRidePanalOpen(false)
          }}
          className="flex w-full items-center justify-center rounded-2xl bg-black px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl active:scale-[0.98] sm:py-5 sm:text-lg"
        >
          Confirm ride
        </button>

        {/* Small note */}
        <p className="mt-3 text-center text-xs text-neutral-400">
          You can cancel your ride before the driver arrives.
        </p>

      </div>
    </div>
  )
}

export default ConfirmRide