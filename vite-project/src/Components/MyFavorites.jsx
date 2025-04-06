import React, { useState } from 'react'

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

    console.log(favoriteStaff)
    console.log(favoriteSpell)

  return (
    <div className="p-4 flex flex-col items-center justify-center gap-2">
    <h2 className="text-2xl font-bold mb-2">Favorite Character</h2>
    {
        favoriteCharacter.length > 0 ? (
            favoriteCharacter.map((item, index) => (
                <div key={index} className="mb-1 text-green-900">{item}</div>
            ))
        ) : (
            <div className="text-gray-700">There Isn't Any Favorite Character</div>
        )
    }

    <h2 className="text-2xl font-bold mt-4 mb-2">Favorite Spell</h2>
    {
        favoriteSpell.length > 0 ? (
            favoriteSpell.map((item, index) => (
                <div key={index} className="mb-1 text-green-800">{item}</div>
            ))
        ) : (
            <div className="text-gray-700">There Isn't Any Favorite Spell</div>
        )
    }
    <h2 className="text-2xl font-bold mt-4 mb-2">Favorite Staff</h2>
    {
        favoriteStaff.length > 0 ? (
            favoriteStaff.map((item, index) => (
                <div key={index} className="mb-1 text-green-700">{item}</div>
            ))
        ) : (
            <div className="text-gray-700">There Isn't Any Favorite Staff</div>
        )
    }
    </div>
  )
}

export default MyFavorites