"use client";

import { useState } from "react";
import { calculatorMap } from "@/calculators/registry";
import { runCalculator } from "@/lib/calculator-engine";

interface CalculatorFormProps {
  slug: string;
}

export default function CalculatorForm({
  slug,
}: CalculatorFormProps) {
  const calculator = calculatorMap.get(slug);

  const [values, setValues] = useState<Record<string, unknown>>({});
  const [results, setResults] = useState<
    { title: string; value: string; description?: string }[]
  >([]);
  const [error, setError] = useState("");

  function handleChange(
    inputId: string,
    value: string
  ) {
    setValues((current) => ({
      ...current,
      [inputId]: value,
    }));

    setError("");
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!calculator) {
      setError("Hesaplama aracı bulunamadı.");
      return;
    }

    try {
      const calculatedResults = runCalculator(
        calculator,
        values
      );

      setResults(calculatedResults);
      setError("");
    } catch (error) {
      setResults([]);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Hesaplama sırasında bir hata oluştu.");
      }
    }
  }

  if (!calculator) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
        Hesaplama aracı bulunamadı.
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        {calculator.inputs.map((input) => (
          <div key={input.id}>
            <label
              htmlFor={input.id}
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              {input.label}
            </label>

            <div className="relative">
              {input.type === "select" ? (
  <select
    id={input.id}
    name={input.id}
    value={String(values[input.id] ?? "")}
    onChange={(event) =>
      handleChange(input.id, event.target.value)
    }
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
  >
    <option value="">Seçiniz</option>
    {input.options?.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
) : (
  <input
    id={input.id}
    name={input.id}
    type={
      input.type === "number"
        ? "number"
        : input.type === "date"
          ? "date"
          : "text"
    }
    placeholder={input.placeholder}
    min={input.min}
    max={input.max}
    step={input.step}
    value={String(values[input.id] ?? "")}
    onChange={(event) =>
      handleChange(input.id, event.target.value)
    }
    className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
      input.unit ? "pr-14" : ""
    }`}
  />
)}

              {input.unit && (
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-sm font-semibold text-gray-500">
                  {input.unit}
                </span>
              )}
            </div>

            {input.placeholder && (
              <p className="mt-1.5 text-xs text-gray-500">
                Örnek: {input.placeholder.replace(
                  /^Örneğin\s*/i,
                  ""
                )}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Hesapla
        </button>
      </form>

      {error && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700"
        >
          {error}
        </div>
      )}

      {results.length > 0 && (
        <section className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Sonuç
          </h2>

          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="rounded-xl border border-green-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-gray-600">
                  {result.title}
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {result.value}
                </p>

                {result.description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {result.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}