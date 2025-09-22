import React from 'react';
import useCountdown from '../hooks/useCountdown';

const CountdownTimer = () => {
  // Set the target date for the start of Ramadan
  const targetDate = new Date('February 17, 2026 00:00:00');
  
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  
  // A helper component for displaying individual time units
  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl min-w-[120px] bg-white/10 backdrop-blur-md border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1">
      <span className="text-5xl font-bold text-yellow-400 drop-shadow-md">
        {value}
      </span>
      <div className="text-lg mt-3 text-gray-200">
        {label}
      </div>
    </div>
  );

  // If the countdown is over, display a celebration message
  if (days + hours + minutes + seconds <= 0) {
    return (
      <div className="celebration bg-white/10 p-8 rounded-2xl max-w-4xl mx-auto my-8 backdrop-blur-md border border-white/10 shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          মাবরুক! পবিত্র রমজান মাস শুরু হয়েছে!
        </h2>
        <p className="text-xl text-white">
          রমজান মুবারক! আল্লাহ আমাদের সকলের রোজা ও ইবাদত কবুল করুন।
        </p>
      </div>
    );
  }

  // Otherwise, display the countdown timer
  return (
    <div className="flex justify-center gap-5 flex-wrap my-12" id="countdown">
      <TimeBox value={String(days).padStart(2, '0')} label="দিন" />
      <TimeBox value={String(hours).padStart(2, '0')} label="ঘন্টা" />
      <TimeBox value={String(minutes).padStart(2, '0')} label="মিনিট" />
      <TimeBox value={String(seconds).padStart(2, '0')} label="সেকেন্ড" />
    </div>
  );
};

export default CountdownTimer;