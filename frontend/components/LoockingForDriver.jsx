import React from 'react'

const LoockingForDriver = (props) => {
  return (
    <div
      ref={props.vehicalFoundRef}
      className="fixed bottom-0 left-0 z-30 w-full translate-y-full rounded-t-4xl bg-white px-5 pb-7 pt-5 shadow-[0_-10px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:pb-8 md:px-10"
    >
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-neutral-500">
              Please wait
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Looking for a driver
            </h3>
          </div>

          {/* Loading indicator */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-black" />
          </div>
        </div>

        {/* Vehicle */}
        <div className="mb-5 flex items-center justify-center rounded-2xl bg-neutral-100 py-4">
          <img
            className="h-40 w-full object-contain sm:h-48"
            src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"
            alt="UberGo vehicle"
          />
        </div>

        {/* Searching message */}
        <div className="mb-4 rounded-2xl bg-neutral-50 px-4 py-3 text-center">
          <p className="text-sm font-medium text-neutral-700">
            Finding the nearest available driver...
          </p>

          <div className="mt-3 flex justify-center gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black" />
          </div>
        </div>

        {/* Trip information */}
        <div className="w-full rounded-2xl border border-neutral-200 bg-white">

          {/* Pickup */}
          <div className="flex items-center gap-4 border-b border-neutral-200 px-4 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
              <i className="ri-map-pin-fill text-xl text-black"></i>
            </div>

            <div className="min-w-0">
              <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-neutral-400">
                Pickup
              </p>

              <h3 className="text-base font-semibold text-black sm:text-lg">
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
              <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-neutral-400">
                Destination
              </p>

              <h3 className="text-base font-semibold text-black sm:text-lg">
                562/11-A
              </h3>

              <p className="truncate text-sm text-neutral-500">
                Kankariya talab, Bhopal
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="flex items-center gap-4 px-4 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
              <i className="ri-money-rupee-circle-fill text-xl text-black"></i>
            </div>

            <div>
              <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-neutral-400">
                Payment
              </p>

              <h3 className="text-base font-bold text-black sm:text-lg">
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

export default LoockingForDriver