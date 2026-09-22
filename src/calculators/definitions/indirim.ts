import type { CalculatorDefinition } from "@/types/calculator";

export const indirimHesaplama: CalculatorDefinition = {
  slug: "indirim-hesaplama",

  title: "İndirim Hesaplama",

  shortDescription:
    "Bir ürünün indirim tutarını ve indirimli fiyatını kolayca hesaplayın.",

  category: "matematik",

  keywords: [
    "indirim hesaplama",
    "indirim hesapla",
    "indirimli fiyat hesaplama",
    "indirim oranı hesaplama",
    "indirim tutarı hesaplama",
  ],

  inputs: [
    {
      id: "price",
      label: "Ürün Fiyatı",
      type: "number",
      placeholder: "Örneğin 1000",
      unit: "TL",
      required: true,
      min: 0,
      step: 0.01,
    },
    {
      id: "discount",
      label: "İndirim Oranı",
      type: "number",
      placeholder: "Örneğin 20",
      unit: "%",
      required: true,
      min: 0,
      max: 100,
      step: 0.01,
    },
  ],

  calculate: (values) => {
    const price = Number(values.price);
    const discount = Number(values.discount);

    if (price < 0) {
      throw new Error("Ürün fiyatı 0'dan küçük olamaz.");
    }

    if (discount < 0 || discount > 100) {
      throw new Error("İndirim oranı %0 ile %100 arasında olmalıdır.");
    }

    const discountAmount = (price * discount) / 100;
    const discountedPrice = price - discountAmount;

    return [
      {
        title: "İndirim tutarı",
        value: `${discountAmount.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`,
      },
      {
        title: "İndirimli fiyat",
        value: `${discountedPrice.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`,
      },
    ];
  },

  description:
    "İndirim hesaplama aracı ile bir ürünün indirim tutarını ve indirim sonrasında ödenecek fiyatı hızlıca hesaplayabilirsiniz.",

  howItWorks:
    "İndirim tutarı, ürün fiyatının indirim oranıyla çarpılıp 100'e bölünmesiyle bulunur. İndirimli fiyat ise ürün fiyatından indirim tutarının çıkarılmasıyla hesaplanır.",

  faq: [
    {
      question: "İndirim nasıl hesaplanır?",
      answer:
        "İndirim tutarı, ürün fiyatı ile indirim oranının çarpılıp 100'e bölünmesiyle hesaplanır.",
    },
    {
      question: "1000 TL'nin %20 indirimli fiyatı kaç TL'dir?",
      answer:
        "1000 TL'nin %20'si 200 TL'dir. 1000 TL'den 200 TL çıkarıldığında indirimli fiyat 800 TL olur.",
    },
  ],

  relatedCalculators: [
    "yuzde-hesaplama",
    "yuzde-artis-hesaplama",
    "yuzde-azalis-hesaplama",
    "zam-hesaplama",
  ],

  seo: {
    title: "İndirim Hesaplama - İndirimli Fiyat Hesapla",
    description:
      "İndirim hesaplama aracı ile indirim tutarını ve indirimli fiyatı hızlı ve ücretsiz hesaplayın.",
  },
};