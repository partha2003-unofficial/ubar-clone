import React from 'react'

const vehicalPanal = (props) => {
    return (
        <div>
            <div ref={props.vehicalPanalRef} className='fixed w-full z-10 bottom-0 px-3 py-3 bg-white translate-y-full'>

                <h5
                    onClick={() => { props.setVehicalPanelOpen(false) }}
                    className='w-full flex justify-center cursor-pointer'>
                    <i className="text-3xl ri-arrow-down-wide-fill"></i>
                </h5>

                <div className='text-2xl font-semibold mb-3'>Choose a vehical</div>

                <div  onClick={()=>{props.setConfirmRidePanalOpen(true)}} className='flex w-full items-center justify-between p-3 border-2 mb-2 active:border-black rounded-2xl'>
                    <img className='h-22' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="" />
                    <div className='ml-9 w-1/2'>
                        <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                    </div>
                    <h2 className='text-2xl font-semibold'>$2.2</h2>
                </div>

                <div onClick={()=>{props.setConfirmRidePanalOpen(true)}} className='flex w-full items-center justify-between  p-3 border-2 mb-2 active:border-black rounded-2xl'>
                    <img className='h-18' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n" alt="" />
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
                    </div>
                    <h2 className='text-2xl font-semibold'>$0.7</h2>
                </div>

                <div  onClick={()=>{props.setConfirmRidePanalOpen(true)}} className='flex w-full items-center justify-between p-3 border-2 mb-2 active:border-black rounded-2xl'>
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

export default vehicalPanal
