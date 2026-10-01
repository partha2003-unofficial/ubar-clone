import React from 'react'

const vehicalPanal = (props) => {
    return (
        <div>
            <div
                ref={props.vehicalPanalRef}
                className="fixed bottom-0 left-0 z-20 w-full translate-y-full rounded-t-4xl bg-white px-5 pb-6 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.18)] sm:px-7 md:px-10"
            >

                {/* Close panel */}
                <h5
                    onClick={() => {
                        props.setVehicalPanelOpen(false)
                    }}
                    className="mb-3 flex w-full cursor-pointer justify-center text-neutral-400 transition-colors hover:text-black"
                >
                    <i className="ri-arrow-down-wide-fill text-3xl"></i>
                </h5>

                {/* Heading */}
                <div className="mb-5 text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    Choose a vehicle
                </div>

                {/* UberGo */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanalOpen(true)
                    }}
                    className="group mb-3 flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3 transition-all duration-200 hover:border-black hover:shadow-md active:scale-[0.99] sm:p-4"
                >
                    {/* Vehicle image */}
                    <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-neutral-100 sm:h-24 sm:w-32">
                        <img
                            className="h-20 w-full object-contain transition-transform duration-200 group-hover:scale-105 sm:h-24"
                            src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"
                            alt="UberGo"
                        />
                    </div>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                        <h4 className="flex items-center gap-1 text-base font-bold text-black sm:text-lg">
                            UberGo
                            <span className="flex items-center text-sm font-medium text-neutral-600">
                                <i className="ri-user-fill ml-1"></i>
                                4
                            </span>
                        </h4>

                        <h5 className="mt-1 text-sm font-semibold text-black">
                            2 mins away
                        </h5>

                        <p className="mt-1 text-xs leading-4 text-neutral-500 sm:text-sm">
                            Affordable, compact rides
                        </p>
                    </div>

                    {/* Price */}
                    <h2 className="shrink-0 text-xl font-bold text-black sm:text-2xl">
                        ₹256.5
                    </h2>
                </div>

                {/* Moto */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanalOpen(true)
                    }}
                    className="group mb-3 flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3 transition-all duration-200 hover:border-black hover:shadow-md active:scale-[0.99] sm:p-4"
                >
                    {/* Vehicle image */}
                    <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-neutral-100 sm:h-24 sm:w-32">
                        <img
                            className="h-16 w-full object-contain transition-transform duration-200 group-hover:scale-105 sm:h-20"
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n"
                            alt="Moto"
                        />
                    </div>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                        <h4 className="flex items-center gap-1 text-base font-bold text-black sm:text-lg">
                            Moto
                            <span className="flex items-center text-sm font-medium text-neutral-600">
                                <i className="ri-user-fill ml-1"></i>
                                1
                            </span>
                        </h4>

                        <h5 className="mt-1 text-sm font-semibold text-black">
                            3 mins away
                        </h5>

                        <p className="mt-1 text-xs leading-4 text-neutral-500 sm:text-sm">
                            Affordable motorcycle rides
                        </p>
                    </div>

                    {/* Price */}
                    <h2 className="shrink-0 text-xl font-bold text-black sm:text-2xl">
                        ₹185.3
                    </h2>
                </div>

                {/* Auto */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanalOpen(true)
                    }}
                    className="group flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3 transition-all duration-200 hover:border-black hover:shadow-md active:scale-[0.99] sm:p-4"
                >
                    {/* Vehicle image */}
                    <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-neutral-100 sm:h-24 sm:w-32">
                        <img
                            className="h-20 w-full object-contain transition-transform duration-200 group-hover:scale-105 sm:h-24"
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80ZTcxOGQ1Yy1lNDMxLTU5YzUtYWNiNS1hYzQwYzI2YzI0ZGYud2VicA=="
                            alt="Auto"
                        />
                    </div>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                        <h4 className="flex items-center gap-1 text-base font-bold text-black sm:text-lg">
                            Auto
                            <span className="flex items-center text-sm font-medium text-neutral-600">
                                <i className="ri-user-fill ml-1"></i>
                                3
                            </span>
                        </h4>

                        <h5 className="mt-1 text-sm font-semibold text-black">
                            3 mins away
                        </h5>

                        <p className="mt-1 text-xs leading-4 text-neutral-500 sm:text-sm">
                            Affordable auto rides
                        </p>
                    </div>

                    {/* Price */}
                    <h2 className="shrink-0 text-xl font-bold text-black sm:text-2xl">
                        ₹56.58
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default vehicalPanal