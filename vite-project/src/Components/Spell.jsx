import { RingLoader } from 'react-spinners'
import SpellCard from './SpellCard'
import React, { useEffect, useState } from 'react'

const Spell = () => {
    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://hp-api.onrender.com/api/spells')
            const result = await response.json()
            if(result && result.length) {
                setData(result)
                setLoading(false)
                console.log(data)
            }
        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if(!data || data.length === 0) {
            fetchData()
        }}, [])
 
  return (
    <div className='grid grid-cols-4 gap-2 p-2'>
        {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
        {loading && <div className='w-screen h-screen flex items-center justify-center'><RingLoader size={150}/> </div>}
        {
            data.map((item, index) => (
                <SpellCard key={index} item={item} />
            ))
        }
        
    </div>
  )
}

export default Spell