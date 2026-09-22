import type { CalculatorDefinition } from "@/types/calculator";

export const yuzdeAzalisHesaplama: CalculatorDefinition = {
  slug: "yuzde-azalis-hesaplama",

  title: "Yüzde Azalış Hesaplama",

  shortDescription:
    "Bir değerin başka bir değere göre yüzde kaç azaldığını hesaplayın.",

  category: "matematik",

  keywords: [
    "yüzde azalış hesaplama",
    "yüzde azalış hesapla",
    "azalış oranı hesaplama",
    "düşüş oranı hesaplama",
  ],

  inputs: [
    {
      id: "oldValue",
      label: "Eski Değer",
      type: "number",
      placeholder: "Örneğin 600",
      required: true,
      step: 0.01,
    },
    {
      id: "newValue",
      label: "Yeni Değer",
      type: "number",
      placeholder: "Örneğin 500",
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

    const decrease = oldValue - newValue;
    const percentage = (decrease / oldValue) * 100;

    return [
      {
        title: "Yüzde azalış oranı",
        value: `${percentage.toLocaleString("tr-TR", {
          maximumFractionDigits: 2,
        })}%`,
      },
      {
        title: "Değişim miktarı",
        value: decrease.toLocaleString("tr-TR", {
          maximumFractionDigits: 2,
        }),
      },
    ];
  },

  description:
    "Yüzde azalış hesaplama aracı, bir değerin başlangıç değerine göre yüzde kaç azaldığını bulmanızı sağlar.",

  howItWorks:
    "Yüzde azalış, eski değer ile yeni değer arasındaki farkın eski değere bölünüp 100 ile çarpılmasıyla hesaplanır.",

  faq: [
    {
      question: "Yüzde azalış nasıl hesaplanır?",
      answer:
        "Eski değerden yeni değer çıkarılır. Elde edilen fark eski değere bölünür ve 100 ile çarpılır.",
    },
    {
      question: "600'den 500'e yüzde kaç azalış vardır?",
      answer:
        "600 ile 500 arasındaki fark 100'dür. 100 / 600 × 100 işlemi sonucunda azalış oranı yaklaşık %16,67 olur.",
    },
  ],

  relatedCalculators: [
    "yuzde-hesaplama",
    "yuzde-artis-hesaplama",
    "indirim-hesaplama",
    "zam-hesaplama",
  ],

  seo: {
    title: "Yüzde Azalış Hesaplama - Yüzde Azalış Oranı Hesapla",
    description:
      "Yüzde azalış hesaplama aracı ile iki değer arasındaki yüzde azalış oranını hızlı ve ücretsiz hesaplayın.",
  },
};