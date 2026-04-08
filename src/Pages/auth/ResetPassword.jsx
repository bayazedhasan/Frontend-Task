import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { Eye, EyeOff, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state?.token || "";

  const [form, setForm] = useState({ password: "", password_confirmation: "" });
  const [show, setShow] = useState({ password: false, confirm: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await resetPassword(form.password, form.password_confirmation, token);
      toast.success("Password reset successfully! Please log in.");
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || "Reset failed. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0c10] px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#7eba33]/15 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-sm"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#7eba33]/15 border border-[#7eba33]/30 mb-4">
              <Lock className="w-8 h-8 text-[#7eba33]" />
            </div>
            <h1 className="text-2xl font-bold text-white">Reset Password</h1>
            <p className="text-slate-400 text-sm mt-1">Choose a strong new password</p>
          </div>

          {error && (
            <div className="mb-4 bg-red-500/15 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {["password", "password_confirmation"].map((field) => (
              <div key={field}>
                <label className="text-xs text-slate-400 mb-1.5 block capitalize">
                  {field === "password" ? "New Password" : "Confirm Password"}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type={show[field === "password" ? "password" : "confirm"] ? "text" : "password"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-10 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#7eba33]/60 transition"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShow((p) => ({
                        ...p,
                        [field === "password" ? "password" : "confirm"]:
                          !p[field === "password" ? "password" : "confirm"],
                      }))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
                  >
                    {show[field === "password" ? "password" : "confirm"] ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7eba33] to-[#689c29] hover:from-[#689c29] hover:to-[#5c8a24] text-white font-semibold text-sm transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 mt-2 shadow-lg shadow-[#7eba33]/20"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Reset Password
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
