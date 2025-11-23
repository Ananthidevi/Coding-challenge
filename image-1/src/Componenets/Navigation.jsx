import React from 'react'

function Navigationbar() {
  return (
    <div>
      <ul className='bg-violet-200 py-4 flex justify-end gap-5 text-xxl font-bold text-pink-500 hover:text-blue-600'>
        <li className='hover:cursor'>Home</li>
        <li>Electronics</li>
        <li>Profile</li>
      </ul>
    </div>
  )
}

export default Navigationbar