# Welcome to the Fitness & E-commerce Frontend 🚀

This is a modern, high-performance, and fully animated Frontend React project designed for fitness enthusiasts and e-commerce. It features a stunning glassmorphic UI, a comprehensive authentication system, and buttery-smooth scroll animations.

![React](https://img.shields.io/badge/react-19.2.4-blue?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/tailwindcss-%5E4.2.2-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer](https://img.shields.io/badge/framer--motion-12.38.0-blueviolet?style=for-the-badge&logo=framer)
![Vite](https://img.shields.io/badge/vite-8.0-yellow?style=for-the-badge&logo=vite)

---

## 🌟 Key Features

1. **Complete Authentication Flow**
   - Registration, Email OTP Verification, Login, Forgot Password, and Reset Password pages.
   - Built with top-tier UI: Blur backdrops, interactive icons, hover states, and staggered entrances.
   - Fully interactive logic using `AuthContext` (currently using `localStorage` for rapid prototyping with no external API dependency).

2. **Silky Smooth Global Animations** 
   - Powered by **Framer Motion**.
   - Custom `whileInView` staggered scroll animations on the Home Page (`ProductCard`, `Storis`, `Train` sections).
   - "App-like" page transition entrances.

3. **Premium Themed Aesthetic**
   - Deep Black (`#0b0c10`) & Vibrant Green (`#7eba33`) branded UI.
   - Custom Glassmorphism UI cards with beautifully mapped shadows.
   - Overhauled `react-hot-toast` notifications integrated directly into the brand theme.
   - Unique AI-generated complex HTML cut-outs rendered seamlessly in the Hero section.

4. **Fully Responsive Layout**
   - Optimized for Mobile, Tablet, and Desktop.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 + DaisyUI
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons
- **Notifications:** React Hot Toast
- **HTTP Client:** Axios

---

## 💻 Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

Ensure you have Node.js installed (v18+ recommended).

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository_url>
   ```

2. **Navigate into the directory**:
   ```bash
   cd Frontend-Task
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

---

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, ShardHeading, ProtectedRoute)
├── context/             # Global Context providers (e.g., AuthContext.jsx)
├── hook/                # Custom React Hooks
├── Pages/               # Primary Page views (Hero, Home, ProductCard, Storis, etc.)
│   └── auth/            # Authentication Pages (Login, Register, VerifyOtp, etc.)
├── Root/                # Main layout wrapper housing `<Outlet>`
├── assets/              # Static files and images
├── index.css            # Global Tailwind entrypoint
└── main.jsx             # React DOM injection and App Routing
```

---

## 💡 Notes for Future Development

- **Backend Integration:** The `AuthContext.jsx` currently intercepts API calls and mimics them with `localStorage` for testing without server downtime. To connect the real live API, simply uncomment the `axios` calls within that context file.
- **Protected Routes:** Use the `<ProtectedRoute>` wrapper inside your routing (`main.jsx`) whenever building a strict member-only page (e.g. User Dashboard). 
