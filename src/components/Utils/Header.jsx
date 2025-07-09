import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between'>
      <div>
        <h2 className='text-2xl'>Hello <br /><span className='text-4xl font-bold'> User 👋 </span></h2>
      </div>
      <div className='flex items-end'>
        <button className='bg-red-500 hover:bg-red-700 px-4 py-2 text-lg rounded-sm cursor-pointer'>Logout</button>
      </div>
    </div>
  )
}

export default Header
