import React, { useState, useEffect } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { duas } from '../data/duas'

const DuaSection = () => {
  const [currentDua, setCurrentDua] = useState('')
  const [fade, setFade] = useState(true)

  useEffect(() => {
    // Set initial dua
    const randomIndex = Math.floor(Math.random() * duas.length)
    setCurrentDua(duas[randomIndex])

    // Change dua every 30 seconds
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * duas.length)
        setCurrentDua(duas[randomIndex])
        setFade(true)
      }, 500)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dua-section bg-white bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto my-8 backdrop-blur-md border-l-4 border-yellow-400 relative">
      <FaQuoteLeft className="text-2xl text-yellow-400 opacity-70 absolute top-3 left-5" />
      <FaQuoteRight className="text-2xl text-yellow-400 opacity-70 absolute bottom-3 right-5" />
      <p className={`dua-text text-2xl text-white italic text-center px-8 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {currentDua}
      </p>
    </div>
  )
}

export default DuaSection