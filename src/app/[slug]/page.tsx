import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculatorMap } from "@/calculators/registry";

import CalculatorForm from "@/components/calculator/CalculatorForm";

interface CalculatorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CalculatorPageProps): Promise<Metadata> {
  const { slug } = await params;

  const calculator = calculatorMap.get(slug);

  if (!calculator) {
    return {};
  }

  return {
    title: calculator.seo?.title ?? calculator.title,
    description:
      calculator.seo?.description ?? calculator.shortDescription,
  };
}

export default async function CalculatorPage({
  params,
}: CalculatorPageProps) {
  const { slug } = await params;

  const calculator = calculatorMap.get(slug);

  if (!calculator) {
    notFound();
  }

  return (
    <main>
      <h1>{calculator.title}</h1>

      <p>{calculator.shortDescription}</p>

      <CalculatorForm slug={slug} />

      {calculator.description && (
        <section>
          <h2>Hakkında</h2>
          <p>{calculator.description}</p>
        </section>
      )}

      {calculator.howItWorks && (
        <section>
          <h2>Nasıl Hesaplanır?</h2>
          <p>{calculator.howItWorks}</p>
        </section>
      )}

      {calculator.faq && calculator.faq.length > 0 && (
        <section>
          <h2>Sık Sorulan Sorular</h2>

          {calculator.faq.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
