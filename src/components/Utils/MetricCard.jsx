import React from 'react'

const MetricCard = ({digit, desc, bgcolor}) => {
  return (
    <div className={`${bgcolor} rounded-lg p-8 flex flex-col items-start justify-start gap-4`}>
      <h2 className='md:text-4xl font-bold'>{digit}</h2>
      <h1 className='md:text-3xl'>{desc}</h1>
    </div>
  )
}

export default MetricCard
