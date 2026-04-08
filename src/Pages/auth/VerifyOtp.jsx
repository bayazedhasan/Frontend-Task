import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { ShieldCheck, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const OTP_LENGTH = 6;

const VerifyOtp = () => {
  const { verifyOtp, resendOtp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (!email) navigate("/register");
  }, [email, navigate]);
  useEffect(() => {
    if (countdown <= 0) return;
    const t = setTimeout(() => setCountdown((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

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
      await verifyOtp(email, code);
      toast.success("Email verified! Please log in.");
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || "Invalid OTP. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      await resendOtp(email);
      toast.success("OTP resent to your email!");
      setCountdown(60);
      setOtp(Array(OTP_LENGTH).fill(""));
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to resend OTP.";
      toast.error(msg);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0c10] px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#7eba33]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#7eba33]/15 rounded-full blur-3xl" />
      </div>

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
            <h1 className="text-2xl font-bold text-white">Verify Your Email</h1>
            <p className="text-slate-400 text-sm mt-2">
              We sent a {OTP_LENGTH}-digit code to
            </p>
            <p className="text-[#8ac541] text-sm font-medium truncate">{email}</p>
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
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7eba33] to-[#689c29] hover:from-[#689c29] hover:to-[#5c8a24] text-white font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#7eba33]/20"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Verify & Continue"
              )}
            </button>
          </form>
          <div className="text-center mt-6">
            {countdown > 0 ? (
              <p className="text-sm text-slate-400">
                Resend code in{" "}
                <span className="text-[#7eba33] font-semibold tabular-nums">{countdown}s</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                disabled={resendLoading}
                className="text-sm text-[#7eba33] hover:text-[#8ac541] transition font-medium flex items-center gap-1.5 mx-auto"
              >
                {resendLoading ? (
                  <span className="w-4 h-4 border-2 border-[#7eba33]/40 border-t-[#7eba33] rounded-full animate-spin" />
                ) : (
                  <RefreshCcw className="w-3.5 h-3.5" />
                )}
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyOtp;
