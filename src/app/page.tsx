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
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -left-[200px] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-[200px] top-[55%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 75%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-white/5 text-lg font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)] transition group-hover:border-cyan-300/40 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.22)]">
              ∑
            </div>

            <div>
              <div className="text-sm font-bold tracking-[0.2em] text-white">
                HESAPLAMA
              </div>
              <div className="text-[10px] tracking-[0.3em] text-white/40">
                ARAÇLARI
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Ücretsiz • Hızlı • Online
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              YENİ NESİL HESAPLAMA PLATFORMU
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Hesaplamanın
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                yeni hali.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Günlük hayatta ihtiyacınız olan hesaplamaları tek bir yerde,
              hızlı ve tamamen ücretsiz şekilde yapın.
            </p>

            <div className="mt-9 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.055] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="mb-2 px-4 pt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Ne hesaplamak istiyorsun?
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-1">
                <CalculatorSearch />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/35">
              <span>● Kurulum gerektirmez</span>
              <span>● Üyelik gerektirmez</span>
              <span>● Tamamen ücretsiz</span>
            </div>
          </div>

          {/* 3D-style visual */}
          <div className="relative hidden min-h-[460px] items-center justify-center lg:flex">
            <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative h-[360px] w-[360px] [perspective:1000px]">
              <div className="absolute inset-8 rotate-[18deg] rounded-[42px] border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.02] shadow-[30px_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl [transform:rotateX(18deg)_rotateY(-18deg)]" />

              <div className="absolute inset-16 rotate-[-8deg] rounded-[34px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-blue-500/5 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-2xl [transform:rotateX(-12deg)_rotateY(20deg)]" />

              <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-12 items-center justify-center rounded-[38px] border border-white/15 bg-[#0b1225]/90 shadow-[0_0_80px_rgba(59,130,246,0.18)] [transform:rotateX(15deg)_rotateY(-20deg)_rotateZ(12deg)]">
                <div className="text-center">
                  <div className="text-6xl font-black tracking-[-0.08em] text-white">
                    123
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
                    calculate
                  </div>
                </div>
              </div>

              <div className="absolute left-4 top-16 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-2xl backdrop-blur-xl [transform:rotateX(12deg)_rotateY(20deg)]">
                <div className="text-2xl font-bold text-cyan-300">%</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/35">
                  Yüzde
                </div>
              </div>

              <div className="absolute bottom-10 right-2 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-2xl backdrop-blur-xl [transform:rotateX(12deg)_rotateY(-20deg)]">
                <div className="text-2xl font-bold text-violet-300">₺</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/35">
                  Finans
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300/60">
                Keşfet
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Hesaplama dünyası
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                İhtiyacınız olan aracı kategoriye göre keşfedin.
              </p>
            </div>

            <div className="text-xs text-white/25">
              {categories.length} kategori
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-white/[0.075] hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl text-cyan-300 transition duration-500 group-hover:scale-110 group-hover:border-cyan-300/20">
                      {categoryIcons[category.slug] ?? "◇"}
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-white/20">
                      {categoryNumbers[category.slug] ?? "00"}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/40">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/30 transition group-hover:text-cyan-300/80">
                      Araçları keşfet
                    </span>

                    <span className="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-8 shadow-[0_25px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300/60">
                Hızlı erişim
              </div>

              <div className="mt-3 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Popüler hesaplamalar
                  </h2>

                  <p className="mt-2 text-sm text-white/40">
                    En çok ihtiyaç duyulan araçlara hızlıca ulaşın.
                  </p>
                </div>

                <Link
                  href="/yuzde-hesaplama"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  Yüzde Hesaplama
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Hesaplama Araçları</span>
          <span>Hızlı • Ücretsiz • Her yerden</span>
        </div>
      </footer>
    </main>
  );
}
