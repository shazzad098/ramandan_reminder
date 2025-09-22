import React, { useEffect, useState } from 'react';

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createShootingStar = () => {
      const left = Math.random() * 20;
      const top = Math.random() * 30;
      
      const duration = Math.random() * 0.8 + 0.5; // 0.5-1.3 seconds (very fast)
      const delay = Math.random() * 2 + 0.5; // 0.5-2.5 seconds delay (very short)
      const size = Math.random() * 1.2 + 0.6;
      
      return {
        id: Math.random(),
        left,
        top,
        duration,
        delay,
        size
      };
    };

    // Start with 4-5 stars immediately
    const initialStars = Array.from({ length: Math.floor(Math.random() * 2) + 4 }, createShootingStar);
    setStars(initialStars);

    // Add new star every 2-5 seconds (very frequent)
    const starInterval = setInterval(() => {
      setStars(prevStars => {
        if (prevStars.length >= 6) return prevStars.slice(1);
        return [...prevStars, createShootingStar()];
      });
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(starInterval);
  }, []);

  return (
    <div className="shooting-stars fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="shooting-star absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `shootQuick ${star.duration}s ease-out ${star.delay}s forwards`,
            boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.9)',
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;