<div align="center">

# 🗺️ Ganjineh Street (گنجینه‌استریت)

**Interactive Location-Based Treasure-Hunt & Gamified Puzzle Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/Material_UI-5.15_(RTL)-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)

🌐 **Live Platform:** [ganjinehstreet.ir](https://ganjinehstreet.ir)

</div>

---

## 📖 Overview

**Ganjineh Street (گنجینه‌استریت)** is a full-featured, right-to-left (RTL) web application designed for hosting live, city-wide treasure hunts and multi-stage puzzle missions. Players join active quests, progress sequentially through location-linked riddles, unlock timed hints, and compete in real time to claim the final prize.

---

## ✨ Key Features

- **🗺️ Multi-Stage Mission & Level Engine:** Dynamic routing (`/mission/[missionID]/levels/[levelID]`) with sequential level progression guards, Google Maps geolocation coordinates (`lat`/`lnt`), and visual clues.
- **⏱️ Real-Time Hint Countdown Timer:** Synchronized per-level countdown that automatically unlocks contextual hints once the level timer expires.
- **🎉 Interactive Winner & Completion Flows:** Celebratory completion screens powered by `react-confetti`, step-by-step onboarding, and instant answer verification.
- **🔐 Cookie-Backed Authentication & Session State:** Seamless sign-up, sign-in, and persistent player sessions managed via Redux Toolkit (`ganjinehSlice`) and Axios credentials.
- **🎨 Full RTL Architecture & Motion UI:** Custom Persian typography (`IRANSansX` & `Aviny`), Emotion + `stylis-plugin-rtl` directional styling for Material UI components, Tailwind CSS layout utilities, and scroll-triggered **GSAP** animations (`AnimatedBox`).
- **🛠️ Mission Administration Panel:** Built-in admin interface (`/admin-page`) with Jalaali calendar integration (`moment-jalaali`) for scheduling and managing active games.

---

## 🏗️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (Pages Router) + [React 18](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) (`@reduxjs/toolkit`, `react-redux`) |
| **Styling & RTL** | [Tailwind CSS](https://tailwindcss.com/), [MUI v5](https://mui.com/), `@emotion/cache`, `stylis-plugin-rtl` |
| **Animation** | [GSAP 3](https://gsap.com/) (ScrollTrigger) + `react-confetti` |
| **Networking & Dates** | `axios`, `moment`, `moment-jalaali` |

---

## 📂 Project Structure

```text
src/
├── app/
│   └── store.ts                 # Redux Toolkit store configuration & typed hooks
├── components/
│   ├── About.tsx                # About section with scroll-triggered animations
│   ├── ActiveGames.tsx          # Live & upcoming treasure-hunt missions
│   ├── AnimatedBox.tsx          # Reusable GSAP ScrollTrigger wrapper
│   ├── ErrorMessage.tsx         # RTL alert feedback component
│   ├── HowToPlay.tsx            # 5-step interactive onboarding guide
│   ├── Navbar.tsx               # Responsive RTL navigation bar & auth state
│   ├── SuccessMessage.tsx       # Stage completion banner
│   └── WinnerPage.tsx           # Final prize winner celebration screen
├── config/
│   └── api.ts                   # Axios base configuration & credential options
├── features/
│   └── ganjinehSlice.ts         # Global Redux slice (missions, levels, auth, loading)
├── pages/
│   ├── index.tsx                # Landing page (Hero, ActiveGames, HowToPlay, About)
│   ├── sign-in.tsx              # Player login page
│   ├── sign-up.tsx              # Player registration page
│   ├── contact-us.tsx           # Support & contact page
│   ├── admin-page.tsx           # Game & mission management dashboard
│   └── mission/[missionID]/
│       ├── index.tsx            # Mission overview & entry point
│       └── levels/
│           ├── index.tsx        # Mission level selector
│           └── [levelID].tsx    # Active puzzle view, hint timer & answer submission
└── styles/
    └── globals.css              # Tailwind directives & custom RTL font-face rules
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/salehghari/ganjineh-street.git
cd ganjineh-street
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 👥 Contributors

- **Saleh Ghari** ([@salehghari](https://github.com/salehghari))
- **Arian Pashae** ([@ArianPashae](https://github.com/ArianPashae))
