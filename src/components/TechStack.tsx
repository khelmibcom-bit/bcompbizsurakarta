"use client";

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Prisma", category: "ORM" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Neon", category: "Serverless DB" },
  { name: "NextAuth", category: "Auth" },
  { name: "PM2", category: "Process Manager" },
  { name: "Capacitor", category: "Mobile" },
  { name: "Zod", category: "Validation" },
  { name: "Vitest", category: "Testing" },
  { name: "Gemini AI", category: "AI Engine" },
  { name: "Claude AI", category: "AI Engine" },
  { name: "OpenAI", category: "AI Engine" },
  { name: "Grok", category: "AI Engine" },
];

export default function TechStack() {
  return (
    <section className="section-editorial">
      <div className="container-editorial">
        <div className="text-center mb-12 md:mb-16">
          <span className="label-editorial block mb-4">Tech Stack</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
            Teknologi yang <span className="italic text-gold">Kami Gunakan</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="px-4 md:px-6 py-2.5 md:py-3 border border-border bg-white hover:border-gold hover:bg-cream-dark transition-all duration-300 group"
            >
              <span className="text-sm font-medium text-navy group-hover:text-gold transition-colors">
                {tech.name}
              </span>
              <span className="text-xs text-warm-gray ml-2">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
