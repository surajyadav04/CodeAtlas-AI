"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: authError } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message || "Failed to log in.");
    } else if (data) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0C0A09]">
      <div className="w-full max-w-md p-8 bg-[#121110] border border-[#2C2825] rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-[#F3E4C9] mb-6 text-center">Welcome Back</h1>
        
        {error && (
          <div className="mb-4 p-3 rounded bg-red-950/50 border border-red-900/50 text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#A77F60] mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#0C0A09] border border-[#2C2825] rounded-lg focus:outline-none focus:border-[#8A5F41] text-[#F3E4C9]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A77F60] mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#0C0A09] border border-[#2C2825] rounded-lg focus:outline-none focus:border-[#8A5F41] text-[#F3E4C9]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-[#8A5F41] hover:bg-[#A77F60] text-[#0C0A09] font-bold rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="w-1/5 border-b border-[#2C2825]"></span>
          <span className="text-xs text-center text-[#8e9289] uppercase">or</span>
          <span className="w-1/5 border-b border-[#2C2825]"></span>
        </div>

        <button
          onClick={async () => {
            await authClient.signIn.social({ 
              provider: "github",
              callbackURL: "/analyze"
            });
          }}
          className="w-full mt-6 py-2 px-4 bg-[#111210] hover:bg-[#1a1b18] border border-[#2C2825] text-[#e3e2de] font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Continue with GitHub
        </button>

        <p className="mt-6 text-center text-sm text-[#8e9289]">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#A77F60] hover:text-[#F3E4C9] transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
