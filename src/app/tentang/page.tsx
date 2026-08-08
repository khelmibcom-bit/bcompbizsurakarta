import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tentang Bcompbiz | Sejarah & Visi Misi",
  description:
    "Kenali Bcompbiz lebih dekat. Perusahaan teknologi dari Surakarta yang berdiri sejak 2000, melayani 1.500+ klien dengan 5.000+ unit produk terpasang.",
  alternates: { canonical: "https://khelmi.biz.id/tentang" },
};

export default function TentangPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container-tech">
          <h1 className="heading-xl mb-8">
            Tentang <span className="text-gradient">Bcompbiz</span>
          </h1>

          <div className="max-w-3xl space-y-8">
            <section>
              <h2 className="heading-md mb-4">Sejarah</h2>
              <p className="text-text-secondary leading-relaxed">
                Bcompbiz didirikan pada tahun 2000 di Surakarta, Jawa Tengah. Bermula dari
                usaha penyedia solusi digital, kami telah berkembang menjadi perusahaan teknologi
                yang melayani lebih dari 1.500 klien dengan 5.000+ unit produk terpasang di
                seluruh Indonesia.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-4">Visi</h2>
              <p className="text-text-secondary leading-relaxed">
                Menjadi studio pengembangan perangkat lunak terdepan di Indonesia yang
                menghadirkan solusi digital inovatif berbasis kecerdasan buatan untuk
                memberdayakan bisnis dan individu.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-4">Misi</h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Membangun produk digital berkualitas tinggi dengan teknologi terkini
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Mengintegrasikan kecerdasan buatan untuk solusi yang lebih cerdas
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Memberikan pengalaman pengguna yang intuitif dan performa optimal
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Menjaga standar keamanan dan kualitas kode tertinggi
                </li>
              </ul>
            </section>

            <section>
              <h2 className="heading-md mb-4">Nilai-Nilai Kami</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Inovasi", desc: "Terus mengeksplorasi teknologi terdepan" },
                  { title: "Kualitas", desc: "Kode bersih, arsitektur terstruktur" },
                  { title: "Integritas", desc: "Transparan dan bertanggung jawab" },
                  { title: "Kolaborasi", desc: "Bekerja sama untuk hasil terbaik" },
                ].map((v) => (
                  <div key={v.title} className="card-tech p-5">
                    <h3 className="font-semibold text-text mb-1">{v.title}</h3>
                    <p className="text-sm text-text-secondary">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
