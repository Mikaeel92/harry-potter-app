import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const Character = () => {

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [input, setInput] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [favoritCharacter, setFavoriteCharacter] = useState(() => {
        try {
           return JSON.parse(localStorage.getItem('favoriteCharacter')) || []
        } catch (error) {
            console.log(error)
            return []
        }
    })

    useEffect(() => {
        if(!data || data.length === 0) {
            fetchData()
        }}, [])

    useEffect(() => {
        if(favoritCharacter.length > 0) {
            localStorage.setItem('favoriteCharacter', JSON.stringify(favoritCharacter))
        }
    }, [favoritCharacter])

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://hp-api.onrender.com/api/characters')
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
        if(input.trim() !== '') {
            const filteredData = data.filter((item, index) => (
                item.name.toLowerCase().includes(input.toLowerCase())
            ))
            setFilteredData(filteredData)
            setInput('')
        } else {
            setFilteredData(data)
        }
    }
 
    const toggleCharacter = (charName) => {
        setFavoriteCharacter(prev => 
            prev.includes(charName) ? favoritCharacter.filter((item) => (
                item !== charName
            )) : [...prev, charName]
        )
    }

  return (
    <div>
    <div className='flex px-2 text-sm gap-2 mt-4'>
    <input type='text' placeholder='Find your favorite character…' 
    className='w-52 p-2 border-gray-400 border-1 rounded-md'
    value={input} onChange={(e) => setInput(e.target.value)}/>
    <button className='p-2 bg-green-500 text-gray-800 rounded-md' onClick={handleSearch}>Search</button>
    </div>
    <div className='grid grid-cols-4 gap-2 p-2 mt-2'>
        {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
        {loading && <div className='w-screen h-screen flex items-center justify-center'><RingLoader size={150}/> </div>}
        {
            filteredData.map((item, index) => (
                <div key={index} className='border p-4 bg-gray-100 rounded-lg shadow-lg'>
                <p className='text-sm'>
                    {item.name}
                </p>
                <button 
                onClick={() => toggleCharacter(item.name)}
                className={favoritCharacter.includes(item.name) ? 'text-red-600' : 'text-gray-600'}>{favoritCharacter.includes(item.name) ? <FaHeart size={30}/> : <FaRegHeart size={30}/>}</button>
            </div>
            ))
        }
    </div>
    </div>
  )
}

export default Character