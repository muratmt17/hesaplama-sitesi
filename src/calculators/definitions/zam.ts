import type { CalculatorDefinition } from "@/types/calculator";

export const zamHesaplama: CalculatorDefinition = {
  slug: "zam-hesaplama",

  title: "Zam Hesaplama",

  shortDescription:
    "Bir ürünün, maaşın veya herhangi bir değerin zam sonrası tutarını hesaplayın.",

  category: "matematik",

  keywords: [
    "zam hesaplama",
    "zam hesapla",
    "zamlı fiyat hesaplama",
    "zam oranı hesaplama",
    "maaş zam hesaplama",
  ],

  inputs: [
    {
      id: "value",
      label: "Mevcut Değer",
      type: "number",
      placeholder: "Örneğin 1000",
      unit: "TL",
      required: true,
      min: 0,
      step: 0.01,
    },
    {
      id: "increase",
      label: "Zam Oranı",
      type: "number",
      placeholder: "Örneğin 20",
      unit: "%",
      required: true,
      min: 0,
      step: 0.01,
    },
  ],

  calculate: (values) => {
    const value = Number(values.value);
    const increase = Number(values.increase);

    if (value < 0) {
      throw new Error("Mevcut değer 0'dan küçük olamaz.");
    }

    if (increase < 0) {
      throw new Error("Zam oranı 0'dan küçük olamaz.");
    }

    const increaseAmount = (value * increase) / 100;
    const increasedValue = value + increaseAmount;

    return [
      {
        title: "Zam tutarı",
        value: `${increaseAmount.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`,
      },
      {
        title: "Zamlı değer",
        value: `${increasedValue.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`,
      },
    ];
  },

  description:
    "Zam hesaplama aracı ile mevcut bir değerin belirli bir zam oranı sonrasında ulaşacağı tutarı ve zam miktarını hesaplayabilirsiniz.",

  howItWorks:
    "Zam tutarı, mevcut değerin zam oranıyla çarpılıp 100'e bölünmesiyle bulunur. Zamlı değer ise mevcut değere zam tutarının eklenmesiyle hesaplanır.",

  faq: [
    {
      question: "Zam nasıl hesaplanır?",
      answer:
        "Zam tutarı, mevcut değer ile zam oranının çarpılıp 100'e bölünmesiyle hesaplanır. Daha sonra zam tutarı mevcut değere eklenir.",
    },
    {
      question: "1000 TL'ye %20 zam gelirse kaç TL olur?",
      answer:
        "1000 TL'nin %20'si 200 TL'dir. 1000 TL'ye 200 TL eklendiğinde zamlı tutar 1200 TL olur.",
    },
  ],

  relatedCalculators: [
    "yuzde-hesaplama",
    "yuzde-artis-hesaplama",
    "yuzde-azalis-hesaplama",
    "indirim-hesaplama",
  ],

  seo: {
    title: "Zam Hesaplama - Zamlı Fiyat ve Maaş Hesapla",
    description:
      "Zam hesaplama aracı ile zam tutarını ve zam sonrası yeni değeri hızlı ve ücretsiz hesaplayın.",
  },
};