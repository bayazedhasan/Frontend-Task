import { createContext, useContext, useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setLoading(false);
      return;
    }
    await delay(500); 
    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const foundUser = users.find((u) => u.token === token);

    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("auth_token");
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (email, password, remember_me = false) => {
    await delay(800);
    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      if (!foundUser.verified) {
        throw { response: { data: { message: "Account not verified. Please verify OTP first." } } };
      }
      const token = `mock-token-${Date.now()}`;
      foundUser.token = token;
      localStorage.setItem("mock_users", JSON.stringify(users));

      localStorage.setItem("auth_token", token);
      setUser(foundUser);
      setIsAuthenticated(true);
      return { token, user: foundUser };
    }
    throw { response: { data: { message: "Invalid email or password." } } };
  };

  const logout = async () => {
    await delay(500);
    const token = localStorage.getItem("auth_token");
    if (token) {
      const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
      const foundUser = users.find((u) => u.token === token);
      if (foundUser) {
        foundUser.token = null;
        localStorage.setItem("mock_users", JSON.stringify(users));
      }
    }
    localStorage.removeItem("auth_token");
    setUser(null);
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
  };

  const register = async (formData) => {
    await delay(1000);
    const obj = {};
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }

    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    if (users.find(u => u.email === obj.email)) {
      throw { response: { data: { message: "Email already exists." } } };
    }


    obj.verified = false;
    obj.otp = "123456";
    users.push(obj);
    localStorage.setItem("mock_users", JSON.stringify(users));

    setTimeout(() => {
      toast("Email delivery simulated. Your OTP is: 123456", { 
        duration: 8000, 
        icon: '📨',
        style: { border: '1px solid #7eba33', background: '#0b0c10' }
      });
    }, 1000);

    return { message: "Success" };
  };

  const verifyOtp = async (email, otp) => {
    await delay(800);
    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const foundUser = users.find((u) => u.email === email);

    if (!foundUser) {
      throw { response: { data: { message: "User not found." } } };
    }

    if (foundUser.otp === otp) {
      foundUser.verified = true;
      localStorage.setItem("mock_users", JSON.stringify(users));
      return { message: "Verified" };
    }
    throw { response: { data: { message: "Invalid OTP. Hint: it's 123456" } } };
  };

  const resendOtp = async (email) => {
    await delay(800);
    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const foundUser = users.find((u) => u.email === email);
    
    if (foundUser) {
      setTimeout(() => {
        toast("Email delivery simulated. Your OTP is: 123456", { 
          duration: 8000, 
          icon: '📨',
          style: { border: '1px solid #7eba33', background: '#0b0c10' }
        });
      }, 500);
      return { message: "OTP resent" };
    }
    throw { response: { data: { message: "Email not found." } } };
  };

  const forgotPassword = async (email) => {
    await delay(800);
    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const foundUser = users.find((u) => u.email === email);

    if (foundUser) {
      foundUser.forgotOtp = "654321";
      localStorage.setItem("mock_users", JSON.stringify(users));
      setTimeout(() => {
        toast("Password Reset Email. Your OTP is: 654321", { 
          duration: 8000, 
          icon: '🔐',
          style: { border: '1px solid #7eba33', background: '#0b0c10' }
        });
      }, 1000);
      return { message: "Sent" };
    }
    throw { response: { data: { message: "Email not found in mock DB." } } };
  };

  const forgotVerifyOtp = async (email, otp) => {
    await delay(800);
    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const foundUser = users.find((u) => u.email === email);

    if (foundUser && foundUser.forgotOtp === otp) {
      return { token: "mock-reset-token-xyz" };
    }
    throw { response: { data: { message: "Invalid Reset OTP. Hint: 654321" } } };
  };

  const resetPassword = async (password, password_confirmation, token) => {
    await delay(800);
    if (!token) throw { response: { data: { message: "Invalid reset token." } } };

    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const activeResetUser = users.find(u => u.forgotOtp);
    
    if (activeResetUser) {
      activeResetUser.password = password;
      activeResetUser.password_confirmation = password_confirmation;
      activeResetUser.forgotOtp = null; 
      localStorage.setItem("mock_users", JSON.stringify(users));
      return { message: "Reset success" };
    }
    throw { response: { data: { message: "Session expired or invalid." } } };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        logout,
        register,
        verifyOtp,
        resendOtp,
        forgotPassword,
        forgotVerifyOtp,
        resetPassword,
        fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
