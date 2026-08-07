"use client";

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Prisma", category: "ORM" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Neon", category: "Serverless DB" },
  { name: "NextAuth", category: "Authentication" },
  { name: "Vercel", category: "Deployment" },
  { name: "PM2", category: "Process Manager" },
  { name: "Capacitor", category: "Mobile" },
  { name: "Zod", category: "Validation" },
  { name: "Vitest", category: "Testing" },
  { name: "Playwright", category: "E2E Testing" },
  { name: "Gemini AI", category: "AI Engine" },
  { name: "Claude AI", category: "AI Engine" },
  { name: "OpenAI", category: "AI Engine" },
  { name: "Grok", category: "AI Engine" },
];

export default function TechStack() {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-neon-purple uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Teknologi yang{" "}
            <span className="gradient-text">Kami Gunakan</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2"
            >
              <span className="text-sm font-medium text-white">
                {tech.name}
              </span>
              <span className="text-xs text-slate-500">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
