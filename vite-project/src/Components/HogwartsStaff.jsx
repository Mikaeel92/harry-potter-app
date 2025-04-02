import { RingLoader } from 'react-spinners'
import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

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

const HogwartsStaff = () => { 
    
const [data, setData] = useState([]) 
const [loading, setLoading] = useState(false)
const [errorMsg, setErrorMsg] = useState(null)
const [input, setInput] = useState('')
const [filteredData, setFilteredData] = useState([])
const [favoriteStaff, setFavoriteStaff] = useState([])


const fetchData = async () => {
    try {
        setLoading(true)
        const response = await fetch('https://hp-api.onrender.com/api/characters/staff')
        const result = await response.json()
        if(result && result.length) {
            setData(result)
            setFilteredData(result)
            setLoading(false)
            console.log(data)
        }
    } catch (error) {
        setErrorMsg(error.message)
        setLoading(false)
    }
}


useEffect(() => {
    if(!data || data.length === 0 ) {
        fetchData()
    }}, [])

    const handleSearch = () => {
        if(input.trim() !== '') {
            const newData = data.filter((item, index) => (
                item.name.toLowerCase().includes(input.toLowerCase())
            ))
            setFilteredData(newData)
            setInput('')
        } else {
            setFilteredData(data)
        }
    }

return (
<div>
<div className='flex px-2 text-sm gap-2 mt-4'>
    <input type='text' placeholder='Find a Staff Member…' 
    className='w-52 p-2 border-gray-400 border-1 rounded-md'
    value={input} onChange={(e) => setInput(e.target.value)}/>
    <button className='p-2 bg-green-500 text-gray-800 rounded-md' onClick={handleSearch}>Search</button>
    </div>
<div className='grid grid-cols-4 gap-2 p-2 mt-2'>
    {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
    {loading && <div className='w-screen h-screen flex items-center justify-center'><RingLoader size={150}/> </div>}
    {
        filteredData.map((item) => (
            <div className='border p-4 bg-gray-100 rounded-lg shadow-lg'>
            <h2 className='text-sm'>{item.name}</h2>
            <img src={characterObject[item.name]} alt={item.name} className='object-center rounded-md size-96'/>
            <button className={favoriteStaff ? 'p-2 text-red-600' : 'p-2 text-gray-600'}>{favoriteStaff ? <FaHeart/> : <FaRegHeart/> }</button>
          </div>
        ))}   
</div>
</div>)}

export default HogwartsStaff