import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa'
import useNotification from '../hooks/useNotification'

const NotificationButton = () => {
  const [showModal, setShowModal] = useState(false)
  const { requestPermission, sendNotification } = useNotification()

  const handleButtonClick = async () => {
    const permission = await requestPermission()
    if (permission === 'granted') {
      setShowModal(true)
    }
  }

  const handleConfirm = () => {
    sendNotification(
      "রমজান কাউন্টডাউন", 
      "মাবরুক! পবিত্র রমজান মাস আর মাত্র ১০ দিন বাকি! প্রস্তুতি শুরু করুন।"
    )
    setShowModal(false)
    alert("নোটিফিকেশন সেট আপ সম্পন্ন হয়েছে! রমজান আর ১০ দিন বাকি থাকলে আপনাকে নোটিফাই করা হবে।")
  }

  return (
    <>
      <button 
        onClick={handleButtonClick}
        className="notification-button bg-gradient-to-r from-yellow-400 to-red-500 text-white py-4 px-8 rounded-full text-lg font-semibold hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl mx-auto block my-8"
      >
        <FaBell className="inline mr-2" />
        ১০ দিন বাকি থাকলে নোটিফাই করুন
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="modal-content bg-gradient-to-br from-blue-800 to-purple-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-white border-opacity-10">
            <button 
              onClick={() => setShowModal(false)}
              className="close text-white text-2xl float-right hover:text-yellow-400"
            >
              &times;
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              <FaBell className="inline mr-2 text-yellow-400" />
              নোটিফিকেশন সেটিংস
            </h3>
            
            <p className="text-white mb-6">
              আপনি কি চান রমজান আর ১০ দিন বাকি থাকলে আমরা আপনাকে নোটিফিকেশন পাঠাবো?
            </p>
            
            <div className="modal-buttons flex gap-3 justify-center">
              <button 
                onClick={handleConfirm}
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                হ্যাঁ, নোটিফাই করুন
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                না, ধন্যবাদ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NotificationButton