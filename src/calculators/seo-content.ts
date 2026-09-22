import type { CalculatorDefinition } from "@/types/calculator";

type SeoContent = Pick<
  CalculatorDefinition,
  "description" | "howItWorks" | "faq"
>;

const customSeoContent: Record<string, SeoContent> = {
  "yuzde-hesaplama": {
    description:
      "Yüzde hesaplama aracı ile bir sayının belirli bir yüzdesini, bir değerin başka bir değere göre yüzde oranını ve yüzde değişimini kolayca hesaplayabilirsiniz.",
    howItWorks:
      "Bir sayının yüzdesini bulmak için sayı yüzde değeriyle çarpılır ve 100'e bölünür. Örneğin 200 sayısının %15'i 200 × 15 ÷ 100 işlemiyle bulunur.",
    faq: [
      {
        question: "Bir sayının yüzdesi nasıl hesaplanır?",
        answer:
          "Sayının yüzdesini bulmak için sayı, yüzde değeriyle çarpılır ve 100'e bölünür.",
      },
      {
        question: "200'ün %20'si kaçtır?",
        answer:
          "200 × 20 ÷ 100 işlemi sonucunda 40 bulunur.",
      },
      {
        question: "Yüzde hesaplama ne için kullanılır?",
        answer:
          "İndirim, zam, oran karşılaştırması, fiyat değişimi ve birçok günlük hesaplamada kullanılabilir.",
      },
    ],
  },

  "yuzde-artis-hesaplama": {
    description:
      "Yüzde artış hesaplama aracı ile bir değerin başlangıçtan yeni değere ne kadar yüzde arttığını hızlıca hesaplayabilirsiniz.",
    howItWorks:
      "Yüzde artış, yeni değer ile eski değer arasındaki farkın eski değere bölünüp 100 ile çarpılmasıyla hesaplanır.",
    faq: [
      {
        question: "Yüzde artış nasıl hesaplanır?",
        answer:
          "Yeni değer ile eski değer arasındaki fark eski değere bölünür ve sonuç 100 ile çarpılır.",
      },
      {
        question: "Maaş artışı yüzde olarak nasıl hesaplanır?",
        answer:
          "Yeni maaş ile eski maaş arasındaki fark eski maaşa oranlanarak yüzde artış bulunur.",
      },
    ],
  },

  "indirim-hesaplama": {
    description:
      "İndirim hesaplama aracı ile ürün fiyatındaki indirim tutarını ve indirim sonrası ödenecek fiyatı kolayca hesaplayabilirsiniz.",
    howItWorks:
      "İndirim tutarı, ürün fiyatının indirim yüzdesiyle çarpılıp 100'e bölünmesiyle bulunur. İndirimli fiyat ise başlangıç fiyatından indirim tutarının çıkarılmasıyla hesaplanır.",
    faq: [
      {
        question: "İndirimli fiyat nasıl hesaplanır?",
        answer:
          "Önce indirim tutarı bulunur, ardından bu tutar ürünün ilk fiyatından çıkarılır.",
      },
      {
        question: "1000 TL'lik ürün %20 indirimle kaç TL olur?",
        answer:
          "1000 TL'nin %20'si 200 TL'dir. İndirimli fiyat 800 TL olur.",
      },
    ],
  },

  "yakit-tuketimi-hesaplama": {
    description:
      "Yakıt tüketimi hesaplama aracı ile aracınızın 100 kilometrede tükettiği yakıt miktarını kolayca hesaplayabilirsiniz.",
    howItWorks:
      "Yakıt tüketimi, kullanılan yakıt miktarının gidilen mesafeye bölünüp 100 ile çarpılmasıyla litre/100 km cinsinden hesaplanır.",
    faq: [
      {
        question: "Aracın 100 km'de kaç litre yaktığı nasıl hesaplanır?",
        answer:
          "Tüketilen yakıt miktarı gidilen kilometreye bölünür ve 100 ile çarpılır.",
      },
      {
        question: "Yakıt tüketimi neden 100 km üzerinden hesaplanır?",
        answer:
          "100 km standardı farklı araçların yakıt tüketimini kolayca karşılaştırmayı sağlar.",
      },
    ],
  },

  "yakit-maliyeti-hesaplama": {
    description:
      "Yakıt maliyeti hesaplama aracı ile yolculuğunuzda harcayacağınız yakıt miktarını ve yaklaşık yakıt maliyetini hesaplayabilirsiniz.",
    howItWorks:
      "Yakıt maliyeti; mesafe, aracın yakıt tüketimi ve yakıt litre fiyatı kullanılarak hesaplanır.",
    faq: [
      {
        question: "100 km yolun yakıt maliyeti nasıl hesaplanır?",
        answer:
          "Aracın 100 km'deki yakıt tüketimi ile yakıtın litre fiyatı çarpılarak yaklaşık maliyet bulunabilir.",
      },
      {
        question: "Yolculuk yakıt maliyeti nasıl hesaplanır?",
        answer:
          "Mesafe, aracın ortalama yakıt tüketimi ve güncel litre fiyatı birlikte değerlendirilir.",
      },
    ],
  },
};

export function getCustomSeoContent(slug: string): SeoContent {
  return customSeoContent[slug] ?? {};
}
