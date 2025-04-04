import { RingLoader } from 'react-spinners'
import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const characterObject = {
    'Galatea Merrythought' : '/images/ Galatea Merrythought.webp',
    'Madame Pince' : '/images/ Madame Pince.webp',
    'Pomona Sprout' : '/images/ Pomona Sprout.webp',
    'Severus Snape' : '/images/ Severus Snape.webp',
    'Alastor Moody' : '/images/Alastor Moody.jpg',
    'Albus Dumbledore' : '/images/Albus Dumbledore.jpg',
    'Argus Filch' : '/images/Argus Filch.jpeg',
    'Aurora Sinistra' : '/images/Aurora Sinistra.jpg',
    'Charity Burbage' : '/images/Charity Burbage.jpg',
    'Cuthbert Binns' : '/images/Cuthbert Binns.jpg',
    'Dolores Umbridge' : '/images/Dolores Umbridge.webp',
    'Filius Flitwick' : '/images/Filius Flitwick.webp',
    'Firenze' : '/images/Firenze.jpg',
    'Gilderoy Lockhart' : '/images/Gilderoy Lockhart.webp',
    'Horace Slughorn' : '/images/Horace Slughorn.webp',
    'Madam Hooch' : '/images/Madam Hooch.jpg',
    'Madam Pomfrey' : '/images/Madam Pomfrey.webp',
    'Minerva McGonagall' : '/images/Minerva McGonagall.jpg',
    'Mrs Norris' : '/images/Mrs Norris.jpg',
    'Quirinus Quirrel' : '/images/Quirinus Quirrel.jpg',
    'Remus Lupin' : '/images/Remus Lupin.jpg',
    'Rubeus Hagrid' : '/images/Rubeus Hagrid.webp',
    'Septima Vector' : '/images/Septima Vector.jpg',
    'Sybill Trelawney' : '/images/Sybill Trelawney.webp',
    'Wilhelmina Grubbly-Plank' : '/images/Wilhelmina Grubbly-Plank.jpg',
}

const HogwartsStaff = () => { 
    
const [data, setData] = useState([]) 
const [loading, setLoading] = useState(false)
const [errorMsg, setErrorMsg] = useState(null)
const [input, setInput] = useState('')
const [filteredData, setFilteredData] = useState([])
const [favoriteStaff, setFavoriteStaff] = useState(() => {
    try {
        return JSON.parse(localStorage.getItem('favoriteCharacter')) || [];
    } catch (error) {
        console.log("Error parsing favoriteCharacter from localStorage:", error);
        return [];
    }
});


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

    useEffect(() => {
        if (favoriteStaff.length > 0) {
            localStorage.setItem('favoriteCharacter', JSON.stringify(favoriteStaff));
        }
    }, [favoriteStaff]);

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

    const toggleFavorite = (staffName) => {
        setFavoriteStaff(prev => 
            prev.includes(staffName) ? prev.filter((item) => item !== staffName) : [...prev, staffName]
        )
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
            <button 
            className={favoriteStaff.includes(item.name) ? 'p-2 text-red-600' : 'p-2 text-gray-600'}
            onClick={() => toggleFavorite(item.name)}>{favoriteStaff.includes(item.name) ? <FaHeart/> : <FaRegHeart/>}</button>
          </div>
        ))}   
</div>
</div>)}

export default HogwartsStaff