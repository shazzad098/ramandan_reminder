import React, { useState, useEffect } from 'react';
import { FaPray, FaMosque, FaSun, FaCloudSun } from 'react-icons/fa';

// Data for prayer times, separated from the component logic.
// Using a full Date object for accuracy in calculations.
const PRAYER_TIMES = [
  { name: 'ফজর', time: '5:15 AM', icon: <FaSun className="text-sky-400" /> },
  { name: 'জোহর', time: '12:30 PM', icon: <FaCloudSun className="text-yellow-500" /> },
  { name: 'আসর', time: '4:45 PM', icon: <FaCloudSun className="text-orange-500" /> },
  { name: 'মাগরিব', time: '6:20 PM', icon: <FaSun className="text-red-500" /> },
  { name: 'ইশা', time: '7:45 PM', icon: <FaPray className="text-indigo-500" /> }
];

// Helper function to convert a time string to a Date object for the current day.
const getPrayerTimeForToday = (timeString) => {
  const [time, period] = timeString.split(' ');
  const [hours, minutes] = time.split(':');
  const date = new Date();
  let hour = parseInt(hours, 10);
  if (period === 'PM' && hour < 12) {
    hour += 12;
  }
  if (period === 'AM' && hour === 12) {
    hour = 0;
  }
  date.setHours(hour, parseInt(minutes, 10), 0, 0);
  return date;
};

const PrayerTimes = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Update the current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine the next prayer time and the remaining time until it
  const getNextPrayerInfo = () => {
    let nextPrayerIndex = -1;
    let timeRemaining = null;

    for (let i = 0; i < PRAYER_TIMES.length; i++) {
      const prayerTime = getPrayerTimeForToday(PRAYER_TIMES[i].time);
      if (prayerTime.getTime() > currentTime.getTime()) {
        nextPrayerIndex = i;
        const diff = prayerTime.getTime() - currentTime.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        timeRemaining = { hours, minutes };
        break;
      }
    }

    // If all prayers for today are over, the next prayer is Fajr tomorrow.
    if (nextPrayerIndex === -1) {
      nextPrayerIndex = 0;
      const fajrTomorrow = getPrayerTimeForToday(PRAYER_TIMES[0].time);
      fajrTomorrow.setDate(fajrTomorrow.getDate() + 1);
      const diff = fajrTomorrow.getTime() - currentTime.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      timeRemaining = { hours, minutes };
    }

    return {
      nextPrayer: PRAYER_TIMES[nextPrayerIndex],
      timeRemaining
    };
  };

  const { nextPrayer, timeRemaining } = getNextPrayerInfo();

  return (
    <div className={`fixed top-20 right-4 z-50 transition-all duration-300 ${
      isExpanded ? 'w-80' : 'w-16'
    }`}>
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-yellow-400/90 hover:bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg mb-2 transition-all duration-300"
      >
        <FaMosque className="text-xl" />
      </button>

      {/* Prayer Times Panel */}
      <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
        isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        
        {/* Header */}
        <div className="bg-yellow-400/20 p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaMosque className="text-2xl text-yellow-400 mr-2" />
              <h3 className="text-white font-bold text-lg">নামাজের সময়</h3>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              ×
            </button>
          </div>
          
          {/* Current Time and Next Prayer */}
          <div className="mt-3 text-center">
            <p className="text-white text-sm">
              {currentTime.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="text-yellow-400 text-sm font-semibold mt-1">
              পরবর্তী: <span className="text-white">{nextPrayer.name}</span>
            </p>
            {timeRemaining && (
              <p className="text-yellow-300 text-xs mt-1">
                বাকি: {timeRemaining.hours}ঘ {timeRemaining.minutes}মি
              </p>
            )}
          </div>
        </div>

        {/* Prayer Times List */}
        <div className="max-h-64 overflow-y-auto">
          {PRAYER_TIMES.map((prayer, index) => {
            const isNextPrayer = prayer.name === nextPrayer.name;
            return (
              <div 
                key={index} 
                className={`flex justify-between items-center p-3 border-b border-white/5 last:border-b-0 transition-colors ${
                  isNextPrayer ? 'bg-yellow-400/10' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2 text-lg">{prayer.icon}</span>
                  <span className={`font-medium ${isNextPrayer ? 'text-yellow-400' : 'text-white'}`}>
                    {prayer.name}
                  </span>
                </div>
                
                <div className="text-right">
                  <span className={`font-semibold ${isNextPrayer ? 'text-yellow-400' : 'text-green-400'}`}>
                    {prayer.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="p-2 bg-black/20">
          <p className="text-gray-300 text-xs text-center">
            * আনুমানিক সময়
          </p>
        </div>
      </div>

      {/* Mini View (when collapsed) */}
      <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 mt-2 text-center transition-all duration-300 ${
        isExpanded ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}>
        <p className="text-yellow-400 text-sm font-semibold">{nextPrayer.name}</p>
        <p className="text-white text-xs">{nextPrayer.time}</p>
        {timeRemaining && (
          <p className="text-yellow-300 text-xs mt-1">
            {timeRemaining.hours}ঘ {timeRemaining.minutes}মি
          </p>
        )}
      </div>
    </div>
  );
};

export default PrayerTimes;