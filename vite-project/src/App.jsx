import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { BiHome, BiUser, BiSolidMagicWand, BiBookmarkAlt } from 'react-icons/bi'

import Home from './Components/Home'
import Character from './Components/Character'
import Spell from './Components/Spell'
import HogwartsStaff from './Components/HogwartsStaff'

const App = () => {

  return (
    <div className='text-5xl'>
      <Router>
        <nav className='bg-green-950 text-white flex justify-center gap-6 p-4'>
        <NavLink to='/' className={ ({ isActive }) => isActive ? 'text-white flex gap-2 px-2' : 'text-gray-400 flex gap-2 px-2'}>Home <BiHome/></NavLink>
        <NavLink to='/characters' className={ ({ isActive }) => isActive ? 'text-white flex gap-2 px-2' : 'text-gray-400 flex gap-2 px-2'}>Characters <BiUser/></NavLink>
        <NavLink to='/spells' className={ ({ isActive }) => isActive ? 'text-white flex gap-2 px-2' : 'text-gray-400 flex gap-2 px-2'}>Spells <BiSolidMagicWand/></NavLink>
        <NavLink to='/HogwartsStaff' className={ ({ isActive }) => isActive ? 'text-white flex gap-2 px-2' : 'text-gray-400 flex gap-2 px-2'}>Hogwarts Staff <BiBookmarkAlt/></NavLink>

        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/characters' element={<Character/>}/>
          <Route path='/spells' element={<Spell/>}/>
          <Route path='/HogwartsStaff' element={<HogwartsStaff/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App