import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Layanan Bcompbiz | Jasa Software Development",
  description:
    "Layanan pengembangan perangkat lunak Bcompbiz: AI Development, Web Application, Mobile Development, Database & Backend, Performance Optimization, dan Security.",
  alternates: { canonical: "https://khelmi.biz.id/layanan" },
};

const services = [
  {
    num: "01",
    title: "Kecerdasan Buatan (AI)",
    description:
      "Integrasi kecerdasan buatan yang cerdas untuk analisis data, prediksi, dan automasi. Kami mendukung multiple AI engine seperti Gemini, Claude, OpenAI, dan Grok untuk memberikan solusi AI yang tepat untuk kebutuhan bisnis Anda.",
    features: [
      "Multi-AI engine integration",
      "Natural Language Processing (NLP)",
      "Computer Vision & OCR",
      "Predictive Analytics",
      "AI Chat & Virtual Assistant",
      "Machine Learning Pipeline",
    ],
    tech: ["Gemini AI", "Claude AI", "OpenAI", "Grok", "TensorFlow", "Python"],
  },
  {
    num: "02",
    title: "Web Application",
    description:
      "Aplikasi web modern dengan teknologi terkini. Server-side rendering, performa optimal, dan SEO-friendly. Dari landing page hingga dashboard kompleks, kami bangun dengan standar industri tertinggi.",
    features: [
      "Server-Side Rendering (SSR)",
      "Progressive Web App (PWA)",
      "Responsive Design",
      "SEO Optimization",
      "Real-time Data",
      "API Integration",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Aplikasi mobile cross-platform dengan Capacitor. Deploy ke Play Store dan App Store dari satu codebase. Performa native dengan development cost yang efisien.",
    features: [
      "Cross-platform (iOS & Android)",
      "Native Performance",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
      "OTA Updates",
    ],
    tech: ["Capacitor", "React Native", "TypeScript", "Firebase"],
  },
  {
    num: "04",
    title: "Database & Backend",
    description:
      "Arsitektur backend yang robust dengan PostgreSQL, Prisma ORM, dan Neon serverless. Skalabel, aman, dan siap untuk traffic tinggi.",
    features: [
      "Database Design & Migration",
      "REST & GraphQL API",
      "Authentication & Authorization",
      "Caching Strategy",
      "Background Jobs",
      "Microservices Architecture",
    ],
    tech: ["PostgreSQL", "Prisma", "Neon", "Redis", "Node.js"],
  },
  {
    num: "05",
    title: "Performa & Optimasi",
    description:
      "Core Web Vitals optimal, lazy loading, caching strategy, dan CDN. Website cepat adalah standar kami, bukan fitur tambahan.",
    features: [
      "Core Web Vitals Optimization",
      "Image Optimization (WebP/AVIF)",
      "Code Splitting & Tree Shaking",
      "CDN Configuration",
      "Database Query Optimization",
      "Load Testing",
    ],
    tech: ["Lighthouse", "PageSpeed Insights", "WebPageTest", "CDN"],
  },
  {
    num: "06",
    title: "Keamanan",
    description:
      "Autentikasi JWT, rate limiting, input validation, dan security headers. Keamanan berlapis di setiap layer aplikasi.",
    features: [
      "JWT Authentication",
      "OAuth 2.0 Integration",
      "Rate Limiting",
      "Input Validation & Sanitization",
      "Security Headers (CSP, HSTS)",
      "Vulnerability Scanning",
    ],
    tech: ["NextAuth", "Zod", "OWASP", "ModSecurity"],
  },
];

export default function LayananPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container-tech">
          <h1 className="heading-xl mb-4">
            Layanan <span className="text-gradient">Kami</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mb-12">
            Stack teknologi modern dan praktik terbaik industri yang kami terapkan di setiap produk.
          </p>

          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.num} className="card-tech p-6 md:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <span className="font-mono text-sm text-accent block mb-2">{s.num}</span>
                    <h2 className="heading-md mb-3">{s.title}</h2>
                    <p className="text-text-secondary leading-relaxed mb-4">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-mono text-text-secondary border border-border rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="label mb-4">Yang Kami Lakukan</h3>
                    <div className="space-y-0">
                      {s.features.map((f) => (
                        <div key={f} className="py-2.5 border-b border-border last:border-0 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-sm text-text">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
