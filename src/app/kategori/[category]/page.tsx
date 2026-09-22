import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { calculators } from "@/calculators/registry";
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;

  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description,
  };
}

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;

  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  const categoryCalculators = calculators.filter(
    (calculator) => calculator.category === categorySlug
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900">
            {category.title}
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {categoryCalculators.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Hesaplama Araçları
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categoryCalculators.map((calculator) => (
                <Link
                  key={calculator.slug}
                  href={`/${calculator.slug}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {calculator.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {calculator.shortDescription}
                  </p>

                  <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                    Hesapla →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-bold text-gray-900">
              Hesaplama Araçları
            </h2>

            <p className="mt-3 text-gray-600">
              Bu kategoride henüz hesaplama aracı bulunmuyor.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
