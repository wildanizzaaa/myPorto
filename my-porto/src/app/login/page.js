"use client";

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('myporto_isLoggedIn', 'true');
    router.push('/cms');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-amber-50 via-white to-sky-50">
      <div className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative hidden lg:block bg-slate-900 p-10 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.25),transparent_35%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300">MyPorto</p>
                <h1 className="mt-6 text-4xl font-bold leading-tight">
                  Welcome back
                </h1>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm text-slate-300">"Design with discipline, build with clarity, secure with awareness."</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-900">
                    W
                  </div>
                  <div>
                    <p className="font-semibold">Wildan</p>
                    <p className="text-sm text-slate-300">Cyber Security & Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-7 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="mb-8 text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Login</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Sign in to your account</h2>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <a href="#" className="text-sm font-medium text-sky-600 hover:text-sky-500">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 px-4 py-3 text-base font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  Login
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span className="bg-white px-2">Or continue with</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                    Google
                  </button>
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                    GitHub
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-slate-600">
                Don&apos;t have an account?{' '}
                <a href="#" className="font-semibold text-sky-600 hover:text-sky-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
