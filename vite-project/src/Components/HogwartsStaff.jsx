import { RingLoader } from 'react-spinners'
import StaffCard from './StaffCard'
import React, { useEffect, useState } from 'react'

const HogwartsStaff = () => { 
    
const [data, setData] = useState([]) 
const [loading, setLoading] = useState(false)
const [errorMsg, setErrorMsg] = useState(null)
const [input, setInput] = useState('')
const [filteredData, setFilteredData] = useState([])

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
        filteredData.map((item, index) => (
            <StaffCard key={index} item={item} />
        ))}   
</div>
</div>)}

export default HogwartsStaff