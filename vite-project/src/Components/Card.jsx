import React from 'react'

const Card = ({item}) => {
  return (
    <div className=''>
        <p className='text-sm'>
            {item.name}
        </p>
    </div>
  )
}

export default Card