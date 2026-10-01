import React from 'react'

const LocationSearchPanel = (props) => {

  const addressData = [
    'Dhamtouri, simulia, tamluk, purbaMedinipur 721649',
    'bohichberia highschool , bohichberia, nandakumar, 721648',
    'simulia, mirikpur, purbamedinipur, 721648'
  ]

  return (
    <div className="w-full px-4 pb-4 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">

        {/* Search results heading */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold tracking-tight text-black sm:text-xl">
            Recent locations
          </h3>

          <span className="text-xs font-medium text-neutral-400">
            {addressData.length} places
          </span>
        </div>

        {/* Location list */}
        <div className="flex flex-col gap-2">

          {addressData.map((data, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  props.setVahicalePanal(true)
                  props.setPanelOpen(false)
                }}
                className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-3 transition-all duration-200 hover:border-black hover:bg-neutral-50 hover:shadow-sm active:scale-[0.99] sm:p-4"
              >

                {/* Location icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 transition-colors duration-200 group-hover:bg-black">
                  <i className="ri-map-pin-fill text-xl text-black transition-colors duration-200 group-hover:text-white"></i>
                </div>

                {/* Address */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-5 text-black sm:text-base">
                    {data}
                  </p>

                  <p className="mt-1 text-xs text-neutral-400">
                    Tap to select this location
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-black">
                  <i className="ri-arrow-right-line text-lg"></i>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default LocationSearchPanel