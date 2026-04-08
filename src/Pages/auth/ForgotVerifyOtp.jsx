import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const OTP_LENGTH = 6;

const ForgotVerifyOtp = () => {
  const { forgotVerifyOtp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const handleChange = (value, idx) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[idx] = value;
    setOtp(next);
    setError("");
    if (value && idx < OTP_LENGTH - 1) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    const next = [...otp];
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    setOtp(next);
    inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < OTP_LENGTH) {
      setError(`Please enter all ${OTP_LENGTH} digits.`);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const data = await forgotVerifyOtp(email, code);
      const token = data?.data?.token || data?.token;
      toast.success("OTP verified! Set your new password.");
      navigate("/reset-password", { state: { token, email } });
    } catch (err) {
      const msg = err.response?.data?.message || "Invalid OTP.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0c10] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#7eba33]/15 border border-[#7eba33]/30 mb-4">
              <ShieldCheck className="w-8 h-8 text-[#7eba33]" />
            </div>
            <h1 className="text-2xl font-bold text-white">Verify Reset OTP</h1>
            <p className="text-slate-400 text-sm mt-2">
              Enter the code sent to{" "}
              <span className="text-[#8ac541] font-medium">{email}</span>
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-500/15 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 justify-center mb-6" onPaste={handlePaste}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputsRef.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-11 h-14 text-center text-xl font-bold rounded-xl border transition-all duration-200 bg-white/5 text-white focus:outline-none focus:scale-105 ${
                    digit
                      ? "border-[#7eba33] shadow-lg shadow-[#7eba33]/20"
                      : "border-white/15 focus:border-[#7eba33]/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7eba33] to-[#689c29] hover:from-[#689c29] hover:to-[#5c8a24] text-white font-semibold text-sm transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-[#7eba33]/20"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Verify Code"
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotVerifyOtp;
