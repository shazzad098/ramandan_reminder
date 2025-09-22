# রমজান কাউন্টডাউন - Ramadan Countdown 🌙

একটি সুন্দর এবং ইন্টারেক্টিভ রমজান কাউন্টডাউন ওয়েবসাইট, যা রিয়েক্ট জেএস, টেইলউইন্ড সিএসএস এবং রিয়েক্ট আইকনস ব্যবহার করে তৈরি করা হয়েছে।

## ✨ Features

- **রিয়েল-টাইম কাউন্টডাউন**: পবিত্র রমজান মাস শুরু হতে বাকি সময়ের সঠিক গণনা
- **নামাজের সময়সূচী**: বর্তমান সময় এবং পরবর্তী নামাজের সময় দেখায়
- **ইসলামিক ডিজাইন**: চাঁদ, তারা এবং ইসলামিক প্যাটার্ন সহ সুন্দর ব্যাকগ্রাউন্ড
- **শুটিং স্টারস**: মিনিমালিস্ট শুটিং স্টার অ্যানিমেশন
- **প্রোগ্রেস বার**: রমজানের দিকে অগ্রগতি দেখায়
- **দোয়া সেকশন**: র্যান্ডম দোয়া এবং তাসবিহ প্রদর্শন
- **নোটিফিকেশন**: রমজান আর ১০ দিন বাকি থাকলে নোটিফিকেশন
- **রেস্পন্সিভ ডিজাইন**: সব ডিভাইসে কাজ করে

## 🚀 Installation

প্রোজেক্টটি লোকালি রান করতে নিচের স্টেপগুলো ফলো করুন:

```bash
# dependencies install করুন
npm install

# development server run করুন
npm run dev

# production build তৈরি করুন
npm run build
```

## 📁 Project Structure

```
ramadan_counter/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── DuaSection.jsx
│   │   ├── PrayerTimes.jsx
│   │   ├── NotificationButton.jsx
│   │   ├── Footer.jsx
│   │   ├── IslamicBackground.jsx
│   │   └── ShootingStars.jsx
│   ├── hooks/
│   │   ├── useCountdown.js
│   │   └── useNotification.js
│   ├── data/
│   │   └── duas.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠 Technologies Used

- **React.js** - UI লাইব্রেরি
- **Tailwind CSS** - ইউটিলিটি-ফার্স্ট সিএসএস ফ্রেমওয়ার্ক
- **React Icons** - আইকন লাইব্রেরি
- **Vite** - বিল্ড টুল এবং ডেভেলপমেন্ট সার্ভার
- **CSS3** - কাস্টম অ্যানিমেশন এবং স্টাইলিং

## 🎨 Components Description

### CountdownTimer
রমজান শুরু হতে বাকি দিন, ঘন্টা, মিনিট এবং সেকেন্ড দেখায়।

### PrayerTimes
বর্তমান সময় এবং পরবর্তী নামাজের সময়সূচী দেখায়। এটি একটি ফ্লোটিং প্যানেল হিসেবে কাজ করে।

### IslamicBackground
ইসলামিক থিমড ব্যাকগ্রাউন্ড এলিমেন্টস যেমন চাঁদ, মসজিদ সিলুয়েট এবং জ্যামিতিক প্যাটার্ন।

### ShootingStars
মিনিমালিস্ট শুটিং স্টার অ্যানিমেশন যা ব্যাকগ্রাউন্ডে চলতে থাকে।

### DuaSection
র্যান্ডমভাবে বিভিন্ন দোয়া এবং তাসবিহ প্রদর্শন করে।

### ProgressBar
রমজানের দিকে অগ্রগতি শতকরা হিসাবে দেখায়।

## ⚙️ Configuration

### রমজানের তারিখ পরিবর্তন
রমজানের তারিখ পরিবর্তন করতে `src/components/CountdownTimer.jsx` ফাইলে এই লাইনটি আপডেট করুন:

```jsx
const ramadanDate = new Date("February 17, 2026 00:00:00");
```

### নামাজের সময় পরিবর্তন
`src/components/PrayerTimes.jsx` ফাইলে `PRAYER_TIMES` অ্যারেতে নামাজের সময় আপডেট করুন:

```jsx
const PRAYER_TIMES = [
  { name: 'ফজর', time: '5:15 AM', icon: <FaSun className="text-sky-400" /> },
  // ... অন্যান্য নামাজের সময়
];
```

## 🌙 Customization

### রঙ পরিবর্তন
প্রধান রঙগুলি পরিবর্তন করতে `tailwind.config.js` ফাইলে theme এক্সটেন্ড করুন:

```js
theme: {
  extend: {
    colors: {
      'ramadan-green': '#22c55e',
      'ramadan-gold': '#fbbf24',
    }
  }
}
```

### ফন্ট পরিবর্তন
নতুন ফন্ট যোগ করতে `public/index.html` এ Google Fonts লিঙ্ক আপডেট করুন।

## 📱 Responsive Design

ওয়েবসাইটটি সম্পূর্ণ রেস্পন্সিভ এবং নিচের ডিভাইসগুলিতে কাজ করে:
- ডেস্কটপ কম্পিউটার
- ট্যাবলেট
- মোবাইল ফোন

## 🎯 Future Enhancements

- [ ] ব্যবহারকারীর লোকেশন অনুযায়ী নামাজের সময়
- [ ] রমজান ক্যালেন্ডার
- [ ] দোয়া এবং তাসবিহ এর কালেকশন বৃদ্ধি
- [ ] থিম সুইচার (ডার্ক/লাইট মোড)
- [ ] বিভিন্ন ভাষা সাপোর্ট

## 🤝 Contributing

কোনো বাগ রিপোর্ট করতে বা নতুন ফিচার সাজেস্ট করতে ইস্যু ওপেন করুন। পুল রিকুয়েস্টও স্বাগত জানানো হয়।

## 📄 License

এই প্রোজেক্টটি MIT লাইসেন্সের অধীনে প্রকাশিত।

## 👥 Credits

- **Design Inspiration**: ইসলামিক আর্ট এবং রমজান থিম
- **Icons**: React Icons এবং Font Awesome
- **Fonts**: Google Fonts (Hind Siliguri)

## 📞 Contact

প্রোজেক্ট সম্পর্কে কোনো প্রশ্ন থাকলে ইস্যু সেকশনে জানাতে পারেন।

---

**রমজান মোবারক!** 🌙✨
