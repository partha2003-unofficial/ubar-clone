import React from 'react'

const LocationSearchPanel = (props) => {

  const addressData = [
    'Dhamtouri, simulia, tamluk, purbaMedinipur 721649',
    'bohichberia highschool , bohichberia, nandakumar, 721648',
    'simulia, mirikpur, purbamedinipur, 721648'
  ]

  return (
    <div className='flex items-center flex-wrap gap-2 px-5'>
      {
        addressData.map((data, index) => {
          return <div
            key={index}
            onClick={() => { props.setVahicalePanal(true) }}
            className='flex items-center border-gray-200 active:border-black rounded-xl border-2 justify-start gap-4 p-2'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-2xl '> <i className="ri-map-pin-fill text-2xl"></i></h2>
            <h4 className='font-medium'>{data}</h4>
          </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
