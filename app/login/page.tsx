"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiLock, FiMail, FiArrowRight } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-writer-powder/30 flex items-center justify-center p-4 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-writer-powder"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-writer-deep-blue text-white rounded-2xl mb-4 shadow-lg">
            <FiLock size={28} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-writer-deep-blue">Admin Access</h1>
          <p className="text-gray-500 mt-2">Sign in to manage your portfolio and services.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-writer-deep-blue mb-2">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-writer-sky-blue focus:border-transparent outline-none transition"
                placeholder="peace@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-writer-deep-blue mb-2">Password</label>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-writer-sky-blue focus:border-transparent outline-none transition"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-writer-deep-blue text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-writer-sky-blue transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
          >
            <span>{loading ? "Authenticating..." : "Login to Dashboard"}</span>
            {!loading && <FiArrowRight />}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2026 Peace Nwankpa. Protected Access.</p>
        </div>
      </motion.div>
    </div>
  );
}