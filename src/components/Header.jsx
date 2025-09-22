import React from 'react'
import { FaMoon } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header text-center py-8">
      <FaMoon className="text-5xl text-yellow-400 mx-auto mb-4 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
        পবিত্র রমজান মাস আসতে বাকি...
      </h1>
      <p className="text-xl text-yellow-400 opacity-90">১৭ ফেব্রুয়ারি, ২০২৬</p>
    </div>
  )
}

export default Header