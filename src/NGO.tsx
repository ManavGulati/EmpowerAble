import { useState } from "react";

export default function NGO() {
  const [search, setSearch] = useState("");

  const ngos = [
    {
      name: "Helping Hands NGO",
      category: "Employment",
      location: "Delhi",
      description: "Job opportunities and placement support",
    },
    {
      name: "CareAbility Foundation",
      category: "Medical",
      location: "Mumbai",
      description: "Rehabilitation and healthcare support",
    },
    {
      name: "SkillUp NGO",
      category: "Education",
      location: "Bangalore",
      description: "Skill development & training programs",
    },
  ];

  return (
    <div className="min-h-screen relative text-white px-6 py-10 overflow-hidden">

      {/* 🌌 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[#0b0f1a]" />

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-semibold">
          NGO Connect
        </h1>

        <p className="text-gray-400 mt-2">
          Find NGOs that provide jobs, training, and support for people with disabilities.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search NGOs, services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        />

        {/* FILTERS */}
        <div className="flex gap-3 mt-6 flex-wrap">
          {["All", "Employment", "Medical", "Education"].map((f) => (
            <button
              key={f}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition"
            >
              {f}
            </button>
          ))}
        </div>

        {/* NGO LIST */}
        <div className="flex flex-col gap-5 mt-10">

          {ngos.map((ngo, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-medium">{ngo.name}</h3>

              <p className="text-sm text-gray-400">
                {ngo.category} • {ngo.location}
              </p>

              <p className="text-sm mt-2 text-gray-300">
                {ngo.description}
              </p>

              <button className="mt-4 px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                Connect
              </button>
            </div>
          ))}

        </div>

        {/* INFO SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            How NGOs Help You
          </h2>

          <ul className="text-gray-400 space-y-2">
            <li>• Job opportunities (full-time, part-time, remote)</li>
            <li>• Skill development and training programs</li>
            <li>• Career guidance and interview support</li>
            <li>• Community and peer support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold">
            Want to partner as an NGO?
          </h2>

          <p className="text-gray-400 mt-2">
            Join our platform and help create opportunities.
          </p>

          <button className="mt-4 px-6 py-3 rounded-full bg-white text-black hover:scale-[1.02] transition">
            Register NGO
          </button>
        </div>

      </div>
    </div>
  );
}