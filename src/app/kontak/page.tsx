import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontak Bcompbiz | Hubungi Kami",
  description:
    "Hubungi Bcompbiz untuk konsultasi software development. WhatsApp: 0812-2791-6969. Email: cs@bcomp-online.id. Lokasi: Karanganyar, Surakarta.",
  alternates: { canonical: "https://khelmi.biz.id/kontak" },
};

export default function KontakPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container-tech">
          <h1 className="heading-xl mb-4">
            Hubungi <span className="text-gradient">Kami</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mb-12">
            Tertarik bekerja sama? Jangan ragu untuk menghubungi kami melalui channel di bawah ini.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <a href="mailto:cs@bcomp-online.id" className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-text font-medium group-hover:text-accent transition-colors">cs@bcomp-online.id</div>
                  <div className="text-sm text-text-muted">Email</div>
                </div>
              </a>

              <a href="https://wa.me/6281227916969" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors">
                  <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-text font-medium group-hover:text-accent transition-colors">0812-2791-6969</div>
                  <div className="text-sm text-text-muted">WhatsApp</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-text font-medium">Cluster Grand Permata Blok Ruby No 70</div>
                  <div className="text-sm text-text-muted">Gajahan, Karanganyar, Surakarta 57716</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-text font-medium">Senin - Sabtu, 08:00 - 17:00 WIB</div>
                  <div className="text-sm text-text-muted">Jam Operasional</div>
                </div>
              </div>
            </div>

            {/* Maps + Links */}
            <div className="space-y-6">
              <div className="border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1!2d110.8243!3d-7.5755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzQnMzEuOCJTIDExMMKwNDknMjcuNSJF!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Lokasi Bcompbiz"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Family Health AI", url: "health.khelmi.biz.id", href: "https://health.khelmi.biz.id" },
                  { name: "Ahli Investasi", url: "trade.khelmi.biz.id", href: "https://trade.khelmi.biz.id" },
                  { name: "Bcompbiz", url: "bcomp-online.id", href: "https://bcomp-online.id" },
                ].map((p) => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="card-tech p-4 group">
                    <div className="text-sm font-medium text-text group-hover:text-accent transition-colors">{p.name}</div>
                    <div className="text-xs text-text-muted">{p.url}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
