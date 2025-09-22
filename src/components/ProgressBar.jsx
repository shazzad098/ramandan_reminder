import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Start date: The last day of Ramadan 2025 (March 30, 2025)
      const startDate = new Date('March 30, 2025 00:00:00').getTime();
      
      // End date: The start of Ramadan 2026 (February 17, 2026)
      const endDate = new Date('February 17, 2026 00:00:00').getTime();
      
      const now = new Date().getTime();

      const totalDuration = endDate - startDate;
      const timePassed = now - startDate;
      
      // Calculate progress and ensure it stays between 0 and 100
      let calculatedProgress = Math.min(Math.max((timePassed / totalDuration) * 100, 0), 100);
      
      setProgress(calculatedProgress);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative progress-bar-container w-full max-w-2xl mx-auto my-8 h-10 rounded-full overflow-hidden bg-white bg-opacity-20 border border-white border-opacity-10">
      <div 
        className="progress-fill h-full bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="progress-label absolute inset-0 flex items-center justify-center text-lg text-white font-bold">
        <span>রমজানের দিকে আমাদের যাত্রা {Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;