import React, { useEffect, useState } from 'react'

const MyFavorites = () => {

    const [favoriteCharacter, setFavoriteCharacter] = useState(() => {
        try {
           return JSON.parse(localStorage.getItem('favoriteCharacter')) || []
        } catch (error) {
            console.log(error)
            return []
        }
    })
    const [favoriteSpell, setFavoriteSpell] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('favoriteSpell')) || []
        } catch (error) {
            console.log(error)
            return []
        }
    })
    const [favoriteStaff, setFavoriteStaff] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('favoriteStaff')) || []
        } catch (error) {
            console.log(error)
            return []
        }
    })


  return (
    <div>MyFavorites</div>
  )
}

export default MyFavorites