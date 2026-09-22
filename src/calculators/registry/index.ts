import type { CalculatorDefinition } from "@/types/calculator";
import { yuzdeHesaplama } from "../definitions/yuzde";
import { yuzdeArtisHesaplama } from "../definitions/yuzde-artis";
import { yuzdeAzalisHesaplama } from "../definitions/yuzde-azalis";
import { indirimHesaplama } from "../definitions/indirim";
import { zamHesaplama } from "../definitions/zam";
import { batchCalculators } from "../data/batch-calculators";

export const calculators: CalculatorDefinition[] = [
  yuzdeHesaplama,
  yuzdeArtisHesaplama,
  yuzdeAzalisHesaplama,
  indirimHesaplama,
  zamHesaplama,
  ...batchCalculators,
];

export const calculatorMap = new Map(
  calculators.map((calculator) => [
    calculator.slug,
    calculator,
  ])
);

export function getCalculatorBySlug(
  slug: string
): CalculatorDefinition | undefined {
  return calculatorMap.get(slug);
}

export function getCalculatorsByCategory(
  category: string
): CalculatorDefinition[] {
  return calculators.filter(
    (calculator) => calculator.category === category
  );
}