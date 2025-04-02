import React from 'react'


const characterObject = {
    'Galatea Merrythought' : '/public/images/ Galatea Merrythought.webp',
    'Madame Pince' : '/public/images/ Madame Pince.webp',
    'Pomona Sprout' : '/public/images/ Pomona Sprout.webp',
    'Severus Snape' : '/public/images/ Severus Snape.webp',
    'Alastor Moody' : '/public/images/Alastor Moody.jpg',
    'Albus Dumbledore' : '/public/images/Albus Dumbledore.jpg',
    'Argus Filch' : '/public/images/Argus Filch.jpeg',
    'Aurora Sinistra' : '/public/images/Aurora Sinistra.jpg',
    'Charity Burbage' : '/public/images/Charity Burbage.jpg',
    'Cuthbert Binns' : '/public/images/Cuthbert Binns.jpg',
    'Dolores Umbridge' : '/public/images/Dolores Umbridge.webp',
    'Filius Flitwick' : '/public/images/Filius Flitwick.webp',
    'Firenze' : '/public/images/Firenze.jpg',
    'Gilderoy Lockhart' : '/public/images/Gilderoy Lockhart.webp',
    'Horace Slughorn' : '/public/images/Horace Slughorn.webp',
    'Madam Hooch' : '/public/images/Madam Hooch.jpg',
    'Madam Pomfrey' : '/public/images/Madam Pomfrey.webp',
    'Minerva McGonagall' : '/public/images/Minerva McGonagall.jpg',
    'Mrs Norris' : '/public/images/Mrs Norris.jpg',
    'Quirinus Quirrel' : '/public/images/Quirinus Quirrel.jpg',
    'Remus Lupin' : '/public/images/Remus Lupin.jpg',
    'Rubeus Hagrid' : '/public/images/Rubeus Hagrid.webp',
    'Septima Vector' : '/public/images/Septima Vector.jpg',
    'Sybill Trelawney' : '/public/images/Sybill Trelawney.webp',
    'Wilhelmina Grubbly-Plank' : '/public/images/Wilhelmina Grubbly-Plank.jpg',
}

const StaffCard = ({item}) => {
  return (
    <div className='border p-4 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-sm'>{item.name}</h2>
      <img src={characterObject[item.name]} alt={item.name} className='object-center rounded-md size-96'/>
    </div>
  )
}

export default StaffCard