import React from 'react'

const StaffCard = ({item}) => {
  return (
    <div className='border p-4 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-sm'>{item.name}</h2>
    </div>
  )
}

export default StaffCard