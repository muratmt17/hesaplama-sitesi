import Link from "next/link";
import CalculatorSearch from "@/components/search/CalculatorSearch";
import { categories } from "@/data/categories";

const categoryIcons: Record<string, string> = {
  matematik: "∑",
  "tarih-zaman": "◷",
  finans: "₺",
  "maas-is": "₺",
  "saglik-yasam": "♡",
  "birim-donusturuculer": "⇄",
  "arac-seyahat": "◉",
  "ev-yasam": "⌂",
  egitim: "◇",
};

const categoryNumbers: Record<string, string> = {
  matematik: "01",
  "tarih-zaman": "02",
  finans: "03",
  "maas-is": "04",
  "saglik-yasam": "05",
  "birim-donusturuculer": "06",
  "arac-seyahat": "07",
  "ev-yasam": "08",
  egitim: "09",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030611] text-white">
      {/* Global atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[15%] top-[-250px] h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[-150px] top-[10%] h-[650px] w-[650px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute bottom-[-250px] left-[30%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
            maskImage:
              "radial-gradient(circle at 50% 20%, black, transparent 75%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/[0.08] bg-[#030611]/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-blue-500/5 text-xl font-bold text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.12)] transition duration-500 group-hover:rotate-6 group-hover:scale-105 group-hover:border-cyan-300/40">
              ∑
            </div>

            <div>
              <div className="text-sm font-black tracking-[0.22em]">
                HESAPLAMA
              </div>
              <div className="text-[10px] tracking-[0.35em] text-white/35">
                ARAÇLARI
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] px-4 py-2 text-xs text-cyan-200/70 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            ONLINE • ÜCRETSİZ
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-10">
          {/* Hero text */}
          <div className="relative z-20">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.045] px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-cyan-200 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]" />
              YENİ NESİL HESAPLAMA PLATFORMU
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Hesaplamanın
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                yeni boyutu.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Yüzdeden krediye, maaştan yakıta kadar ihtiyacınız olan
              hesaplamaları tek bir platformda keşfedin.
            </p>

            <div className="mt-9 max-w-xl rounded-[28px] border border-white/[0.12] bg-white/[0.055] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              <div className="px-5 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Ne hesaplamak istiyorsun?
              </div>

              <div className="rounded-[20px] border border-white/10 bg-[#02040b]/60 p-1">
                <CalculatorSearch />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-white/25">
              <span>● Üyelik yok</span>
              <span>● Kurulum yok</span>
              <span>● Ücretsiz</span>
            </div>
          </div>

          {/* 3D scene */}
          <div className="relative hidden h-[620px] lg:block [perspective:1400px]">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />

            {/* Large rotating rings */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 [transform:rotateX(65deg)_rotateZ(-20deg)]" />

            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 [transform:rotateX(68deg)_rotateZ(25deg)]" />

            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/10 [transform:rotateX(62deg)_rotateZ(70deg)]" />

            {/* Back glass panels */}
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[55px] border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-transparent shadow-[30px_40px_120px_rgba(0,0,0,0.5)] [transform:rotateX(20deg)_rotateY(-25deg)_rotateZ(8deg)] backdrop-blur-xl" />

            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[48px] border border-cyan-300/[0.12] bg-gradient-to-br from-cyan-300/[0.07] to-blue-500/[0.02] shadow-[0_0_100px_rgba(34,211,238,0.08)] [transform:rotateX(-16deg)_rotateY(20deg)_rotateZ(-8deg)] backdrop-blur-2xl" />

            {/* Central cube */}
            <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] [transform:rotateX(18deg)_rotateY(-28deg)_rotateZ(8deg)]">
              <div className="absolute inset-0 rounded-[42px] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/[0.14] via-blue-500/[0.08] to-violet-500/[0.12] shadow-[0_0_100px_rgba(34,211,238,0.16)] backdrop-blur-2xl" />

              <div className="absolute inset-[16px] rounded-[30px] border border-white/10 bg-[#070d1d]/85 shadow-[inset_0_0_50px_rgba(34,211,238,0.05)]">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="text-[70px] font-black leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    123
                  </div>

                  <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300/70">
                    CALCULATE
                  </div>

                  <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating percentage card */}
            <div className="absolute left-[2%] top-[18%] rounded-3xl border border-white/10 bg-white/[0.065] px-6 py-5 shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl [transform:rotateX(12deg)_rotateY(18deg)_rotateZ(-8deg)]">
              <div className="text-4xl font-black text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.3)]">
                %
              </div>
              <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                YÜZDE
              </div>
            </div>

            {/* Floating finance card */}
            <div className="absolute bottom-[14%] right-[0%] rounded-3xl border border-white/10 bg-white/[0.065] px-6 py-5 shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl [transform:rotateX(10deg)_rotateY(-20deg)_rotateZ(7deg)]">
              <div className="text-4xl font-black text-violet-300 drop-shadow-[0_0_18px_rgba(167,139,250,0.3)]">
                ₺
              </div>
              <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                FİNANS
              </div>
            </div>

            {/* Floating math card */}
            <div className="absolute right-[8%] top-[12%] rounded-3xl border border-white/10 bg-white/[0.065] px-5 py-4 shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl [transform:rotateX(15deg)_rotateY(-16deg)_rotateZ(8deg)]">
              <div className="text-xl font-bold text-blue-300">
                x² + y²
              </div>
              <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/25">
                MATEMATİK
              </div>
            </div>

            {/* Floating fuel card */}
            <div className="absolute bottom-[7%] left-[8%] rounded-3xl border border-white/10 bg-white/[0.065] px-5 py-4 shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl [transform:rotateX(10deg)_rotateY(18deg)_rotateZ(-5deg)]">
              <div className="text-xl font-bold text-emerald-300">
                6.4 L
              </div>
              <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/25">
                YAKIT
              </div>
            </div>

            {/* Orbit dots */}
            <div className="absolute left-[16%] top-[43%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,1)]" />
            <div className="absolute right-[17%] top-[48%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,1)]" />
            <div className="absolute bottom-[27%] left-[30%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(147,197,253,1)]" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300/60">
                Keşfet
              </div>

              <h2 className="scroll-title-3d text-3xl font-black tracking-tight sm:text-4xl">
                Hesaplama dünyası
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                Her ihtiyacınız için tasarlanmış hesaplama araçlarını
                keşfedin.
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              {categories.length} KATEGORİ
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="scroll-3d group relative min-h-[235px] overflow-hidden rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-white/[0.065] to-white/[0.018] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:scale-[1.015] hover:border-cyan-300/25 hover:shadow-[0_35px_90px_rgba(0,0,0,0.4)]"
              >
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/0 blur-[70px] transition duration-700 group-hover:bg-cyan-400/10" />

                <div className="absolute bottom-0 right-0 text-[130px] font-black leading-none text-white/[0.018] transition duration-700 group-hover:text-cyan-300/[0.035]">
                  {categoryNumbers[category.slug] ?? "00"}
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl text-cyan-300 shadow-[inset_0_0_25px_rgba(34,211,238,0.04)] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-cyan-300/25">
                      {categoryIcons[category.slug] ?? "◇"}
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.25em] text-white/20">
                      {categoryNumbers[category.slug] ?? "00"}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
                      {category.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/25 transition group-hover:text-cyan-300/80">
                      Keşfet
                      <span className="transition duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="relative z-10 pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.075] via-white/[0.035] to-transparent p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-10">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300/60">
                  Hızlı erişim
                </div>

                <h2 className="mt-3 text-3xl font-black">
                  Popüler hesaplamalar
                </h2>

                <p className="mt-3 text-sm text-white/35">
                  En çok ihtiyaç duyulan araçlara hızlıca ulaşın.
                </p>
              </div>

              <Link
                href="/yuzde-hesaplama"
                className="group inline-flex items-center justify-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] px-6 py-4 text-sm font-bold text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.05)] transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.1] hover:shadow-[0_0_50px_rgba(34,211,238,0.1)]"
              >
                Yüzde Hesaplama
                <span className="transition duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-[10px] font-medium uppercase tracking-[0.15em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Hesaplama Araçları
          </span>

          <span>Hızlı • Ücretsiz • Her yerden</span>
        </div>
      </footer>
    </main>
  );
}
