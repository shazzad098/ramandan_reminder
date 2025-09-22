import React from 'react'

const IslamicBackground = () => {
  return (
    <>
      {/* Islamic Pattern Background */}
      <div 
        className="islamic-pattern absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23fbbf24' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px'
        }}
      ></div>

      {/* Mosque Silhouette Bottom */}
      <div 
        className="mosque-silhouette absolute bottom-0 left-0 w-full h-32 opacity-10 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23fbbf24'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23fbbf24'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23fbbf24'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover'
        }}
      ></div>

      {/* Floating Crescent Moons */}
      <div className="crescent-moon-1 absolute top-1/4 left-10 w-20 h-20 opacity-20 z-0 animate-float-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20C50 20 70 40 70 60C70 80 50 80 50 80C30 80 30 60 30 40C30 20 50 20 50 20Z" fill="#fbbf24"/>
        </svg>
      </div>

      <div className="crescent-moon-2 absolute top-3/4 right-20 w-16 h-16 opacity-15 z-0 animate-float-slower">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 30C60 30 80 50 80 70C80 90 60 90 60 90C40 90 40 70 40 50C40 30 60 30 60 30Z" fill="#fbbf24"/>
        </svg>
      </div>

      {/* Arabic Calligraphy Pattern */}
      <div 
        className="arabic-pattern absolute top-20 right-10 w-40 h-40 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30,40 Q50,20 70,40 T90,60 Q70,80 50,60 T30,40 Z' fill='none' stroke='%23fbbf24' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Ramadan Lanterns */}
      <div className="lantern-1 absolute bottom-40 left-5 w-12 h-16 opacity-30 z-0 animate-bounce-slow">
        <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 6H10L12 2Z" fill="#fbbf24"/>
          <rect x="8" y="6" width="8" height="20" rx="2" fill="#fbbf24"/>
          <path d="M10 26H14V30H10V26Z" fill="#fbbf24"/>
        </svg>
      </div>

      <div className="lantern-2 absolute bottom-60 right-8 w-10 h-14 opacity-25 z-0 animate-bounce-slower">
        <svg viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L11 4H9L10 1Z" fill="#fbbf24"/>
          <rect x="7" y="4" width="6" height="18" rx="1" fill="#fbbf24"/>
          <path d="M8 22H12V26H8V22Z" fill="#fbbf24"/>
        </svg>
      </div>

      {/* Islamic Geometric Pattern */}
      <div 
        className="geometric-pattern absolute top-1/2 left-1/4 w-64 h-64 opacity-3 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,50 L150,50 L150,150 L50,150 Z' fill='none' stroke='%23fbbf24' stroke-width='1'/%3E%3Cpath d='M70,70 L130,70 L130,130 L70,130 Z' fill='none' stroke='%23fbbf24' stroke-width='1'/%3E%3Cpath d='M90,90 L110,90 L110,110 L90,110 Z' fill='none' stroke='%23fbbf24' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: 'contain'
        }}
      ></div>
    </>
  )
}

export default IslamicBackground