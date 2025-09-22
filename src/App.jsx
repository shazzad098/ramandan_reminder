import React from 'react'
import Header from './components/Header'
import CountdownTimer from './components/CountdownTimer'
import ProgressBar from './components/ProgressBar'
import DuaSection from './components/DuaSection'
import PrayerTimes from './components/PrayerTimes'
import NotificationButton from './components/NotificationButton'
import Footer from './components/Footer'
import IslamicBackground from './components/IslamicBackground'
import ShootingStars from './components/ShootingStars'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden font-siliguri">
      {/* Shooting Stars Background */}
      <ShootingStars />
      
      {/* Islamic Background Elements */}
      <IslamicBackground />
      
      {/* Existing Moon and Stars */}
      <div className="moon-background"></div>
      <div className="stars"></div>
      
      {/* Prayer Times */}
      <PrayerTimes />
      
      <div className="container relative z-10">
        <Header />
        <CountdownTimer />
        <ProgressBar />
        <DuaSection />
        <NotificationButton />
        <Footer />
      </div>
    </div>
  )
}

export default App