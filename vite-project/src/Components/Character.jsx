import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import Card from './Card'

const Character = () => {

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    console.log(data)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://api.potterdb.com/v1/characters')
            const result = await response.json()
            if(result && result.data) {
                setData(result.data)
                setLoading(false)
            }
        } catch (error) {
            setErrorMsg(error,message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if(!data || data.length === 0) {
            fetchData()
        }}, [])
 
  return (
    <div>
        {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
        {loading && <div className='w-screen h-screen flex items-center justify-center'><RingLoader size={150}/> </div>}
        {
            data.map((item, index) => (
                <Card key={index} item={item}/>
            ))
        }
        
    </div>
  )
}

export default Character