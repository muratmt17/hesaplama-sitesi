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

  "kdv-hesaplama": {
    description:
      "KDV hesaplama aracı ile KDV tutarını, KDV dahil fiyatı veya KDV hariç fiyatı kolayca hesaplayabilirsiniz.",
    howItWorks:
      "KDV tutarı, KDV hariç fiyatın KDV oranıyla çarpılmasıyla hesaplanır. KDV dahil fiyat ise KDV hariç tutara KDV eklenerek bulunur.",
    faq: [
      {
        question: "KDV nasıl hesaplanır?",
        answer:
          "KDV tutarı, KDV hariç fiyat ile KDV oranının çarpılmasıyla hesaplanır.",
      },
      {
        question: "KDV dahil fiyattan KDV hariç fiyat nasıl bulunur?",
        answer:
          "KDV dahil fiyat, kullanılan KDV oranına göre ilgili katsayıya bölünerek KDV hariç tutar hesaplanabilir.",
      },
      {
        question: "KDV hesaplama ne için kullanılır?",
        answer:
          "Ürün ve hizmetlerin vergi dahil veya vergi hariç fiyatlarını hesaplamak için kullanılabilir.",
      },
    ],
  },

  "zam-hesaplama": {
    description:
      "Zam hesaplama aracı ile maaş, fiyat veya herhangi bir tutara uygulanan zam oranını ve zamlı yeni değeri hızlıca hesaplayabilirsiniz.",
    howItWorks:
      "Zam tutarı, mevcut değerin zam yüzdesiyle çarpılıp 100'e bölünmesiyle bulunur. Zamlı değer ise mevcut değere zam tutarının eklenmesiyle hesaplanır.",
    faq: [
      {
        question: "Zamlı fiyat nasıl hesaplanır?",
        answer:
          "Mevcut tutarın zam oranı hesaplanır ve bulunan zam tutarı mevcut değere eklenir.",
      },
      {
        question: "10.000 TL'ye %20 zam gelirse kaç TL olur?",
        answer:
          "10.000 TL'nin %20'si 2.000 TL'dir. Zamlı tutar 12.000 TL olur.",
      },
      {
        question: "Maaş zammı nasıl hesaplanır?",
        answer:
          "Mevcut maaş, zam oranıyla hesaplanarak zam tutarı bulunur ve mevcut maaşa eklenir.",
      },
    ],
  },

  "kar-hesaplama": {
    description:
      "Kâr hesaplama aracı ile alış maliyeti ve satış fiyatı üzerinden elde edilen kâr tutarını ve kâr oranını kolayca hesaplayabilirsiniz.",
    howItWorks:
      "Kâr tutarı, satış fiyatından maliyet fiyatının çıkarılmasıyla bulunur. Kâr oranı ise elde edilen kârın maliyete oranlanmasıyla hesaplanabilir.",
    faq: [
      {
        question: "Kâr nasıl hesaplanır?",
        answer:
          "Satış fiyatından maliyet fiyatı çıkarılarak kâr tutarı bulunur.",
      },
      {
        question: "100 TL'ye alınan ürün 150 TL'ye satılırsa kâr ne kadar olur?",
        answer:
          "Kâr tutarı 150 TL - 100 TL işlemiyle 50 TL olur.",
      },
      {
        question: "Kâr oranı nasıl hesaplanır?",
        answer:
          "Kâr tutarı maliyet fiyatına oranlanarak yüzde olarak kâr oranı hesaplanabilir.",
      },
    ],
  },

  "kar-marji-hesaplama": {
    description:
      "Kâr marjı hesaplama aracı ile satış fiyatı ve maliyet üzerinden kâr marjınızı yüzde olarak hızlıca hesaplayabilirsiniz.",
    howItWorks:
      "Kâr marjı, satış fiyatından maliyet çıkarılarak bulunan kârın satış fiyatına bölünmesi ve 100 ile çarpılmasıyla hesaplanır.",
    faq: [
      {
        question: "Kâr marjı nasıl hesaplanır?",
        answer:
          "Kâr tutarı satış fiyatına bölünür ve sonuç 100 ile çarpılarak yüzde kâr marjı bulunur.",
      },
      {
        question: "Kâr ile kâr marjı arasındaki fark nedir?",
        answer:
          "Kâr, elde edilen parasal kazarı ifade ederken kâr marjı bu kazancın satış fiyatına oranını yüzde olarak gösterir.",
      },
    ],
  },

  "kredi-taksit-hesaplama": {
    description:
      "Kredi taksit hesaplama aracı ile kredi tutarı, faiz oranı ve vade bilgilerine göre aylık taksit tutarını ve toplam geri ödemeyi hesaplayabilirsiniz.",
    howItWorks:
      "Kredi taksiti, kredi tutarı, faiz oranı ve vade kullanılarak hesaplanır. Aylık taksit tutarı belirlendikten sonra toplam geri ödeme taksit tutarı ile vadenin çarpılmasıyla bulunabilir.",
    faq: [
      {
        question: "Kredi taksiti nasıl hesaplanır?",
        answer:
          "Kredi tutarı, faiz oranı ve vade bilgileri kullanılarak aylık ödeme tutarı hesaplanır.",
      },
      {
        question: "Kredi vadesi uzarsa aylık taksit ne olur?",
        answer:
          "Diğer koşullar aynı kaldığında vadenin uzaması genellikle aylık taksit tutarını azaltırken toplam geri ödeme tutarını artırabilir.",
      },
      {
        question: "Kredi toplam geri ödeme nasıl hesaplanır?",
        answer:
          "Aylık taksit tutarı ve toplam taksit sayısı dikkate alınarak hesaplanır. Banka masrafları ve diğer ücretler ayrıca değerlendirilebilir.",
      },
    ],
  },
  "kredi-hesaplama": {
    description:
      "Kredi hesaplama aracı ile kredi tutarı, faiz oranı ve vade bilgilerini kullanarak aylık ödeme ve toplam geri ödeme tutarını hesaplayabilirsiniz.",
    howItWorks:
      "Kredi hesaplamasında kredi tutarı, faiz oranı ve vade birlikte değerlendirilir. Aylık ödeme tutarı kredi koşullarına göre hesaplanır ve toplam geri ödeme vade boyunca yapılacak ödemeler üzerinden belirlenir.",
    faq: [
      {
        question: "Kredi hesaplama nasıl yapılır?",
        answer:
          "Kredi tutarı, faiz oranı ve vade bilgileri kullanılarak aylık taksit ve toplam geri ödeme hesaplanır.",
      },
      {
        question: "Kredi vadesi arttıkça toplam geri ödeme neden değişir?",
        answer:
          "Vade uzadığında faiz daha uzun süre uygulandığı için toplam geri ödeme tutarı değişebilir.",
      },
      {
        question: "Kredi hesaplamasında hangi bilgiler gerekir?",
        answer:
          "Genellikle kredi tutarı, faiz oranı ve vade bilgileri gerekir. Bankaya göre ek ücret ve masraflar da bulunabilir.",
      },
    ],
  },

  "mevduat-faizi-hesaplama": {
    description:
      "Mevduat faizi hesaplama aracı ile yatırılan para, faiz oranı ve vade bilgilerine göre elde edilebilecek yaklaşık faiz getirisini hesaplayabilirsiniz.",
    howItWorks:
      "Mevduat getirisi; anapara, faiz oranı ve vade kullanılarak hesaplanır. Vergi veya diğer kesintiler varsa net getiri hesaplanırken bunların da dikkate alınması gerekir.",
    faq: [
      {
        question: "Mevduat faizi nasıl hesaplanır?",
        answer:
          "Mevduat getirisi anapara, faiz oranı ve vade bilgilerine göre hesaplanır.",
      },
      {
        question: "100.000 TL mevduat ne kadar faiz getirir?",
        answer:
          "Getiri tutarı faiz oranı, vade ve varsa vergi kesintilerine göre değişir.",
      },
      {
        question: "Mevduat faizinde net getiri nedir?",
        answer:
          "Net getiri, hesaplanan brüt faiz kazancından uygulanması gereken vergi ve kesintiler düşüldükten sonra kalan tutardır.",
      },
    ],
  },

  "enflasyon-hesaplama": {
    description:
      "Enflasyon hesaplama aracı ile belirli bir dönemde fiyatların ne kadar değiştiğini ve paranın satın alma gücündeki değişimi hesaplamaya yardımcı olabilirsiniz.",
    howItWorks:
      "Enflasyon hesaplamasında başlangıç ve dönem sonu fiyatları karşılaştırılır. Fiyatlardaki değişim yüzde olarak ifade edilerek belirli bir dönemdeki artış hesaplanabilir.",
    faq: [
      {
        question: "Enflasyon nasıl hesaplanır?",
        answer:
          "Belirli bir dönemdeki fiyat değişimi başlangıç ve son değerler karşılaştırılarak yüzde olarak hesaplanabilir.",
      },
      {
        question: "Enflasyon paranın değerini nasıl etkiler?",
        answer:
          "Fiyatlar arttıkça aynı miktardaki parayla satın alınabilen mal ve hizmet miktarı azalabilir.",
      },
      {
        question: "Enflasyon hesaplama ne işe yarar?",
        answer:
          "Farklı dönemlerdeki fiyat değişimlerini ve paranın satın alma gücündeki değişimi anlamaya yardımcı olabilir.",
      },
    ],
  },

  "net-maas-hesaplama": {
    description:
      "Net maaş hesaplama aracı ile brüt maaş üzerinden tahmini net maaşı ve maaştan yapılabilecek kesintileri hesaplamaya yardımcı olabilirsiniz.",
    howItWorks:
      "Net maaş hesaplamasında brüt ücret üzerinden uygulanabilecek sigorta primi, vergi ve diğer yasal kesintiler dikkate alınır. Kesintiler düşüldükten sonra çalışanın eline geçen tutar hesaplanır.",
    faq: [
      {
        question: "Net maaş nasıl hesaplanır?",
        answer:
          "Brüt maaştan uygulanması gereken yasal kesintiler düşülerek net maaş hesaplanır.",
      },
      {
        question: "Brüt maaş ile net maaş arasındaki fark nedir?",
        answer:
          "Brüt maaş kesintiler uygulanmadan önceki ücret, net maaş ise kesintiler sonrasında çalışanın eline geçen tutardır.",
      },
      {
        question: "Net maaş neden aylar arasında değişebilir?",
        answer:
          "Vergi dilimi, primler, istisnalar ve diğer yasal düzenlemeler nedeniyle çalışanın net maaşı dönemlere göre değişebilir.",
      },
    ],
  },

  "kira-artis-hesaplama": {
    description:
      "Kira artış hesaplama aracı ile mevcut kira bedeline uygulanabilecek artış oranına göre yeni kira tutarını hesaplayabilirsiniz.",
    howItWorks:
      "Kira artış hesaplamasında mevcut kira bedeli ve uygulanacak artış oranı kullanılır. Artış tutarı hesaplandıktan sonra mevcut kiraya eklenerek yeni kira bedeli bulunur.",
    faq: [
      {
        question: "Kira artışı nasıl hesaplanır?",
        answer:
          "Mevcut kira bedelinin belirlenen artış oranı hesaplanır ve bulunan artış tutarı mevcut kiraya eklenir.",
      },
      {
        question: "Kira artışından sonra yeni kira nasıl bulunur?",
        answer:
          "Mevcut kira ile kira artış tutarı toplanarak yeni kira bedeli hesaplanır.",
      },
      {
        question: "Kira artış oranı nereden belirlenir?",
        answer:
          "Uygulanabilecek oran dönemsel mevzuat ve yürürlükteki kurallara göre değişebileceğinden güncel düzenlemelerin ayrıca kontrol edilmesi gerekir.",
      },
    ],
  },
};

export function getCustomSeoContent(slug: string): SeoContent {
  return customSeoContent[slug] ?? {};
}
