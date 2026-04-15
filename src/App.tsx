import React, { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [role, setRole] = useState("disabled");

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div
          className="text-3xl tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          EmpowerAble<sup className="text-xs">®</sup>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm text-foreground">Home</a>
          <a className="text-sm text-muted-foreground hover:text-foreground transition">
            NGO Connect
          </a>
          <a className="text-sm text-muted-foreground hover:text-foreground transition">
            Skill Hub
          </a>
          <a className="text-sm text-muted-foreground hover:text-foreground transition">
            Community
          </a>
          <a className="text-sm text-muted-foreground hover:text-foreground transition">
            Marketplace
          </a>
        </div>

        {/* Login Button */}
        <button
          onClick={() => setOpen(true)}
          className="liquid-glass rounded-full px-6 py-2.5 hover:scale-[1.03] transition"
        >
          Login
        </button>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40">

        <h1
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2px] max-w-6xl animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Empowering{" "}
          <em className="not-italic text-muted-foreground">abilities</em>{" "}
          through connection, skills, and opportunity.
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          A unified platform connecting persons with disabilities to NGOs,
          skill development programs, and meaningful employment. Build
          independence, community, and opportunity — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-rise-delay-2">
          <button className="liquid-glass rounded-full px-10 py-4 hover:scale-[1.03] transition">
            Get Started
          </button>

          <button className="border border-border rounded-full px-10 py-4 hover:bg-white/10 transition">
            Explore NGOs
          </button>
        </div>

      </section>

      {/* LOGIN MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

          <div className="relative w-full max-w-md p-8 rounded-3xl liquid-glass border border-white/10 shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-5 text-muted-foreground hover:text-white text-lg"
            >
              ✕
            </button>

            {/* Title */}
            <h2
              className="text-3xl mb-6 text-center"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {tab === "login" ? "Welcome Back" : "Create Account"}
            </h2>

            {/* Tabs */}
            <div className="flex bg-white/5 rounded-full p-1 mb-6">
              <button
                onClick={() => setTab("login")}
                className={`flex-1 py-2 rounded-full text-sm transition ${
                  tab === "login"
                    ? "bg-white text-black"
                    : "text-muted-foreground"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setTab("signup")}
                className={`flex-1 py-2 rounded-full text-sm transition ${
                  tab === "signup"
                    ? "bg-white text-black"
                    : "text-muted-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Role Selector */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {["disabled", "ngo", "company"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`py-2 rounded-xl text-xs transition ${
                    role === r
                      ? "bg-white text-black"
                      : "bg-white/5 text-muted-foreground hover:bg-white/10"
                  }`}
                >
                  {r === "disabled"
                    ? "Disabled"
                    : r === "ngo"
                    ? "NGO"
                    : "Company"}
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-muted-foreground"
              />

              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-muted-foreground"
              />

              {tab === "signup" && (
                <input
                  type="text"
                  placeholder="Full name"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-muted-foreground"
                />
              )}

              <button className="liquid-glass py-3 rounded-full mt-2 hover:scale-[1.02] transition">
                {tab === "login" ? "Login" : "Create Account"}
              </button>
            </div>

            {/* Footer */}
            <p className="text-xs text-muted-foreground text-center mt-6">
  {tab === "login" ? (
    <>
      New here?{" "}
      <span
        onClick={() => setTab("signup")}
        className="text-white underline cursor-pointer hover:opacity-80"
      >
        Sign Up
      </span>
    </>
  ) : (
    <>
      Already have an account?{" "}
      <span
        onClick={() => setTab("login")}
        className="text-white underline cursor-pointer hover:opacity-80"
      >
        Login
      </span>
    </>
  )}
</p>

          </div>
        </div>
      )}
    </div>
  );
}