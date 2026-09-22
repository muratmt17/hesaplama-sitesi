import { notFound } from "next/navigation";
import { calculatorMap } from "@/calculators/registry";
import CalculatorForm from "@/components/calculator/CalculatorForm";

interface CalculatorPageProps {
  params: Promise<{
    slug: string;
  }>;
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
    </main>
  );
}