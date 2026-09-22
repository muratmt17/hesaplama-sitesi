import type { CalculatorDefinition } from "@/types/calculator";
import { calculatePercentage } from "../formulas/percentage";

export const yuzdeHesaplama: CalculatorDefinition = {
  slug: "yuzde-hesaplama",
  title: "Yüzde Hesaplama",
  shortDescription:
    "Bir sayının belirli bir yüzdesini kolayca hesaplayın.",
  category: "matematik",
  keywords: [
    "yüzde hesaplama",
    "yüzde hesapla",
    "yüzde nasıl hesaplanır",
    "oran hesaplama",
  ],

  inputs: [
    {
      id: "number",
      label: "Sayı",
      type: "number",
      placeholder: "Örneğin 500",
      required: true,
      step: 0.01,
    },
    {
      id: "percentage",
      label: "Yüzde",
      type: "number",
      placeholder: "Örneğin 20",
      unit: "%",
      required: true,
      step: 0.01,
    },
  ],

  calculate: (values) => {
    const number = Number(values.number);
    const percentage = Number(values.percentage);

    const result = calculatePercentage(number, percentage);

    return [
      {
        title: `${number} sayısının %${percentage}'si`,
        value: result.toLocaleString("tr-TR", {
          maximumFractionDigits: 2,
        }),
      },
    ];
  },

  description:
    "Yüzde hesaplama aracı ile bir sayının belirli bir yüzdesini hızlı ve kolay şekilde hesaplayabilirsiniz.",

  howItWorks:
    "Bir sayının yüzdesini bulmak için sayı, yüzde değeriyle çarpılır ve 100'e bölünür.",

  faq: [
    {
      question: "Yüzde nasıl hesaplanır?",
      answer:
        "Bir sayının belirli bir yüzdesini bulmak için sayı yüzde değeriyle çarpılır ve 100'e bölünür.",
    },
    {
      question: "500'ün %20'si kaçtır?",
      answer:
        "500 × 20 / 100 işlemi sonucunda 500'ün %20'si 100'dür.",
    },
  ],

  relatedCalculators: [
    "yuzde-artis-hesaplama",
    "yuzde-azalis-hesaplama",
    "indirim-hesaplama",
    "zam-hesaplama",
  ],

  seo: {
    title: "Yüzde Hesaplama - Kolay ve Hızlı Yüzde Hesapla",
    description:
      "Yüzde hesaplama aracı ile bir sayının yüzdesini hızlı ve kolay şekilde hesaplayın. Ücretsiz online yüzde hesaplama.",
  },
};