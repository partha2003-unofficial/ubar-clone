import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#f7f7f7]">

            {/* Home button */}
            <Link
                to={'/home'}
                className="fixed right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-neutral-100 active:scale-95 sm:right-6 sm:top-6"
            >
                <i className="ri-home-6-line text-2xl font-medium text-black"></i>
            </Link>

            {/* Ride / Map area */}
            <div className="relative h-[52%] w-full overflow-hidden">

                <img
                    className="h-full w-full object-cover"
                    src="https://preview.redd.it/ubers-car-animations-look-3d-but-its-actually-a-smart-v0-xer1e5ww0wcf1.jpeg?auto=webp&s=b85125fb5b9abe3b6e8fa38c0d4e424ffe9d842d"
                    alt="Uber ride"
                />

                {/* Map overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10" />

                {/* Ride status */}
                <div className="absolute bottom-5 left-4 rounded-full bg-white px-4 py-2 shadow-lg sm:bottom-6 sm:left-6">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500"></span>

                        <span className="text-sm font-semibold text-black">
                            Ride in progress
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom ride panel */}
            <div className="absolute bottom-0 left-0 h-[48%] w-full overflow-y-auto rounded-t-4xl bg-white px-5 pb-6 pt-5 shadow-[0_-10px_40px_rgba(0,0,0,0.18)] sm:px-8 md:px-12">

                <div className="mx-auto max-w-2xl">

                    {/* Driver + vehicle */}
                    <div className="mb-4 flex items-center justify-between border-b border-neutral-200 pb-4">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
                                <i className="ri-user-fill text-xl text-black"></i>
                            </div>

                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                                    Your driver
                                </p>

                                <h2 className="text-lg font-bold text-black">
                                    Partha
                                </h2>
                            </div>

                        </div>

                        <div className="text-right">
                            <h4 className="text-lg font-bold tracking-wide text-black">
                                WB ekd 654
                            </h4>

                            <p className="text-sm text-neutral-500">
                                Maruti Suzuki Aulto
                            </p>
                        </div>
                    </div>

                    {/* Vehicle */}
                    <div className="mb-4 flex items-center justify-center rounded-2xl bg-neutral-100 py-2">
                        <img
                            className="h-24 w-36 object-contain sm:h-28 sm:w-40"
                            src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"
                            alt="car image"
                        />
                    </div>

                    {/* Destination */}
                    <div className="mb-2 flex items-center gap-4 rounded-2xl border border-neutral-200 p-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                            <i className="ri-map-pin-user-line text-xl text-black"></i>
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                                Destination
                            </p>

                            <h3 className="mt-1 text-base font-semibold text-black">
                                562/11-A
                            </h3>

                            <p className="truncate text-sm text-neutral-500">
                                Kankariya talab, Bhopal
                            </p>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="mb-4 flex items-center justify-between rounded-2xl border border-neutral-200 p-4">

                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
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

                    {/* Payment button */}
                    <button className="w-full rounded-2xl bg-black px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98] sm:py-5 sm:text-lg">
                        Make a Payment
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Riding
