export interface Category {
  slug: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "matematik",
    title: "Matematik Hesaplama",
    description:
      "Yüzde, oran, ortalama ve temel matematik hesaplamaları.",
  },
  {
    slug: "tarih-zaman",
    title: "Tarih ve Zaman",
    description:
      "Yaş, tarih farkı, gün ve çalışma günü hesaplamaları.",
  },
  {
    slug: "finans",
    title: "Finans",
    description:
      "Faiz, kredi, yatırım ve finans hesaplamaları.",
  },
  {
    slug: "maas-is",
    title: "Maaş ve İş",
    description:
      "Maaş, çalışma süresi, izin ve tazminat hesaplamaları.",
  },
  {
    slug: "saglik-yasam",
    title: "Sağlık ve Yaşam",
    description:
      "VKİ, kalori, su ihtiyacı ve diğer yaşam hesaplamaları.",
  },
  {
    slug: "birim-donusturuculer",
    title: "Birim Dönüştürücüler",
    description:
      "Uzunluk, ağırlık, sıcaklık, alan ve diğer birimler.",
  },
  {
    slug: "arac-seyahat",
    title: "Araç ve Seyahat",
    description:
      "Yakıt, mesafe, seyahat maliyeti ve araç hesaplamaları.",
  },
  {
    slug: "ev-yasam",
    title: "Ev ve Yaşam",
    description:
      "Elektrik, su, boya, fayans ve ev hesaplamaları.",
  },
  {
    slug: "egitim",
    title: "Eğitim",
    description:
      "Not, YKS, TYT, AYT, LGS ve okul hesaplamaları.",
  },
];