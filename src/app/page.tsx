import Link from "next/link";
import CalculatorSearch from "@/components/search/CalculatorSearch";
import { categories } from "@/data/categories";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hesaplama Araçları
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Günlük hayatta ihtiyacınız olan hesaplamaları
            hızlı, kolay ve ücretsiz şekilde yapın.
          </p>

          <div className="mt-8">
  <CalculatorSearch />
</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Hesaplama Kategorileri
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">
                {category.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {category.description}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                Araçları Gör →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Popüler Hesaplamalar
          </h2>

          <div className="mt-5">
            <Link
              href="/yuzde-hesaplama"
              className="inline-block rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-800 transition hover:border-blue-300 hover:text-blue-600"
            >
              Yüzde Hesaplama
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}