import { useEffect } from 'react'

const useNotification = () => {
  const requestPermission = async () => {
    if (!("Notification" in window)) {
      alert("আপনার ব্রাউজার নোটিফিকেশন সাপোর্ট করে না।")
      return 'denied'
    }

    try {
      const permission = await Notification.requestPermission()
      return permission
    } catch (error) {
      console.error("Notification permission error:", error)
      return 'denied'
    }
  }

  const sendNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: "https://cdn-icons-png.flaticon.com/512/2997/2997957.png"
      })
    }
  }

  // Check for 10 days remaining
  useEffect(() => {
    const checkTenDaysRemaining = () => {
      const ramadanDate = new Date("February 17, 2026 00:00:00").getTime()
      const now = new Date().getTime()
      const daysLeft = Math.floor((ramadanDate - now) / (1000 * 60 * 60 * 24))
      
      if (daysLeft === 10 && !localStorage.getItem('notificationShown')) {
        sendNotification(
          "রমজান কাউন্টডাউন", 
          "মাবরুক! পবিত্র রমজান মাস আর মাত্র ১০ দিন বাকি! প্রস্তুতি শুরু করুন।"
        )
        localStorage.setItem('notificationShown', 'true')
      }
    }

    // Check every hour
    const interval = setInterval(checkTenDaysRemaining, 60 * 60 * 1000)
    checkTenDaysRemaining() // Initial check

    return () => clearInterval(interval)
  }, [])

  return { requestPermission, sendNotification }
}

export default useNotification