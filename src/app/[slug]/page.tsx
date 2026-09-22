import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculatorMap } from "@/calculators/registry";
import { getCustomSeoContent } from "@/calculators/seo-content";
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

  const canonicalUrl =
    "https://hesaplama-sitesi-ebon.vercel.app/" +
    calculator.slug;

  return {
    title: calculator.seo?.title ?? calculator.title,
    description:
      calculator.seo?.description ?? calculator.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
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

  const customContent = getCustomSeoContent(slug);

  const description =
    customContent.description ?? calculator.description;

  const howItWorks =
    customContent.howItWorks ?? calculator.howItWorks;

  const faq =
    customContent.faq ?? calculator.faq;

  return (
    <main>
      <h1>{calculator.title}</h1>

      <p>{calculator.shortDescription}</p>

      <CalculatorForm slug={slug} />

      {description && (
        <section>
          <h2>Hakkında</h2>
          <p>{description}</p>
        </section>
      )}

      {howItWorks && (
        <section>
          <h2>Nasıl Hesaplanır?</h2>
          <p>{howItWorks}</p>
        </section>
      )}

      {faq && faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}

      {faq && faq.length > 0 && (
        <section>
          <h2>Sık Sorulan Sorular</h2>

          {faq.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      )}

      {calculator.relatedCalculators &&
        calculator.relatedCalculators.length > 0 && (
          <section>
            <h2>İlgili Hesaplamalar</h2>

            <ul>
              {calculator.relatedCalculators.map((relatedSlug) => {
                const relatedCalculator = calculatorMap.get(relatedSlug);

                if (!relatedCalculator) {
                  return null;
                }

                return (
                  <li key={relatedSlug}>
                    <a href={"/" + relatedSlug}>
                      {relatedCalculator.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
    </main>
  );
}
