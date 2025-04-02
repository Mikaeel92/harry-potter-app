import { RingLoader } from 'react-spinners'
import SpellCard from './SpellCard'
import React, { useEffect, useState } from 'react'

const Spell = () => {
    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [filteredData, setFilteredData] = useState([])
    const [input, setInput] = useState('')

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://hp-api.onrender.com/api/spells')
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

    const handleSearch = () => {
        if(input.trim() !== 0) {
            const newFilteredData = data.filter((item) => (
                item.name.toLowerCase().includes(input.toLowerCase())
            ))
            setFilteredData(newFilteredData)
            setInput('')
        } else {
            setFilteredData(data)
        }
    }

    useEffect(() => {
        if(!data || data.length === 0) {
            fetchData()
        }}, [])
 
  return (
    <div>
    <div className='flex px-2 text-sm gap-2 mt-4'>
    <input type='text' placeholder='Find your favorite character…' 
    className='w-52 p-2 border-gray-400 border-1 rounded-md'
    value={input} onChange={(e) => setInput(e.target.value)}/>
    <button className='p-2 bg-green-500 text-gray-800 rounded-md' onClick={handleSearch}>Search</button>
    </div>
    <div className='grid grid-cols-4 gap-2 p-2'>
        {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
        {loading && <div className='w-screen h-screen flex items-center justify-center'><RingLoader size={150}/> </div>}
        {
            filteredData.map((item, index) => (
                <SpellCard key={index} item={item} />
            ))}  
    </div>
    </div>

  )
}

export default Spell