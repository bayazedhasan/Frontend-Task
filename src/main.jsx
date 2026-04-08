import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from './context/AuthContext';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import VerifyOtp from './Pages/auth/VerifyOtp';
import ForgotPassword from './Pages/auth/ForgotPassword';
import ForgotVerifyOtp from './Pages/auth/ForgotVerifyOtp';
import ResetPassword from './Pages/auth/ResetPassword';
import Home from './Pages/Home';
import Root from './Root/Root';




const router = createBrowserRouter([
  { path: "/login",              element: <Login /> },
  { path: "/register",           element: <Register /> },
  { path: "/verify-otp",         element: <VerifyOtp /> },
  { path: "/forgot-password",    element: <ForgotPassword /> },
  { path: "/forgot-verify-otp",  element: <ForgotVerifyOtp /> },
  { path: "/reset-password",     element: <ResetPassword /> },

  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3500,
        style: {
          background: '#0b0c10',
          backdropFilter: 'blur(12px)',
          color: '#e2e8f0',
          border: '1px solid rgba(126, 186, 51, 0.3)',
          borderRadius: '12px',
          fontSize: '14px',
        },
        success: { iconTheme: { primary: '#7eba33', secondary: '#0b0c10' } },
        error: { iconTheme: { primary: '#ef4444', secondary: '#0b0c10' } },
      }}
    />
  </AuthProvider>
);
