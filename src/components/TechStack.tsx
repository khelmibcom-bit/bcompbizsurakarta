"use client";

const tech = [
  { name: "Next.js", cat: "Framework" }, { name: "React", cat: "UI" }, { name: "TypeScript", cat: "Language" },
  { name: "Tailwind CSS", cat: "Styling" }, { name: "Prisma", cat: "ORM" }, { name: "PostgreSQL", cat: "Database" },
  { name: "Neon", cat: "Serverless DB" }, { name: "NextAuth", cat: "Auth" }, { name: "PM2", cat: "Process" },
  { name: "Capacitor", cat: "Mobile" }, { name: "Zod", cat: "Validation" }, { name: "Vitest", cat: "Testing" },
  { name: "Gemini AI", cat: "AI" }, { name: "Claude AI", cat: "AI" }, { name: "OpenAI", cat: "AI" }, { name: "Grok", cat: "AI" },
];

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="container-tech">
        <div className="text-center mb-12">
          <span className="label block mb-4">Tech Stack</span>
          <h2 className="heading-lg">Teknologi yang <span className="text-gradient">Kami Gunakan</span></h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t) => (
            <div key={t.name} className="px-4 py-2.5 border border-border bg-bg-card hover:border-accent transition-all duration-300 group">
              <span className="text-sm font-medium text-text group-hover:text-accent transition-colors">{t.name}</span>
              <span className="text-xs text-text-muted ml-2">{t.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
