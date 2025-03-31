import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
import Home from './Components/Home'

const App = () => {

  // const [data, setData] = useState([])
  // const [loadind, setLoading] = useState(false)
  // const [errorMsg, setErrorMsg] = useState(null)

  // const fetchData = async () => {
  //   const response = await fetch('https://api.potterdb.com/v1/')
  //   const data = await response.json()
  //   console.log(data)
  //   if(data) {
  //     setLoading(false)
  //     setData(data)
  //   }
  // }

  // useEffect(() => {
  //   if(!data || data.length === 0) {
  //     fetchData()
  //   }
  // },[])

  return (
    <div className='text-5xl'>
      <Router>
        <nav className='bg-green-950 text-white'>
        <NavLink to='/' className={ ({ isActive }) => isActive ? 'text-black 2xl:' : 'text-gray-800'}>Home <BiHome/></NavLink>
        </nav>
    
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App