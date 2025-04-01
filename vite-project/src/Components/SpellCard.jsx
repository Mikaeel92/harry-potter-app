import React from 'react'

const SpellCard = ({item}) => {
  return (
    <div className='border p-4 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-sm'>{item.name}</h2>
      <p className='text-sm text-gray-700'>{item.description}</p>
    </div>
  )
}

export default SpellCard