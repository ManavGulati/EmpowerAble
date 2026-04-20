import { useState } from "react";

const NGOS = [
  {
    id: 4,
    name: "IDEA",
    category: "Education & Inclusion",
    location: "New Delhi",
    desc: "Inclusive Divyangjan Entrepreneur Association. Promoting inclusive education and accessibility for all.",
    contact: "contact@idea.org",
    emoji: "💡"
  },
  {
    id: 1,
    name: "Enable India",
    category: "Employment",
    location: "Bangalore",
    desc: "Helping people with disabilities gain skills and employment.",
    contact: "contact@enableindia.org",
    emoji: "🚀"
  },
  {
    id: 2,
    name: "Sense International",
    category: "Deafblind Support",
    location: "Delhi",
    desc: "Supporting deafblind individuals through education and training.",
    contact: "info@senseint.org",
    emoji: "🤲"
  },
  {
    id: 3,
    name: "ADAPT India",
    category: "Rehabilitation",
    location: "Mumbai",
    desc: "Providing education, therapy, and advocacy for disabilities.",
    contact: "info@adaptindia.org",
    emoji: "♿"
  },
];

const STARS = Array.from({ length: 100 }, (_, i) => ({
  id: i, top: Math.random() * 100, left: Math.random() * 100,
  size: Math.random() * 2 + 0.5, op: Math.random() * 0.6, dur: Math.random() * 4 + 2,
}));

export default function NGO() {
  const [search, setSearch] = useState("");
  const [selectedNGO, setSelectedNGO] = useState<any>(null);

  const filtered = NGOS.filter(n =>
    n.name.toLowerCase().includes(search.toLowerCase()) ||
    n.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ 
      background: "linear-gradient(160deg,#060c1a 0%,#0a1628 40%,#0d1e3a 75%,#060c1a 100%)",
      minHeight: "100vh", position: "relative", overflowX: "hidden" 
    }}>
      
      <style>{`
        @keyframes twinkle{0%,100%{opacity:var(--op)}50%{opacity:calc(var(--op)*0.25)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .fu-ngo { animation: fadeUp 0.8s ease forwards; }
      `}</style>

      {/* ⭐ STAR BACKGROUND (Same as Community) */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {STARS.map(s => (
          <div key={s.id} style={{ 
            position: "absolute", top: s.top + "%", left: s.left + "%",
            width: s.size, height: s.size, borderRadius: "50%", background: "#fff",
            "--op": s.op, opacity: s.op, animation: `twinkle ${s.dur}s ease-in-out infinite` 
          } as any} />
        ))}
      </div>

      {/* ════════ HERO ════════ */}
      <section style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "120px 24px 60px", textAlign: "center" }}>
        
        <div className="fu-ngo" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 20px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.13)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 36, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#818cf8" }} />
          Resource Directory
        </div>

        <h1 className="fu-ngo" style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(50px, 9vw, 120px)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.035em", color: "#fff", margin: "0 0 28px" }}>
          NGO <br />
          <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)", color: "transparent" }}>SUPPORT</span>
        </h1>

        <p className="fu-ngo" style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "rgba(255,255,255,0.45)", maxWidth: 600, lineHeight: 1.6, margin: "0 auto 48px", fontFamily: "system-ui,sans-serif" }}>
          Connecting you with organizations dedicated to accessibility, rehabilitation, and disability advocacy across India.
        </p>

        {/* SEARCH (Glassmorphism) */}
        <div className="fu-ngo" style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
          <input
            placeholder="Search NGOs or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ 
              width: "100%", padding: "18px 24px", borderRadius: "100px", 
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff", outline: "none", backdropFilter: "blur(12px)", fontSize: "16px"
            }}
          />
        </div>
      </section>

      {/* ════════ NGO LISTING ════════ */}
      <section style={{ position: "relative", zIndex: 1, padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "16px" }}>
          {filtered.map((ngo) => (
            <div
              key={ngo.id}
              style={{ 
                display: "flex", gap: "20px", padding: "24px", borderRadius: "24px", 
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)", transition: "all 0.3s ease",
                alignItems: "center", flexWrap: "wrap"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <div style={{ 
                width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0
              }}>
                {ngo.emoji}
              </div>

              <div style={{ flex: 1, minWidth: "250px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px", fontFamily: "'Georgia', serif" }}>{ngo.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5, marginBottom: "12px" }}>{ngo.desc}</p>
                
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "rgba(129,140,248,0.15)", border: "1px solid rgba(129,140,248,0.3)", color: "#a5b4fc", padding: "3px 10px", borderRadius: 20 }}>📍 {ngo.location}</span>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", padding: "3px 10px", borderRadius: 20 }}>🏷️ {ngo.category}</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => setSelectedNGO(ngo)}
                  style={{ 
                    padding: "10px 24px", borderRadius: "100px", background: "#fff", color: "#0a1628",
                    fontWeight: 700, fontSize: "13px", cursor: "pointer", border: "none"
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ CONTACT MODAL (Glassmorphism) ════════ */}
      {selectedNGO && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
          <div style={{ 
            width: "100%", maxWidth: "400px", padding: "40px", borderRadius: "32px", 
            background: "rgba(15,23,42,0.9)", border: "1px solid rgba(255,255,255,0.1)",
            position: "relative", textAlign: "center"
          }}>
            <button onClick={() => setSelectedNGO(null)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 20 }}>✕</button>
            <div style={{ fontSize: 50, marginBottom: 20 }}>{selectedNGO.emoji}</div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 12 }}>{selectedNGO.name}</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 30 }}>{selectedNGO.desc}</p>
            <a href={`mailto:${selectedNGO.contact}`} style={{ display: "block", width: "100%", padding: "15px", borderRadius: "100px", background: "linear-gradient(135deg,#6366f1,#a855f7)", color: "#fff", fontWeight: 700, textDecoration: "none", transition: "transform 0.2s" }}>
              Send Inquiry Email
            </a>
          </div>
        </div>
      )}

      {/* ════════ WATERMARK ════════ */}
      <div style={{ textAlign: "center", padding: "40px 0 100px", opacity: 0.05, userSelect: "none", pointerEvents: "none" }}>
        <h2 style={{ fontSize: "10vw", fontWeight: 900, color: "#fff", margin: 0 }}>SUPPORT</h2>
      </div>
    </div>
  );
}