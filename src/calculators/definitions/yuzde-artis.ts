import type { CalculatorDefinition } from "@/types/calculator";

export const yuzdeArtisHesaplama: CalculatorDefinition = {
  slug: "yuzde-artis-hesaplama",

  title: "Yüzde Artış Hesaplama",

  shortDescription:
    "Bir değerin başka bir değere göre yüzde kaç arttığını hesaplayın.",

  category: "matematik",

  keywords: [
    "yüzde artış hesaplama",
    "yüzde artış hesapla",
    "artış oranı hesaplama",
    "zam oranı hesaplama",
  ],

  inputs: [
    {
      id: "oldValue",
      label: "Eski Değer",
      type: "number",
      placeholder: "Örneğin 500",
      required: true,
      step: 0.01,
    },
    {
      id: "newValue",
      label: "Yeni Değer",
      type: "number",
      placeholder: "Örneğin 600",
      required: true,
      step: 0.01,
    },
  ],

  calculate: (values) => {
    const oldValue = Number(values.oldValue);
    const newValue = Number(values.newValue);

    if (oldValue === 0) {
      throw new Error("Eski değer 0 olamaz.");
    }

    const increase = newValue - oldValue;
    const percentage = (increase / oldValue) * 100;

    return [
      {
        title: "Yüzde artış oranı",
        value: `${percentage.toLocaleString("tr-TR", {
          maximumFractionDigits: 2,
        })}%`,
      },
      {
        title: "Değişim miktarı",
        value: increase.toLocaleString("tr-TR", {
          maximumFractionDigits: 2,
        }),
      },
    ];
  },

  description:
    "Yüzde artış hesaplama aracı, bir değerin başlangıç değerine göre yüzde kaç arttığını bulmanızı sağlar.",

  howItWorks:
    "Yüzde artış, yeni değer ile eski değer arasındaki farkın eski değere bölünüp 100 ile çarpılmasıyla hesaplanır.",

  faq: [
    {
      question: "Yüzde artış nasıl hesaplanır?",
      answer:
        "Yeni değerden eski değer çıkarılır. Elde edilen fark eski değere bölünür ve 100 ile çarpılır.",
    },
    {
      question: "500'den 600'e yüzde kaç artış vardır?",
      answer:
        "600 ile 500 arasındaki fark 100'dür. 100 / 500 × 100 işlemi sonucunda artış oranı %20 olur.",
    },
  ],

  relatedCalculators: [
    "yuzde-hesaplama",
    "yuzde-azalis-hesaplama",
    "indirim-hesaplama",
    "zam-hesaplama",
  ],

  seo: {
    title: "Yüzde Artış Hesaplama - Yüzde Artış Oranı Hesapla",
    description:
      "Yüzde artış hesaplama aracı ile iki değer arasındaki yüzde artış oranını hızlı ve ücretsiz hesaplayın.",
  },
};