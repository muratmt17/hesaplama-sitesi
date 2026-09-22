"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculators } from "@/calculators/registry";

export default function CalculatorSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

    if (!normalizedQuery) {
      return [];
    }

    return calculators
      .filter((calculator) => {
        const searchableText = [
          calculator.title,
          calculator.shortDescription,
          ...calculator.keywords,
        ]
          .join(" ")
          .toLocaleLowerCase("tr-TR");

        return searchableText.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <div className="relative mx-auto max-w-2xl">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Hesaplama aracı ara..."
        aria-label="Hesaplama aracı ara"
        className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-base shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      {query.trim() && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          {results.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {results.map((calculator) => (
                <Link
                  key={calculator.slug}
                  href={`/${calculator.slug}`}
                  onClick={() => setQuery("")}
                  className="block px-5 py-4 transition hover:bg-gray-50"
                >
                  <p className="font-semibold text-gray-900">
                    {calculator.title}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {calculator.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="px-5 py-4 text-sm text-gray-500">
              Aradığınız hesaplama aracı bulunamadı.
            </p>
          )}
        </div>
      )}
    </div>
  );
}