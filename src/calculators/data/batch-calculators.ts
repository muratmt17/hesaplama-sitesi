import type { CalculatorDefinition } from "@/types/calculator";

export const batchCalculators: CalculatorDefinition[] = [
  {
    slug: "kdv-hesaplama",
    title: "KDV Hesaplama",
    shortDescription:
      "Bir tutarın KDV miktarını ve KDV dahil toplam tutarını hesaplayın.",
    category: "matematik",
    keywords: [
      "kdv hesaplama",
      "kdv hesapla",
      "kdv tutarı hesaplama",
      "kdv dahil fiyat",
    ],

    inputs: [
      {
        id: "amount",
        label: "KDV Hariç Tutar",
        type: "number",
        placeholder: "Örneğin 1000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "rate",
        label: "KDV Oranı",
        type: "number",
        placeholder: "Örneğin 20",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const amount = Number(values.amount);
      const rate = Number(values.rate);

      if (amount < 0) {
        throw new Error("Tutar 0'dan küçük olamaz.");
      }

      if (rate < 0) {
        throw new Error("KDV oranı 0'dan küçük olamaz.");
      }

      const kdv = (amount * rate) / 100;
      const total = amount + kdv;

      return [
        {
          title: "KDV tutarı",
          value: `${kdv.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "KDV dahil toplam",
          value: `${total.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "KDV hesaplama aracı ile KDV hariç tutar üzerinden KDV miktarını ve KDV dahil toplam fiyatı hesaplayabilirsiniz.",

    howItWorks:
      "KDV tutarı, KDV hariç tutarın KDV oranıyla çarpılıp 100'e bölünmesiyle hesaplanır. KDV dahil tutar, KDV hariç tutara KDV'nin eklenmesiyle bulunur.",

    faq: [
      {
        question: "1000 TL'nin %20 KDV'si kaç TL'dir?",
        answer:
          "1000 TL'nin %20 KDV'si 200 TL'dir. KDV dahil toplam tutar 1200 TL olur.",
      },
    ],

    relatedCalculators: [
      "kdv-dahil-haric-hesaplama",
      "indirim-hesaplama",
      "zam-hesaplama",
    ],

    seo: {
      title: "KDV Hesaplama - KDV Tutarı ve KDV Dahil Fiyat",
      description:
        "KDV hesaplama aracı ile KDV tutarını ve KDV dahil toplam fiyatı hızlı ve ücretsiz hesaplayın.",
    },
  },

  {
    slug: "kdv-dahil-haric-hesaplama",
    title: "KDV Dahil / Hariç Hesaplama",
    shortDescription:
      "KDV dahil fiyatın KDV hariç tutarını veya KDV hariç fiyatın KDV dahil tutarını hesaplayın.",
    category: "matematik",
    keywords: [
      "kdv dahil hariç hesaplama",
      "kdv dahil hesaplama",
      "kdv hariç hesaplama",
      "kdv ayırma",
    ],

    inputs: [
      {
        id: "amount",
        label: "Tutar",
        type: "number",
        placeholder: "Örneğin 1200",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "rate",
        label: "KDV Oranı",
        type: "number",
        placeholder: "Örneğin 20",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "mode",
        label: "Tutar Türü",
        type: "select",
        required: true,
        options: [
          {
            label: "KDV Dahil",
            value: "included",
          },
          {
            label: "KDV Hariç",
            value: "excluded",
          },
        ],
      },
    ],

    calculate: (values) => {
      const amount = Number(values.amount);
const rate = Number(values.rate);
const mode = String(values.mode);

if (!Number.isFinite(amount) || amount < 0) {
  throw new Error("Tutar 0 veya daha büyük bir sayı olmalıdır.");
}

if (!Number.isFinite(rate) || rate < 0) {
  throw new Error("KDV oranı 0 veya daha büyük bir sayı olmalıdır.");
}

if (mode !== "included" && mode !== "excluded") {
  throw new Error("Tutar türü seçimi geçersiz.");
}

if (mode === "included" && rate >= 100) {
  throw new Error(
    "KDV dahil tutardan KDV hariç tutar hesaplamak için KDV oranı %100'den küçük olmalıdır."
  );
}

      if (mode === "included") {
        const excluded = amount / (1 + rate / 100);
        const kdv = amount - excluded;

        return [
          {
            title: "KDV hariç tutar",
            value: `${excluded.toLocaleString("tr-TR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} TL`,
          },
          {
            title: "KDV tutarı",
            value: `${kdv.toLocaleString("tr-TR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} TL`,
          },
        ];
      }

      const kdv = (amount * rate) / 100;
      const included = amount + kdv;

      return [
        {
          title: "KDV tutarı",
          value: `${kdv.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "KDV dahil tutar",
          value: `${included.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "KDV dahil ve KDV hariç tutarlar arasında dönüşüm yaparak KDV tutarını hesaplayabilirsiniz.",

    howItWorks:
      "KDV dahil tutarı KDV hariç tutara çevirmek için toplam tutar 1 + KDV oranının ondalık karşılığına bölünür.",

    faq: [
      {
        question: "1200 TL KDV dahilse ve KDV %20 ise KDV hariç tutar kaç TL'dir?",
        answer:
          "1200 TL, %20 KDV dahil olduğunda KDV hariç tutar 1000 TL, KDV tutarı ise 200 TL'dir.",
      },
    ],

    relatedCalculators: [
      "kdv-hesaplama",
      "indirim-hesaplama",
      "zam-hesaplama",
    ],

    seo: {
      title: "KDV Dahil Hariç Hesaplama - KDV Ayırma",
      description:
        "KDV dahil ve KDV hariç tutar hesaplama aracı ile fiyat üzerinden KDV'yi kolayca ayırın.",
    },
  },

  {
    slug: "kar-hesaplama",
    title: "Kâr Hesaplama",
    shortDescription:
      "Alış ve satış fiyatından kâr tutarını ve kâr oranını hesaplayın.",
    category: "matematik",
    keywords: [
      "kar hesaplama",
      "kâr hesaplama",
      "kar hesapla",
      "satış karı hesaplama",
    ],

    inputs: [
      {
        id: "cost",
        label: "Alış Maliyeti",
        type: "number",
        placeholder: "Örneğin 800",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "sales",
        label: "Satış Fiyatı",
        type: "number",
        placeholder: "Örneğin 1000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const cost = Number(values.cost);
      const sales = Number(values.sales);

      if (cost <= 0) {
        throw new Error("Alış maliyeti 0'dan büyük olmalıdır.");
      }

      const profit = sales - cost;
      const profitRate = (profit / cost) * 100;

      return [
        {
          title: "Kâr tutarı",
          value: `${profit.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Maliyete göre kâr oranı",
          value: `${profitRate.toLocaleString("tr-TR", {
            maximumFractionDigits: 2,
          })}%`,
        },
      ];
    },

    description:
      "Kâr hesaplama aracı ile alış maliyeti ve satış fiyatı arasındaki kâr tutarını ve maliyete göre kâr oranını hesaplayabilirsiniz.",

    howItWorks:
      "Kâr tutarı satış fiyatından alış maliyetinin çıkarılmasıyla bulunur. Kâr oranı ise kâr tutarının maliyete bölünüp 100 ile çarpılmasıyla hesaplanır.",

    faq: [
      {
        question: "800 TL'ye alınan ürün 1000 TL'ye satılırsa kâr kaç TL'dir?",
        answer:
          "Kâr 200 TL'dir. Maliyete göre kâr oranı %25'tir.",
      },
    ],

    relatedCalculators: [
      "kar-marji-hesaplama",
      "zarar-hesaplama",
      "indirim-hesaplama",
    ],

    seo: {
      title: "Kâr Hesaplama - Kâr Tutarı ve Kâr Oranı",
      description:
        "Alış ve satış fiyatına göre kâr tutarını ve kâr oranını ücretsiz hesaplayın.",
    },
  },

  {
    slug: "kar-marji-hesaplama",
    title: "Kâr Marjı Hesaplama",
    shortDescription:
      "Satış fiyatı ve maliyete göre kâr marjını hesaplayın.",
    category: "matematik",
    keywords: [
      "kar marjı hesaplama",
      "kâr marjı hesaplama",
      "kar marjı",
      "brüt kar marjı",
    ],

    inputs: [
      {
        id: "cost",
        label: "Maliyet",
        type: "number",
        placeholder: "Örneğin 800",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "sales",
        label: "Satış Fiyatı",
        type: "number",
        placeholder: "Örneğin 1000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const cost = Number(values.cost);
      const sales = Number(values.sales);

      if (sales <= 0) {
        throw new Error("Satış fiyatı 0'dan büyük olmalıdır.");
      }

      const profit = sales - cost;
      const margin = (profit / sales) * 100;

      return [
        {
          title: "Kâr marjı",
          value: `${margin.toLocaleString("tr-TR", {
            maximumFractionDigits: 2,
          })}%`,
        },
        {
          title: "Kâr tutarı",
          value: `${profit.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "Kâr marjı hesaplama aracı, satış fiyatının ne kadarının kâr olduğunu yüzde olarak gösterir.",

    howItWorks:
      "Kâr marjı, satış fiyatından maliyet çıkarıldıktan sonra kalan kârın satış fiyatına bölünüp 100 ile çarpılmasıyla hesaplanır.",

    faq: [
      {
        question: "Kâr marjı ile kâr oranı aynı şey midir?",
        answer:
          "Hayır. Kâr oranı genellikle maliyet baz alınarak hesaplanırken kâr marjı satış fiyatı baz alınarak hesaplanır.",
      },
    ],

    relatedCalculators: [
      "kar-hesaplama",
      "zarar-hesaplama",
    ],

    seo: {
      title: "Kâr Marjı Hesaplama - Kâr Marjını Hesapla",
      description:
        "Satış fiyatı ve maliyet üzerinden kâr marjını hızlı ve ücretsiz hesaplayın.",
    },
  },

  {
    slug: "zarar-hesaplama",
    title: "Zarar Hesaplama",
    shortDescription:
      "Alış ve satış fiyatına göre zarar tutarını ve zarar oranını hesaplayın.",
    category: "matematik",
    keywords: [
      "zarar hesaplama",
      "zarar oranı hesaplama",
      "zarar hesapla",
      "satış zararı",
    ],

    inputs: [
      {
        id: "cost",
        label: "Alış Maliyeti",
        type: "number",
        placeholder: "Örneğin 1000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "sales",
        label: "Satış Fiyatı",
        type: "number",
        placeholder: "Örneğin 800",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
  const cost = Number(values.cost);
  const sales = Number(values.sales);

  if (!Number.isFinite(cost) || cost <= 0) {
    throw new Error(
      "Alış maliyeti 0'dan büyük ve geçerli bir sayı olmalıdır."
    );
  }

  if (!Number.isFinite(sales) || sales < 0) {
    throw new Error(
      "Satış fiyatı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
    );
  }

  const difference = sales - cost;

  if (difference > 0) {
    const profitRate = (difference / cost) * 100;

    return [
      {
        title: "Durum",
        value: "Kâr",
      },
      {
        title: "Kâr tutarı",
        value: `${difference.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`,
      },
      {
        title: "Kâr oranı",
        value: `${profitRate.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}%`,
      },
    ];
  }

  if (difference < 0) {
    const loss = Math.abs(difference);
    const lossRate = (loss / cost) * 100;

    return [
      {
        title: "Durum",
        value: "Zarar",
      },
      {
        title: "Zarar tutarı",
        value: `${loss.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`,
      },
      {
        title: "Zarar oranı",
        value: `${lossRate.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}%`,
      },
    ];
  }

  return [
    {
      title: "Durum",
      value: "Başa baş",
    },
    {
      title: "Fark",
      value: "0,00 TL",
    },
    {
      title: "Kâr / zarar oranı",
      value: "0,00%",
    },
  ];
},

    description:
      "Zarar hesaplama aracı ile maliyet ve satış fiyatı arasındaki zarar tutarını ve maliyete göre zarar oranını hesaplayabilirsiniz.",

    howItWorks:
      "Zarar tutarı maliyetten satış fiyatının çıkarılmasıyla bulunur. Zarar oranı zarar tutarının maliyete bölünüp 100 ile çarpılmasıyla hesaplanır.",

    faq: [
      {
        question: "1000 TL'ye alınan ürün 800 TL'ye satılırsa zarar ne kadar olur?",
        answer:
          "Zarar 200 TL'dir ve maliyete göre zarar oranı %20'dir.",
      },
    ],

    relatedCalculators: [
      "kar-hesaplama",
      "kar-marji-hesaplama",
    ],

    seo: {
      title: "Zarar Hesaplama - Zarar Tutarı ve Oranı",
      description:
        "Maliyet ve satış fiyatına göre zarar tutarını ve zarar oranını hesaplayın.",
    },
  },

  {
    slug: "basit-faiz-hesaplama",
    title: "Basit Faiz Hesaplama",
    shortDescription:
      "Anapara, faiz oranı ve süreye göre basit faiz tutarını hesaplayın.",
    category: "finans",
    keywords: [
      "basit faiz hesaplama",
      "faiz hesaplama",
      "basit faiz",
      "faiz tutarı hesaplama",
    ],

    inputs: [
      {
        id: "principal",
        label: "Anapara",
        type: "number",
        placeholder: "Örneğin 10000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "rate",
        label: "Yıllık Faiz Oranı",
        type: "number",
        placeholder: "Örneğin 20",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "years",
        label: "Süre",
        type: "number",
        placeholder: "Örneğin 2",
        unit: "Yıl",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const principal = Number(values.principal);
      const rate = Number(values.rate);
      const years = Number(values.years);

      if (principal < 0 || rate < 0 || years < 0) {
        throw new Error("Değerler 0'dan küçük olamaz.");
      }

      const interest = principal * (rate / 100) * years;
      const total = principal + interest;

      return [
        {
          title: "Faiz tutarı",
          value: `${interest.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam tutar",
          value: `${total.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "Basit faiz hesaplama aracı ile anapara, yıllık faiz oranı ve süre üzerinden faiz tutarını hesaplayabilirsiniz.",

    howItWorks:
      "Basit faiz, anaparanın faiz oranı ve süre ile çarpılmasıyla hesaplanır: Anapara × Faiz Oranı × Süre.",

    faq: [
      {
        question: "10000 TL'nin yıllık %20 basit faizi 2 yılda ne kadar olur?",
        answer:
          "2 yıllık basit faiz tutarı 4000 TL, anapara ile birlikte toplam tutar 14000 TL olur.",
      },
    ],

    relatedCalculators: [
      "bilesik-faiz-hesaplama",
      "mevduat-faizi-hesaplama",
      "faiz-hesaplama",
    ],

    seo: {
      title: "Basit Faiz Hesaplama - Faiz Tutarını Hesapla",
      description:
        "Anapara, faiz oranı ve süreye göre basit faiz tutarını hızlı ve ücretsiz hesaplayın.",
    },
  },

  {
    slug: "bilesik-faiz-hesaplama",
    title: "Bileşik Faiz Hesaplama",
    shortDescription:
      "Anapara, faiz oranı ve süreye göre bileşik faiz getirisi hesaplayın.",
    category: "finans",
    keywords: [
      "bileşik faiz hesaplama",
      "bileşik faiz",
      "faiz getirisi hesaplama",
      "yatırım faizi",
    ],

    inputs: [
      {
        id: "principal",
        label: "Anapara",
        type: "number",
        placeholder: "Örneğin 10000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "rate",
        label: "Yıllık Faiz Oranı",
        type: "number",
        placeholder: "Örneğin 20",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "years",
        label: "Süre",
        type: "number",
        placeholder: "Örneğin 2",
        unit: "Yıl",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "frequency",
        label: "Yılda Bileşikleşme Sayısı",
        type: "number",
        placeholder: "Örneğin 1",
        required: true,
        min: 1,
        step: 1,
      },
    ],

    calculate: (values) => {
      const principal = Number(values.principal);
      const rate = Number(values.rate);
      const years = Number(values.years);
      const frequency = Number(values.frequency);

if (!Number.isFinite(principal)) {
  throw new Error("Anapara geçerli bir sayı olmalıdır.");
}

if (principal < 0) {
  throw new Error("Anapara 0'dan küçük olamaz.");
}

if (!Number.isFinite(rate)) {
  throw new Error("Faiz oranı geçerli bir sayı olmalıdır.");
}

if (rate < 0) {
  throw new Error("Faiz oranı 0'dan küçük olamaz.");
}

if (!Number.isFinite(years)) {
  throw new Error("Süre geçerli bir sayı olmalıdır.");
}

if (years < 0) {
  throw new Error("Süre 0'dan küçük olamaz.");
}

if (!Number.isFinite(frequency)) {
  throw new Error("Bileşikleşme sayısı geçerli bir sayı olmalıdır.");
}

if (frequency <= 0) {
  throw new Error(
    "Bileşikleşme sayısı 0'dan büyük olmalıdır."
  );
}

if (!Number.isInteger(frequency)) {
  throw new Error(
    "Bileşikleşme sayısı tam sayı olmalıdır."
  );
}

      const total =
        principal *
        Math.pow(
          1 + rate / 100 / frequency,
          frequency * years
        );

      const interest = total - principal;

      return [
        {
          title: "Faiz getirisi",
          value: `${interest.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam tutar",
          value: `${total.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "Bileşik faiz hesaplama aracı ile faiz getirilerinin dönemsel olarak anaparaya eklendiği durumda toplam tutarı hesaplayabilirsiniz.",

    howItWorks:
      "Bileşik faiz formülü A = P(1 + r/n)^(nt) şeklindedir. Burada P anapara, r faiz oranı, n yıllık bileşikleşme sayısı ve t süredir.",

    faq: [
      {
        question: "Bileşik faiz nedir?",
        answer:
          "Bileşik faizde oluşan faiz, sonraki dönemlerde faiz hesabına dahil edilir.",
      },
    ],

    relatedCalculators: [
      "basit-faiz-hesaplama",
      "mevduat-faizi-hesaplama",
      "yatirim-getirisi-hesaplama",
    ],

    seo: {
      title: "Bileşik Faiz Hesaplama - Bileşik Getiri Hesapla",
      description:
        "Anapara, faiz oranı ve süreye göre bileşik faiz getirisini hesaplayın.",
    },
  },

  {
    slug: "kredi-taksit-hesaplama",
    title: "Kredi Taksit Hesaplama",
    shortDescription:
      "Kredi tutarı, faiz oranı ve vade üzerinden yaklaşık aylık taksiti hesaplayın.",
    category: "finans",
    keywords: [
      "kredi taksit hesaplama",
      "kredi hesaplama",
      "aylık kredi taksiti",
      "kredi ödeme hesaplama",
    ],

    inputs: [
      {
        id: "principal",
        label: "Kredi Tutarı",
        type: "number",
        placeholder: "Örneğin 100000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "monthlyRate",
        label: "Aylık Faiz Oranı",
        type: "number",
        placeholder: "Örneğin 3",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "months",
        label: "Vade",
        type: "number",
        placeholder: "Örneğin 12",
        unit: "Ay",
        required: true,
        min: 1,
        step: 1,
      },
    ],

    calculate: (values) => {
      const principal = Number(values.principal);
      const monthlyRate = Number(values.monthlyRate) / 100;
      const months = Number(values.months);

      if (principal <= 0 || months <= 0) {
        throw new Error(
          "Kredi tutarı ve vade 0'dan büyük olmalıdır."
        );
      }

      let monthlyPayment: number;

      if (monthlyRate === 0) {
        monthlyPayment = principal / months;
      } else {
        monthlyPayment =
          (principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
      }

      const totalPayment = monthlyPayment * months;
      const totalInterest = totalPayment - principal;

      return [
        {
          title: "Aylık taksit",
          value: `${monthlyPayment.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam ödeme",
          value: `${totalPayment.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam faiz",
          value: `${totalInterest.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "Kredi taksit hesaplama aracı, kredi tutarı, aylık faiz oranı ve vade üzerinden yaklaşık aylık taksiti ve toplam ödemeyi hesaplar.",

    howItWorks:
      "Aylık taksit, sabit taksitli kredi ödeme formülü kullanılarak hesaplanır. Sonuçlar banka masrafları, vergiler ve sigorta gibi ek maliyetleri içermeyebilir.",

    faq: [
      {
        question: "Kredi taksit hesabı banka teklifinin aynısı mıdır?",
        answer:
          "Hayır. Bu araç faiz ve vade üzerinden matematiksel bir yaklaşık hesaplama yapar. Banka masrafları, vergiler, sigorta ve diğer ücretler toplam maliyeti değiştirebilir.",
      },
    ],

    relatedCalculators: [
      "kredi-hesaplama",
      "kredi-toplam-maliyet-hesaplama",
      "basit-faiz-hesaplama",
    ],

    seo: {
      title: "Kredi Taksit Hesaplama - Aylık Taksit Hesapla",
      description:
        "Kredi tutarı, aylık faiz oranı ve vadeye göre yaklaşık aylık kredi taksitini ve toplam ödemeyi hesaplayın.",
    },
  },

  {
    slug: "yakit-tuketimi-hesaplama",
    title: "Yakıt Tüketimi Hesaplama",
    shortDescription:
      "Harcanan yakıt ve gidilen mesafeye göre aracınızın yakıt tüketimini hesaplayın.",
    category: "arac-seyahat",
    keywords: [
      "yakıt tüketimi hesaplama",
      "yakıt tüketimi",
      "100 km yakıt hesaplama",
      "araç yakıt tüketimi",
      "litre 100 km",
    ],

    inputs: [
      {
        id: "fuel",
        label: "Harcanan Yakıt",
        type: "number",
        placeholder: "Örneğin 40",
        unit: "L",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "distance",
        label: "Gidilen Mesafe",
        type: "number",
        placeholder: "Örneğin 500",
        unit: "km",
        required: true,
        min: 0.01,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const fuel = Number(values.fuel);
      const distance = Number(values.distance);

      if (fuel < 0 || distance <= 0) {
        throw new Error(
          "Yakıt 0 veya daha büyük, mesafe ise 0'dan büyük olmalıdır."
        );
      }

      const consumption = (fuel / distance) * 100;

      return [
        {
          title: "100 km'de yakıt tüketimi",
          value: `${consumption.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} L/100 km`,
        },
      ];
    },

    description:
      "Yakıt tüketimi hesaplama aracı ile harcanan yakıt ve gidilen mesafeye göre aracınızın 100 kilometrede kaç litre yakıt tükettiğini hesaplayabilirsiniz.",

    howItWorks:
      "Harcanan yakıt miktarı gidilen mesafeye bölünür ve 100 ile çarpılır.",

    faq: [
      {
        question: "40 litre yakıtla 500 km gidilirse tüketim kaç litre olur?",
        answer:
          "40 / 500 × 100 hesabıyla tüketim 8 L/100 km olur.",
      },
    ],

    relatedCalculators: [
      "yakit-maliyeti-hesaplama",
      "yakit-tasarrufu-hesaplama",
    ],

    seo: {
      title: "Yakıt Tüketimi Hesaplama - 100 Km Yakıt Tüketimi",
      description:
        "Harcanan yakıt ve mesafeye göre aracınızın 100 km yakıt tüketimini hesaplayın.",
    },
  },

  {
    slug: "yakit-maliyeti-hesaplama",
    title: "Yakıt Maliyeti Hesaplama",
    shortDescription:
      "Yakıt tüketimi, mesafe ve litre fiyatına göre yolculuk maliyetini hesaplayın.",
    category: "arac-seyahat",
    keywords: [
      "yakıt maliyeti hesaplama",
      "yakıt masrafı hesaplama",
      "yol yakıt maliyeti",
      "araç yakıt masrafı",
    ],

    inputs: [
      {
        id: "consumption",
        label: "Yakıt Tüketimi",
        type: "number",
        placeholder: "Örneğin 7",
        unit: "L/100 km",
        required: true,
        min: 0.01,
        step: 0.01,
      },
      {
        id: "distance",
        label: "Mesafe",
        type: "number",
        placeholder: "Örneğin 500",
        unit: "km",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "fuelPrice",
        label: "Yakıt Litre Fiyatı",
        type: "number",
        placeholder: "Örneğin 50",
        unit: "TL/L",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const consumption = Number(values.consumption);
      const distance = Number(values.distance);
      const fuelPrice = Number(values.fuelPrice);

      if (
  consumption < 0 ||
  distance <= 0 ||
  fuelPrice < 0
) {
  throw new Error(
    "Yakıt tüketimi ve yakıt fiyatı 0 veya daha büyük, mesafe ise 0'dan büyük olmalıdır."
  );
}

const fuelUsed = (consumption / 100) * distance;
const cost = fuelUsed * fuelPrice;
const costPerKm = cost / distance;

      return [
        {
          title: "Harcanan yakıt",
          value: `${fuelUsed.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} L`,
        },
        {
          title: "Toplam yakıt maliyeti",
          value: `${cost.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Kilometre başına maliyet",
          value: `${costPerKm.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL/km`,
        },
      ];
    },

    description:
      "Yakıt maliyeti hesaplama aracı ile aracınızın tüketimine, yol mesafesine ve yakıt litre fiyatına göre toplam yol maliyetini hesaplayabilirsiniz.",

    howItWorks:
      "Önce 100 kilometredeki tüketimden toplam yol için gerekli yakıt miktarı bulunur. Daha sonra kullanılan yakıt litre fiyatıyla çarpılarak maliyet hesaplanır.",

    faq: [
      {
        question: "7 L/100 km tüketen araç 500 km'de ne kadar yakıt harcar?",
        answer:
          "500 km için 35 litre yakıt harcar. Litre fiyatını girerek toplam maliyeti de hesaplayabilirsiniz.",
      },
    ],

    relatedCalculators: [
      "yakit-tuketimi-hesaplama",
      "arac-yakit-tasarrufu-hesaplama",
      "seyahat-maliyeti-hesaplama",
    ],

    seo: {
      title: "Yakıt Maliyeti Hesaplama - Yol Yakıt Masrafı",
      description:
        "Yakıt tüketimi, mesafe ve litre fiyatına göre yolculuğun yakıt maliyetini hesaplayın.",
    },
  },
  {
    slug: "iki-tarih-arasi-gun-hesaplama",
    title: "İki Tarih Arası Gün Hesaplama",
    shortDescription:
      "İki tarih arasındaki toplam gün sayısını hesaplayın.",
    category: "tarih-zaman",
    keywords: [
      "iki tarih arası gün hesaplama",
      "tarih farkı hesaplama",
      "iki tarih arasındaki gün",
      "kaç gün var",
      "tarih farkı",
    ],

    inputs: [
      {
        id: "startDate",
        label: "Başlangıç Tarihi",
        type: "date",
        required: true,
      },
      {
        id: "endDate",
        label: "Bitiş Tarihi",
        type: "date",
        required: true,
      },
    ],

    calculate: (values) => {
      const startDate = String(values.startDate);
      const endDate = String(values.endDate);

      if (!startDate || !endDate) {
        throw new Error("Başlangıç ve bitiş tarihlerini girin.");
      }

      const start = new Date(`${startDate}T00:00:00`);
      const end = new Date(`${endDate}T00:00:00`);

      if (
        Number.isNaN(start.getTime()) ||
        Number.isNaN(end.getTime())
      ) {
        throw new Error("Geçerli tarihler girin.");
      }

      if (end < start) {
        throw new Error(
          "Bitiş tarihi başlangıç tarihinden önce olamaz."
        );
      }

      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const difference = Math.round(
        (end.getTime() - start.getTime()) / millisecondsPerDay
      );

      return [
        {
          title: "Tarih farkı",
          value: `${difference.toLocaleString("tr-TR")} gün`,
        },
      ];
    },

    description:
      "İki tarih arasındaki gün farkını hesaplayabilirsiniz. Başlangıç ve bitiş tarihleri arasındaki takvim günü farkı hesaplanır.",

    howItWorks:
      "Bitiş tarihinden başlangıç tarihi çıkarılır ve milisaniye cinsinden fark gün sayısına dönüştürülür. Aynı tarih girildiğinde sonuç 0 gündür.",

    faq: [
      {
        question:
          "İki tarih arasındaki gün hesabında başlangıç günü dahil midir?",
        answer:
          "Sonuç, iki tarih arasındaki takvim günü farkını gösterir. Aynı tarih için sonuç 0 gündür.",
      },
    ],

    relatedCalculators: [
      "yas-hesaplama",
      "tarihe-gun-ekleme",
      "tarihten-gun-cikarma",
      "calisma-gunu-hesaplama",
    ],

    seo: {
      title: "İki Tarih Arası Gün Hesaplama - Tarih Farkı",
      description:
        "İki tarih arasındaki gün sayısını hızlı ve ücretsiz hesaplayın.",
    },
  },

  {
    slug: "tarihe-gun-ekleme",
    title: "Tarihe Gün Ekleme / Çıkarma",
    shortDescription:
      "Bir tarihe istediğiniz kadar gün ekleyin veya tarihten gün çıkarın.",
    category: "tarih-zaman",
    keywords: [
      "tarihe gün ekleme",
      "tarihe gün ekle",
      "tarihten gün çıkarma",
      "tarih hesaplama",
      "gün ekleme hesaplama",
    ],

    inputs: [
      {
        id: "date",
        label: "Başlangıç Tarihi",
        type: "date",
        required: true,
      },
      {
        id: "days",
        label: "Gün Sayısı",
        type: "number",
        placeholder: "Örneğin 30",
        unit: "gün",
        required: true,
        step: 1,
      },
      {
        id: "operation",
        label: "İşlem",
        type: "select",
        required: true,
        options: [
          {
            label: "Gün Ekle",
            value: "add",
          },
          {
            label: "Gün Çıkar",
            value: "subtract",
          },
        ],
      },
    ],

    calculate: (values) => {
      const dateValue = String(values.date);
      const days = Number(values.days);
      const operation = String(values.operation);

      if (!dateValue) {
        throw new Error("Başlangıç tarihini girin.");
      }

      if (!Number.isFinite(days)) {
        throw new Error("Gün sayısı geçerli bir sayı olmalıdır.");
      }

      if (!Number.isInteger(days)) {
        throw new Error("Gün sayısı tam sayı olmalıdır.");
      }

      if (days < 0) {
        throw new Error("Gün sayısı 0'dan küçük olamaz.");
      }

      if (
        operation !== "add" &&
        operation !== "subtract"
      ) {
        throw new Error("Geçerli bir işlem seçin.");
      }

      const date = new Date(`${dateValue}T00:00:00`);

      if (Number.isNaN(date.getTime())) {
        throw new Error("Geçerli bir tarih girin.");
      }

      const signedDays =
        operation === "add" ? days : -days;

      date.setDate(date.getDate() + signedDays);

      const resultDate = date.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      return [
        {
          title:
            operation === "add"
              ? "Yeni tarih"
              : "Hesaplanan tarih",
          value: resultDate,
        },
      ];
    },

    description:
      "Belirli bir tarihe gün ekleyerek veya tarihten gün çıkararak yeni tarihi kolayca hesaplayabilirsiniz.",

    howItWorks:
      "Başlangıç tarihine belirtilen gün sayısı eklenir veya çıkarılır. Ay ve yıl geçişleri otomatik olarak dikkate alınır.",

    faq: [
      {
        question: "Bir tarihe 30 gün eklersem hangi tarih çıkar?",
        answer:
          "Başlangıç tarihini, 30 gün ve 'Gün Ekle' seçeneğini girerek sonucu hesaplayabilirsiniz.",
      },
    ],

    relatedCalculators: [
      "iki-tarih-arasi-gun-hesaplama",
      "tarihten-gun-cikarma",
      "tarih-geri-sayim",
    ],

    seo: {
      title: "Tarihe Gün Ekleme - Tarihten Gün Çıkarma",
      description:
        "Bir tarihe gün ekleyin veya tarihten gün çıkarın. Yeni tarihi hızlı ve ücretsiz hesaplayın.",
    },
  },

  {
    slug: "calisma-gunu-hesaplama",
    title: "Çalışma Günü Hesaplama",
    shortDescription:
      "İki tarih arasındaki hafta içi çalışma günü sayısını hesaplayın.",
    category: "tarih-zaman",
    keywords: [
      "çalışma günü hesaplama",
      "iş günü hesaplama",
      "iş günü sayısı",
      "hafta içi gün hesaplama",
      "kaç iş günü",
    ],

    inputs: [
      {
        id: "startDate",
        label: "Başlangıç Tarihi",
        type: "date",
        required: true,
      },
      {
        id: "endDate",
        label: "Bitiş Tarihi",
        type: "date",
        required: true,
      },
    ],

    calculate: (values) => {
      const startDate = String(values.startDate);
      const endDate = String(values.endDate);

      if (!startDate || !endDate) {
        throw new Error("Başlangıç ve bitiş tarihlerini girin.");
      }

      const start = new Date(`${startDate}T00:00:00`);
      const end = new Date(`${endDate}T00:00:00`);

      if (
        Number.isNaN(start.getTime()) ||
        Number.isNaN(end.getTime())
      ) {
        throw new Error("Geçerli tarihler girin.");
      }

      if (end < start) {
        throw new Error(
          "Bitiş tarihi başlangıç tarihinden önce olamaz."
        );
      }

      let workingDays = 0;
      const current = new Date(start);

      while (current <= end) {
        const dayOfWeek = current.getDay();

        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          workingDays++;
        }

        current.setDate(current.getDate() + 1);
      }

      return [
        {
          title: "Çalışma günü",
          value: `${workingDays.toLocaleString("tr-TR")} gün`,
        },
      ];
    },

    description:
      "İki tarih arasındaki pazartesi-cuma günlerini çalışma günü olarak kabul ederek toplam çalışma günü sayısını hesaplayabilirsiniz.",

    howItWorks:
      "Başlangıç ve bitiş tarihleri arasındaki her gün kontrol edilir. Cumartesi ve pazar günleri hesaba katılmaz.",

    faq: [
      {
        question:
          "Çalışma günü hesabında hafta sonları dahil midir?",
        answer:
          "Hayır. Bu hesaplamada cumartesi ve pazar günleri çalışma günü olarak kabul edilmez.",
      },
      {
        question:
          "Resmi tatiller çalışma gününden çıkarılır mı?",
        answer:
          "Bu temel hesaplamada yalnızca cumartesi ve pazar günleri çıkarılır. Resmi tatiller henüz otomatik olarak hesaba katılmaz.",
      },
    ],

    relatedCalculators: [
      "iki-tarih-arasi-gun-hesaplama",
      "tarih-geri-sayim",
      "yillik-izin-hesaplama",
    ],

    seo: {
      title: "Çalışma Günü Hesaplama - İş Günü Hesapla",
      description:
        "İki tarih arasındaki hafta içi çalışma günü sayısını hızlı ve ücretsiz hesaplayın.",
    },
  },
  {
    slug: "faiz-hesaplama",
    title: "Faiz Hesaplama",
    shortDescription:
      "Anapara, yıllık faiz oranı, süre ve hesaplama yöntemine göre faiz tutarını hesaplayın.",
    category: "finans",
    keywords: [
      "faiz hesaplama",
      "faiz hesapla",
      "faiz getirisi hesaplama",
      "faiz tutarı",
      "faiz oranı hesaplama",
    ],

    inputs: [
      {
        id: "principal",
        label: "Anapara",
        type: "number",
        placeholder: "Örneğin 10000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "rate",
        label: "Yıllık Faiz Oranı",
        type: "number",
        placeholder: "Örneğin 20",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "years",
        label: "Süre",
        type: "number",
        placeholder: "Örneğin 2",
        unit: "Yıl",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "method",
        label: "Hesaplama Yöntemi",
        type: "select",
        required: true,
        options: [
          {
            label: "Basit Faiz",
            value: "simple",
          },
          {
            label: "Bileşik Faiz",
            value: "compound",
          },
        ],
      },
    ],

    calculate: (values) => {
      const principal = Number(values.principal);
      const rate = Number(values.rate);
      const years = Number(values.years);
      const method = String(values.method);

      if (!Number.isFinite(principal) || principal < 0) {
        throw new Error(
          "Anapara 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(rate) || rate < 0) {
        throw new Error(
          "Faiz oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(years) || years < 0) {
        throw new Error(
          "Süre 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        method !== "simple" &&
        method !== "compound"
      ) {
        throw new Error(
          "Geçerli bir hesaplama yöntemi seçin."
        );
      }

      let interest: number;
      let total: number;

      if (method === "simple") {
        interest =
          principal * (rate / 100) * years;

        total = principal + interest;
      } else {
        total =
          principal *
          Math.pow(
            1 + rate / 100,
            years
          );

        interest = total - principal;
      }

      return [
        {
          title: "Faiz tutarı",
          value: `${interest.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam tutar",
          value: `${total.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Hesaplama yöntemi",
          value:
            method === "simple"
              ? "Basit Faiz"
              : "Bileşik Faiz",
        },
      ];
    },

    description:
      "Faiz hesaplama aracı ile anapara, yıllık faiz oranı, süre ve hesaplama yöntemini seçerek faiz tutarını ve toplam tutarı hesaplayabilirsiniz.",

    howItWorks:
      "Basit faizde faiz, anapara üzerinden hesaplanır. Bileşik faizde ise her yıl oluşan faiz anaparaya eklenerek sonraki hesaplamalara dahil edilir. Bu araçta faiz oranı yıllık, süre ise yıl cinsindendir.",

    faq: [
      {
        question:
          "Faiz hesaplamasında faiz oranı hangi döneme aittir?",
        answer:
          "Bu araçta girilen faiz oranı yıllık faiz oranıdır ve süre yıl cinsinden girilir.",
      },
      {
        question:
          "Basit faiz ile bileşik faiz arasındaki fark nedir?",
        answer:
          "Basit faizde faiz yalnızca başlangıç anaparası üzerinden hesaplanır. Bileşik faizde oluşan faiz sonraki dönemlerde anaparaya dahil edilir.",
      },
      {
        question:
          "10.000 TL %20 yıllık basit faizle 2 yılda ne kadar faiz getirir?",
        answer:
          "Faiz tutarı 4.000 TL, toplam tutar ise 14.000 TL olur.",
      },
    ],

    relatedCalculators: [
      "basit-faiz-hesaplama",
      "bilesik-faiz-hesaplama",
      "mevduat-faizi-hesaplama",
      "yatirim-getirisi-hesaplama",
    ],

    seo: {
      title: "Faiz Hesaplama - Faiz Getirisi ve Toplam Tutar",
      description:
        "Anapara, yıllık faiz oranı ve süreye göre basit veya bileşik faiz tutarını ücretsiz hesaplayın.",
    },
  },
  {
    slug: "mevduat-faizi-hesaplama",
    title: "Mevduat Faizi Hesaplama",
    shortDescription:
      "Anapara, yıllık faiz oranı ve vade bilgilerine göre basit veya bileşik mevduat faizini hesaplayın.",
    category: "finans",
    keywords: [
      "mevduat faizi hesaplama",
      "mevduat faiz hesapla",
      "mevduat getirisi",
      "mevduat faiz getirisi",
      "vadeli mevduat hesaplama",
    ],

    inputs: [
      {
        id: "principal",
        label: "Anapara",
        type: "number",
        placeholder: "Örneğin 100000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "rate",
        label: "Yıllık Faiz Oranı",
        type: "number",
        placeholder: "Örneğin 40",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "termUnit",
        label: "Vade Birimi",
        type: "select",
        required: true,
        options: [
          {
            label: "Gün",
            value: "day",
          },
          {
            label: "Ay",
            value: "month",
          },
          {
            label: "Yıl",
            value: "year",
          },
        ],
      },
      {
        id: "term",
        label: "Vade Süresi",
        type: "number",
        placeholder: "Örneğin 32",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "method",
        label: "Hesaplama Yöntemi",
        type: "select",
        required: true,
        options: [
          {
            label: "Basit Faiz",
            value: "simple",
          },
          {
            label: "Bileşik Faiz",
            value: "compound",
          },
        ],
      },
    ],

    calculate: (values) => {
      const principal = Number(values.principal);
      const rate = Number(values.rate);
      const term = Number(values.term);
      const termUnit = String(values.termUnit);
      const method = String(values.method);

      if (!Number.isFinite(principal) || principal < 0) {
        throw new Error(
          "Anapara 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(rate) || rate < 0) {
        throw new Error(
          "Yıllık faiz oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(term) || term < 0) {
        throw new Error(
          "Vade süresi 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        termUnit !== "day" &&
        termUnit !== "month" &&
        termUnit !== "year"
      ) {
        throw new Error(
          "Geçerli bir vade birimi seçin."
        );
      }

      if (
        method !== "simple" &&
        method !== "compound"
      ) {
        throw new Error(
          "Geçerli bir hesaplama yöntemi seçin."
        );
      }

      // Vade süresini yıla çeviriyoruz.
      let years = term;

      if (termUnit === "day") {
        years = term / 365;
      } else if (termUnit === "month") {
        years = term / 12;
      }

      let interest: number;
      let total: number;

      if (method === "simple") {
        interest =
          principal *
          (rate / 100) *
          years;

        total = principal + interest;
      } else {
        total =
          principal *
          Math.pow(
            1 + rate / 100,
            years
          );

        interest = total - principal;
      }

      const termUnitLabel =
        termUnit === "day"
          ? "Gün"
          : termUnit === "month"
            ? "Ay"
            : "Yıl";

      return [
        {
          title: "Faiz getirisi",
          value: `${interest.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Vade sonu toplam tutar",
          value: `${total.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Vade",
          value: `${term.toLocaleString("tr-TR", {
            maximumFractionDigits: 2,
          })} ${termUnitLabel}`,
        },
        {
          title: "Hesaplama yöntemi",
          value:
            method === "simple"
              ? "Basit Faiz"
              : "Bileşik Faiz",
        },
      ];
    },

    description:
      "Mevduat faizi hesaplama aracı ile yatırılan anapara, yıllık faiz oranı ve vade süresine göre tahmini faiz getirisini ve vade sonundaki toplam tutarı hesaplayabilirsiniz. Vade gün, ay veya yıl olarak girilebilir.",

    howItWorks:
      "Hesaplamada yıllık faiz oranı kullanılır. Günlük vade 365 gün, aylık vade 12 ay üzerinden yıllık süreye dönüştürülür. Basit faizde faiz yalnızca başlangıç anaparası üzerinden hesaplanır. Bileşik faizde ise oluşan faiz toplam tutara eklenerek büyüme hesaplanır.",

    faq: [
      {
        question:
          "Mevduat faizinde vade hangi birimlerle girilebilir?",
        answer:
          "Vade gün, ay veya yıl olarak girilebilir. Araç, hesaplama sırasında bu süreyi yıllık süreye dönüştürür.",
      },
      {
        question:
          "Mevduat faizi hesaplamasında faiz oranı hangi döneme aittir?",
        answer:
          "Faiz oranı yıllık olarak girilir. Örneğin %40 faiz oranı, yıllık %40 oran anlamına gelir.",
      },
      {
        question:
          "Basit faiz ile bileşik faiz arasındaki fark nedir?",
        answer:
          "Basit faizde faiz başlangıç anaparası üzerinden hesaplanır. Bileşik faizde ise oluşan faiz toplam tutara eklenerek sonraki hesaplamalara dahil edilir.",
      },
    ],

    relatedCalculators: [
      "faiz-hesaplama",
      "basit-faiz-hesaplama",
      "bilesik-faiz-hesaplama",
      "yatirim-getirisi-hesaplama",
    ],

    seo: {
      title:
        "Mevduat Faizi Hesaplama - Vadeli Mevduat Getirisi",
      description:
        "Anapara, yıllık faiz oranı ve vade süresine göre mevduat faiz getirisini ve vade sonu toplam tutarı hesaplayın.",
    },
  },
  {
    slug: "kredi-hesaplama",
    title: "Kredi Hesaplama",
    shortDescription:
      "Kredi tutarı, aylık faiz oranı ve vade süresine göre aylık taksit, toplam geri ödeme ve toplam faizi hesaplayın.",
    category: "finans",
    keywords: [
      "kredi hesaplama",
      "kredi hesapla",
      "kredi taksit hesaplama",
      "kredi geri ödeme",
      "kredi faiz hesaplama",
    ],

    inputs: [
      {
        id: "principal",
        label: "Kredi Tutarı",
        type: "number",
        placeholder: "Örneğin 100000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "monthlyRate",
        label: "Aylık Faiz Oranı",
        type: "number",
        placeholder: "Örneğin 3,5",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "months",
        label: "Vade Süresi",
        type: "number",
        placeholder: "Örneğin 24",
        unit: "Ay",
        required: true,
        min: 1,
        step: 1,
      },
    ],

    calculate: (values) => {
      const principal = Number(values.principal);
      const monthlyRate = Number(values.monthlyRate);
      const months = Number(values.months);

      if (!Number.isFinite(principal) || principal < 0) {
        throw new Error(
          "Kredi tutarı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(monthlyRate) || monthlyRate < 0) {
        throw new Error(
          "Aylık faiz oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        !Number.isFinite(months) ||
        months <= 0 ||
        !Number.isInteger(months)
      ) {
        throw new Error(
          "Vade süresi 0'dan büyük ve tam sayı olarak girilmelidir."
        );
      }

      let monthlyPayment: number;

      if (monthlyRate === 0) {
        monthlyPayment = principal / months;
      } else {
        const rate = monthlyRate / 100;

        monthlyPayment =
          principal *
          (rate * Math.pow(1 + rate, months)) /
          (Math.pow(1 + rate, months) - 1);
      }

      const totalPayment = monthlyPayment * months;
      const totalInterest = totalPayment - principal;

      return [
        {
          title: "Aylık taksit",
          value: `${monthlyPayment.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam geri ödeme",
          value: `${totalPayment.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam faiz",
          value: `${totalInterest.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "Kredi hesaplama aracı ile kredi tutarı, aylık faiz oranı ve vade süresini kullanarak yaklaşık aylık taksit tutarını, toplam geri ödemeyi ve toplam faiz maliyetini hesaplayabilirsiniz.",

    howItWorks:
      "Kredi taksiti, sabit taksitli kredi formülü kullanılarak hesaplanır. Aylık faiz oranı yüzde olarak girilir ve vade ay cinsindendir. Faiz oranı %0 olduğunda kredi tutarı doğrudan vade ayına bölünür.",

    faq: [
      {
        question:
          "Kredi hesaplamasında faiz oranı hangi döneme aittir?",
        answer:
          "Bu araçta faiz oranı aylık olarak girilir. Örneğin %3 değeri aylık %3 faiz oranını ifade eder.",
      },
      {
        question:
          "Kredi hesaplama sonucunda hangi bilgiler gösterilir?",
        answer:
          "Aylık taksit, toplam geri ödeme ve toplam faiz tutarı gösterilir.",
      },
      {
        question:
          "Faiz oranı %0 olursa kredi nasıl hesaplanır?",
        answer:
          "Faiz oranı %0 olduğunda kredi tutarı vade ayına bölünerek aylık taksit hesaplanır. Toplam geri ödeme kredi tutarına eşit olur.",
      },
    ],

    relatedCalculators: [
      "kredi-taksit-hesaplama",
      "kredi-toplam-maliyet-hesaplama",
      "faiz-hesaplama",
      "basit-faiz-hesaplama",
    ],

    seo: {
      title:
        "Kredi Hesaplama - Aylık Taksit ve Toplam Geri Ödeme",
      description:
        "Kredi tutarı, aylık faiz oranı ve vade bilgilerini girerek aylık taksit, toplam geri ödeme ve toplam faiz tutarını hesaplayın.",
    },
  },
  {
    slug: "kredi-toplam-maliyet-hesaplama",
    title: "Kredi Toplam Maliyet Hesaplama",
    shortDescription:
      "Kredi tutarı, faiz, vade ve ek masraflara göre toplam geri ödeme ve toplam kredi maliyetini hesaplayın.",
    category: "finans",
    keywords: [
      "kredi toplam maliyet hesaplama",
      "kredi maliyeti",
      "kredi toplam geri ödeme",
      "kredi masraf hesaplama",
      "kredi faiz ve masraf hesaplama",
    ],

    inputs: [
      {
        id: "principal",
        label: "Kredi Tutarı",
        type: "number",
        placeholder: "Örneğin 100000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "monthlyRate",
        label: "Aylık Faiz Oranı",
        type: "number",
        placeholder: "Örneğin 3",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "months",
        label: "Vade Süresi",
        type: "number",
        placeholder: "Örneğin 24",
        unit: "Ay",
        required: true,
        min: 1,
        step: 1,
      },
      {
        id: "fees",
        label: "Dosya / Kredi Masrafı",
        type: "number",
        placeholder: "Örneğin 1000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "insurance",
        label: "Sigorta / Ek Maliyet",
        type: "number",
        placeholder: "Örneğin 2500",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const principal = Number(values.principal);
      const monthlyRate = Number(values.monthlyRate);
      const months = Number(values.months);
      const fees = Number(values.fees);
      const insurance = Number(values.insurance);

      if (!Number.isFinite(principal) || principal <= 0) {
        throw new Error(
          "Kredi tutarı 0'dan büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(monthlyRate) || monthlyRate < 0) {
        throw new Error(
          "Aylık faiz oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        !Number.isFinite(months) ||
        months <= 0 ||
        !Number.isInteger(months)
      ) {
        throw new Error(
          "Vade süresi 0'dan büyük ve tam sayı olarak girilmelidir."
        );
      }

      if (!Number.isFinite(fees) || fees < 0) {
        throw new Error(
          "Dosya / kredi masrafı 0 veya daha büyük olmalıdır."
        );
      }

      if (!Number.isFinite(insurance) || insurance < 0) {
        throw new Error(
          "Sigorta / ek maliyet 0 veya daha büyük olmalıdır."
        );
      }

      let monthlyPayment: number;

      if (monthlyRate === 0) {
        monthlyPayment = principal / months;
      } else {
        const rate = monthlyRate / 100;

        monthlyPayment =
          principal *
          (rate * Math.pow(1 + rate, months)) /
          (Math.pow(1 + rate, months) - 1);
      }

      const totalInstallments =
        monthlyPayment * months;

      const totalInterest =
        totalInstallments - principal;

      const totalAdditionalCost =
        fees + insurance;

      const totalCost =
        totalInstallments + totalAdditionalCost;

      return [
        {
          title: "Aylık taksit",
          value: `${monthlyPayment.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam faiz",
          value: `${totalInterest.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Ek maliyetler",
          value: `${totalAdditionalCost.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam geri ödeme",
          value: `${totalInstallments.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam kredi maliyeti",
          value: `${totalCost.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "Kredi toplam maliyet hesaplama aracı; kredi tutarı, aylık faiz oranı, vade, dosya veya kredi masrafı ve sigorta gibi ek maliyetleri dikkate alarak kredinin toplam geri ödeme tutarını ve toplam maliyetini hesaplar.",

    howItWorks:
      "Önce kredi tutarı, aylık faiz oranı ve vade üzerinden aylık sabit taksit hesaplanır. Taksitlerin toplamından kredi anaparası çıkarılarak toplam faiz bulunur. Dosya/kredi masrafı ile sigorta ve diğer ek maliyetler daha sonra toplam geri ödeme tutarına eklenir.",

    faq: [
      {
        question:
          "Kredi toplam maliyetine hangi giderler dahil edilir?",
        answer:
          "Bu araçta kredi taksitlerinin toplamına girilen dosya/kredi masrafı ve sigorta/ek maliyet tutarları eklenir.",
      },
      {
        question:
          "Kredi toplam maliyeti ile toplam geri ödeme aynı şey midir?",
        answer:
          "Hayır. Toplam geri ödeme yalnızca kredi taksitlerinin toplamını gösterir. Toplam kredi maliyetinde ise buna dosya masrafı ve sigorta gibi girilen ek maliyetler de dahil edilir.",
      },
      {
        question:
          "Faiz oranı %0 olduğunda nasıl hesaplanır?",
        answer:
          "Faiz %0 olduğunda kredi tutarı vade ayına bölünerek aylık taksit hesaplanır. Ek maliyetler ayrıca toplam maliyete eklenir.",
      },
    ],

    relatedCalculators: [
      "kredi-hesaplama",
      "kredi-taksit-hesaplama",
      "faiz-hesaplama",
      "mevduat-faizi-hesaplama",
    ],

    seo: {
      title:
        "Kredi Toplam Maliyet Hesaplama - Faiz ve Masraflar",
      description:
        "Kredi tutarı, aylık faiz, vade ve ek masrafları kullanarak toplam geri ödeme ve kredi maliyetini hesaplayın.",
    },
  },
  {
    slug: "kredi-karti-asgari-odeme-hesaplama",
    title: "Kredi Kartı Asgari Ödeme Hesaplama",
    shortDescription:
      "Dönem borcu, asgari ödeme oranı ve önceki dönemden devreden borca göre asgari ödeme tutarını ve kalan borcu hesaplayın.",
    category: "finans",
    keywords: [
      "kredi kartı asgari ödeme hesaplama",
      "asgari ödeme hesapla",
      "kredi kartı borcu hesaplama",
      "asgari ödeme tutarı",
      "kredi kartı kalan borç",
    ],

    inputs: [
      {
        id: "statementDebt",
        label: "Dönem Borcu",
        type: "number",
        placeholder: "Örneğin 20000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "minimumRate",
        label: "Asgari Ödeme Oranı",
        type: "number",
        placeholder: "Örneğin 20",
        unit: "%",
        required: true,
        min: 0,
        max: 100,
        step: 0.01,
      },
      {
        id: "previousDebt",
        label: "Önceki Dönemden Devreden Borç",
        type: "number",
        placeholder: "Örneğin 5000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const statementDebt = Number(
        values.statementDebt
      );
      const minimumRate = Number(
        values.minimumRate
      );
      const previousDebt = Number(
        values.previousDebt
      );

      if (
        !Number.isFinite(statementDebt) ||
        statementDebt < 0
      ) {
        throw new Error(
          "Dönem borcu 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        !Number.isFinite(minimumRate) ||
        minimumRate < 0 ||
        minimumRate > 100
      ) {
        throw new Error(
          "Asgari ödeme oranı %0 ile %100 arasında olmalıdır."
        );
      }

      if (
        !Number.isFinite(previousDebt) ||
        previousDebt < 0
      ) {
        throw new Error(
          "Önceki dönemden devreden borç 0 veya daha büyük olmalıdır."
        );
      }

      const totalDebt =
        statementDebt + previousDebt;

      const minimumPayment =
        statementDebt *
        (minimumRate / 100);

      const remainingDebt =
        Math.max(
          totalDebt - minimumPayment,
          0
        );

      return [
        {
          title: "Toplam mevcut borç",
          value: `${totalDebt.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Asgari ödeme tutarı",
          value: `${minimumPayment.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Ödeme sonrası kalan borç",
          value: `${remainingDebt.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];
    },

    description:
      "Kredi kartı asgari ödeme hesaplama aracı ile dönem borcu, asgari ödeme oranı ve önceki dönemden devreden borç bilgilerini kullanarak asgari ödeme tutarını ve ödeme sonrasında kalan borcu hesaplayabilirsiniz.",

    howItWorks:
      "Asgari ödeme tutarı, girilen dönem borcunun belirlenen asgari ödeme oranı ile çarpılmasıyla hesaplanır. Önceki dönemden devreden borç toplam mevcut borca eklenir. Asgari ödeme düşüldükten sonra kalan tutar ödeme sonrası borç olarak gösterilir.",

    faq: [
      {
        question:
          "Asgari ödeme tutarı nasıl hesaplanır?",
        answer:
          "Asgari ödeme tutarı, dönem borcu ile girilen asgari ödeme oranının çarpılmasıyla hesaplanır.",
      },
      {
        question:
          "Önceki dönemden devreden borç hesaba katılır mı?",
        answer:
          "Evet. Önceki dönemden devreden borç toplam mevcut borca eklenir ve ödeme sonrası kalan borç hesaplanırken dikkate alınır.",
      },
      {
        question:
          "Asgari ödeme oranı %100 olursa ne olur?",
        answer:
          "Dönem borcunun tamamı asgari ödeme olarak hesaplanır. Önceki dönemden devreden borç varsa bu tutar ödeme sonrasında kalan borca dahil olabilir.",
      },
    ],

    relatedCalculators: [
      "kredi-hesaplama",
      "kredi-toplam-maliyet-hesaplama",
      "faiz-hesaplama",
    ],

    seo: {
      title:
        "Kredi Kartı Asgari Ödeme Hesaplama",
      description:
        "Dönem borcu, asgari ödeme oranı ve devreden borca göre kredi kartı asgari ödeme tutarını ve kalan borcu hesaplayın.",
    },
  },
  {
    slug: "enflasyon-hesaplama",
    title: "Enflasyon Hesaplama",
    shortDescription:
      "Başlangıç tutarı, yıllık enflasyon oranı ve dönem bilgisine göre gelecekteki tutarı ve toplam artışı hesaplayın.",
    category: "finans",
    keywords: [
      "enflasyon hesaplama",
      "enflasyon hesapla",
      "enflasyon artışı hesaplama",
      "enflasyonun etkisi",
      "gelecekteki fiyat hesaplama",
    ],

    inputs: [
      {
        id: "initialAmount",
        label: "Başlangıç Tutarı",
        type: "number",
        placeholder: "Örneğin 100000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "inflationRate",
        label: "Yıllık Enflasyon Oranı",
        type: "number",
        placeholder: "Örneğin 30",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "years",
        label: "Dönem",
        type: "number",
        placeholder: "Örneğin 5",
        unit: "Yıl",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const initialAmount = Number(
        values.initialAmount
      );
      const inflationRate = Number(
        values.inflationRate
      );
      const years = Number(values.years);

      if (
        !Number.isFinite(initialAmount) ||
        initialAmount < 0
      ) {
        throw new Error(
          "Başlangıç tutarı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        !Number.isFinite(inflationRate) ||
        inflationRate < 0
      ) {
        throw new Error(
          "Enflasyon oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(years) || years < 0) {
        throw new Error(
          "Dönem 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      const futureAmount =
        initialAmount *
        Math.pow(
          1 + inflationRate / 100,
          years
        );

      const totalIncrease =
        futureAmount - initialAmount;

      const totalIncreaseRate =
        initialAmount === 0
          ? 0
          : (totalIncrease / initialAmount) * 100;

      return [
        {
          title: "Gelecekteki tutar",
          value: `${futureAmount.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam artış",
          value: `${totalIncrease.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Toplam artış oranı",
          value: `${totalIncreaseRate.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}%`,
        },
      ];
    },

    description:
      "Enflasyon hesaplama aracı ile belirli bir başlangıç tutarının yıllık enflasyon oranına göre gelecekte yaklaşık ne kadar olacağını ve toplam fiyat artışını hesaplayabilirsiniz.",

    howItWorks:
      "Hesaplama, yıllık enflasyon oranının her yıl bileşik olarak uygulandığı varsayımına dayanır. Başlangıç tutarı, enflasyon oranı ve dönem kullanılarak gelecekteki tahmini tutar hesaplanır.",

    faq: [
      {
        question:
          "Enflasyon hesaplamasında oran nasıl uygulanır?",
        answer:
          "Girilen yıllık enflasyon oranı her yıl bileşik olarak uygulanır. Böylece önceki yıllardaki fiyat artışları sonraki hesaplamalara dahil edilir.",
      },
      {
        question:
          "Gelecekteki tutar neyi ifade eder?",
        answer:
          "Gelecekteki tutar, başlangıç tutarının belirtilen enflasyon oranı ve dönem sonunda enflasyon etkisiyle ulaşacağı tahmini nominal değeri gösterir.",
      },
      {
        question:
          "Enflasyon oranı %0 olursa ne olur?",
        answer:
          "Enflasyon oranı %0 olduğunda başlangıç tutarı değişmez ve toplam artış 0 TL olur.",
      },
    ],

    relatedCalculators: [
      "alim-gucu-hesaplama",
      "faiz-hesaplama",
      "yatirim-getirisi-hesaplama",
      "maas-zam-hesaplama",
    ],

    seo: {
      title:
        "Enflasyon Hesaplama - Gelecekteki Tutar ve Artış",
      description:
        "Başlangıç tutarı, yıllık enflasyon oranı ve döneme göre gelecekteki tahmini tutarı ve toplam fiyat artışını hesaplayın.",
    },
  },
  {
    slug: "alim-gucu-hesaplama",
    title: "Alım Gücü Hesaplama",
    shortDescription:
      "Başlangıç para miktarı, yıllık enflasyon oranı ve döneme göre gelecekteki alım gücünü ve alım gücü kaybını hesaplayın.",
    category: "finans",
    keywords: [
      "alım gücü hesaplama",
      "alım gücü kaybı",
      "enflasyon alım gücü",
      "paranın alım gücü",
      "alım gücü hesapla",
    ],

    inputs: [
      {
        id: "amount",
        label: "Başlangıç Para Miktarı",
        type: "number",
        placeholder: "Örneğin 100000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "inflationRate",
        label: "Yıllık Enflasyon Oranı",
        type: "number",
        placeholder: "Örneğin 30",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "years",
        label: "Dönem",
        type: "number",
        placeholder: "Örneğin 5",
        unit: "Yıl",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],

    calculate: (values) => {
      const amount = Number(values.amount);
      const inflationRate = Number(
        values.inflationRate
      );
      const years = Number(values.years);

      if (
        !Number.isFinite(amount) ||
        amount < 0
      ) {
        throw new Error(
          "Başlangıç para miktarı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        !Number.isFinite(inflationRate) ||
        inflationRate < 0
      ) {
        throw new Error(
          "Enflasyon oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (
        !Number.isFinite(years) ||
        years < 0
      ) {
        throw new Error(
          "Dönem 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      const inflationFactor =
        Math.pow(
          1 + inflationRate / 100,
          years
        );

      const futurePurchasingPower =
        amount / inflationFactor;

      const purchasingPowerLoss =
        amount - futurePurchasingPower;

      const purchasingPowerLossRate =
        amount === 0
          ? 0
          : (purchasingPowerLoss / amount) * 100;

      return [
        {
          title: "Gelecekteki alım gücü",
          value: `${futurePurchasingPower.toLocaleString(
            "tr-TR",
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )} TL`,
        },
        {
          title: "Alım gücü kaybı",
          value: `${purchasingPowerLoss.toLocaleString(
            "tr-TR",
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )} TL`,
        },
        {
          title: "Alım gücü kaybı oranı",
          value: `${purchasingPowerLossRate.toLocaleString(
            "tr-TR",
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )}%`,
        },
      ];
    },

    description:
      "Alım gücü hesaplama aracı, belirli bir para miktarının yıllık enflasyon nedeniyle gelecekte bugünkü değerle karşılaştırıldığında ne kadar satın alma gücüne sahip olacağını hesaplar.",

    howItWorks:
      "Hesaplamada yıllık enflasyon oranının her yıl bileşik şekilde uygulandığı varsayılır. Başlangıç para miktarı enflasyon faktörüne bölünerek gelecekteki alım gücü bulunur. Başlangıç tutarı ile gelecekteki alım gücü arasındaki fark alım gücü kaybını gösterir.",

    faq: [
      {
        question:
          "Alım gücü ne anlama gelir?",
        answer:
          "Alım gücü, belirli bir para miktarıyla satın alınabilecek mal ve hizmet miktarını ifade eder. Enflasyon yükseldikçe aynı para miktarının satın alma gücü genellikle azalır.",
      },
      {
        question:
          "Alım gücü hesaplamasında enflasyon nasıl uygulanır?",
        answer:
          "Girilen yıllık enflasyon oranının her yıl bileşik olarak uygulandığı varsayılır.",
      },
      {
        question:
          "100.000 TL'nin alım gücü enflasyonla azalır mı?",
        answer:
          "Enflasyonun pozitif olduğu bir senaryoda, para nominal olarak aynı kalsa bile satın alma gücü hesaplama döneminin sonunda daha düşük olur.",
      },
      {
        question:
          "Enflasyon oranı %0 olursa ne olur?",
        answer:
          "Enflasyon oranı %0 olduğunda başlangıç para miktarının alım gücü değişmez ve alım gücü kaybı 0 olur.",
      },
    ],

    relatedCalculators: [
      "enflasyon-hesaplama",
      "yatirim-getirisi-hesaplama",
      "tasarruf-hesaplama",
      "maas-zam-hesaplama",
    ],

    seo: {
      title:
        "Alım Gücü Hesaplama - Enflasyonun Alım Gücüne Etkisi",
      description:
        "Para miktarı, yıllık enflasyon oranı ve döneme göre gelecekteki alım gücünü ve alım gücü kaybını hesaplayın.",
    },
  },
  {
    slug: "maas-zam-hesaplama",
    title: "Maaş Zam Hesaplama",
    shortDescription:
      "Mevcut maaş ve zam oranına göre zam tutarını ve zamlı maaşı hesaplayın.",
    category: "finans",
    keywords: [
      "maaş zam hesaplama",
      "maaş zammı hesaplama",
      "zamlı maaş hesaplama",
      "maaş zam oranı",
      "maaş zam tutarı",
    ],
    inputs: [
      {
        id: "currentSalary",
        label: "Mevcut Maaş",
        type: "number",
        placeholder: "Örn. 30000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "raiseRate",
        label: "Zam Oranı",
        type: "number",
        placeholder: "Örn. 25",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],
    calculate: (values) => {
      const currentSalary = Number(values.currentSalary);
      const raiseRate = Number(values.raiseRate);

      if (!Number.isFinite(currentSalary) || currentSalary < 0) {
        throw new Error(
          "Mevcut maaş 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(raiseRate) || raiseRate < 0) {
        throw new Error(
          "Zam oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      const raiseAmount = (currentSalary * raiseRate) / 100;
      const newSalary = currentSalary + raiseAmount;

      const formatTL = (value: number) =>
        `${value.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`;

      return [
        {
          title: "Zam tutarı",
          value: formatTL(raiseAmount),
        },
        {
          title: "Zamlı maaş",
          value: formatTL(newSalary),
        },
      ];
    },
    description:
      "Maaş zam hesaplama aracı, mevcut maaş ve zam oranını kullanarak uygulanacak zam tutarını ve zam sonrasında alınacak toplam maaşı hesaplar.",
    howItWorks:
      "Zam tutarı, mevcut maaşın zam oranıyla çarpılıp 100'e bölünmesiyle hesaplanır. Zamlı maaş ise mevcut maaşa hesaplanan zam tutarının eklenmesiyle bulunur.",
    faq: [
      {
        question: "Maaş zam tutarı nasıl hesaplanır?",
        answer:
          "Maaş zam tutarı, mevcut maaş × zam oranı ÷ 100 formülüyle hesaplanır.",
      },
      {
        question: "Zamlı maaş nasıl hesaplanır?",
        answer:
          "Zamlı maaş, mevcut maaş ile hesaplanan zam tutarının toplamıdır.",
      },
      {
        question: "Örneğin 30.000 TL maaşa %25 zam gelirse ne olur?",
        answer:
          "Zam tutarı 7.500 TL, zamlı maaş ise 37.500 TL olur.",
      },
    ],
    relatedCalculators: [
      "net-maas-hesaplama",
      "brut-net-maas-hesaplama",
      "kira-artis-hesaplama",
    ],
    seo: {
      title: "Maaş Zam Hesaplama - Zamlı Maaş Hesaplama",
      description:
        "Mevcut maaş ve zam oranını girerek zam tutarını ve zamlı maaşı kolayca hesaplayın.",
    },
  },
  {
    slug: "net-maas-hesaplama",
    title: "Net Maaş Hesaplama",
    shortDescription:
      "2026 yılı Türkiye ücret vergisi, SGK ve işsizlik primi kesintilerini dikkate alarak brüt maaştan net maaşı hesaplayın.",
    category: "finans",
    keywords: [
      "net maaş hesaplama",
      "brüt net maaş",
      "net maaş",
      "maaş hesaplama",
      "brütten nete maaş",
      "2026 net maaş",
      "maaş vergi hesaplama",
    ],
    inputs: [
      {
        id: "grossSalary",
        label: "Brüt Maaş",
        type: "number",
        placeholder: "Örn. 50000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "previousTaxBase",
        label: "Önceki Aylardan Kümülatif Gelir Vergisi Matrahı",
        type: "number",
        placeholder: "Ocak ayında 0 girin",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],
    calculate: (values) => {
      const grossSalary = Number(values.grossSalary);
      const previousTaxBase = Number(values.previousTaxBase);

      if (!Number.isFinite(grossSalary) || grossSalary < 0) {
        throw new Error(
          "Brüt maaş 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(previousTaxBase) || previousTaxBase < 0) {
        throw new Error(
          "Önceki aylardan kümülatif gelir vergisi matrahı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      const MINIMUM_WAGE_GROSS = 33_030;
      const SGK_RATE = 0.14;
      const UNEMPLOYMENT_RATE = 0.01;
      const STAMP_TAX_RATE = 0.00759;

      const SGK_CEILING = MINIMUM_WAGE_GROSS * 9;

      const employeeSgk = Math.min(
        grossSalary,
        SGK_CEILING
      ) * SGK_RATE;

      const unemploymentInsurance = Math.min(
        grossSalary,
        SGK_CEILING
      ) * UNEMPLOYMENT_RATE;

      const taxableSalaryBase =
        grossSalary -
        employeeSgk -
        unemploymentInsurance;

      /*
       * 2026 ücret gelirleri vergi tarifesi:
       * 190.000 TL'ye kadar              %15
       * 400.000 TL'nin 190.000 TL'si     %20
       * 1.500.000 TL'nin 400.000 TL'si   %27
       * 5.300.000 TL'nin 1.500.000 TL'si %35
       * 5.300.000 TL üzeri               %40
       */
      function cumulativeIncomeTax(
        taxableBase: number
      ): number {
        if (taxableBase <= 0) {
          return 0;
        }

        if (taxableBase <= 190_000) {
          return taxableBase * 0.15;
        }

        if (taxableBase <= 400_000) {
          return (
            190_000 * 0.15 +
            (taxableBase - 190_000) * 0.20
          );
        }

        if (taxableBase <= 1_500_000) {
          return (
            190_000 * 0.15 +
            210_000 * 0.20 +
            (taxableBase - 400_000) * 0.27
          );
        }

        if (taxableBase <= 5_300_000) {
          return (
            190_000 * 0.15 +
            210_000 * 0.20 +
            1_100_000 * 0.27 +
            (taxableBase - 1_500_000) * 0.35
          );
        }

        return (
          190_000 * 0.15 +
          210_000 * 0.20 +
          1_100_000 * 0.27 +
          3_800_000 * 0.35 +
          (taxableBase - 5_300_000) * 0.40
        );
      }

      const currentCumulativeTaxBase =
        previousTaxBase + taxableSalaryBase;

      const grossIncomeTax =
        cumulativeIncomeTax(currentCumulativeTaxBase) -
        cumulativeIncomeTax(previousTaxBase);

      /*
       * Asgari ücret gelir vergisi istisnası.
       * Asgari ücretin SGK ve işsizlik primi düşüldükten
       * sonra kalan kısmı gelir vergisinden istisnadır.
       */
      const minimumWageTaxBase =
        MINIMUM_WAGE_GROSS -
        MINIMUM_WAGE_GROSS * SGK_RATE -
        MINIMUM_WAGE_GROSS * UNEMPLOYMENT_RATE;

      const previousMinimumWageTaxBase =
        Math.min(
          previousTaxBase,
          minimumWageTaxBase * 12
        );

      const currentMinimumWageTaxBase =
        previousMinimumWageTaxBase +
        minimumWageTaxBase;

      const minimumWageIncomeTaxExemption =
        Math.max(
          0,
          cumulativeIncomeTax(
            currentMinimumWageTaxBase
          ) -
            cumulativeIncomeTax(
              previousMinimumWageTaxBase
            )
        );

      const incomeTax = Math.max(
        0,
        grossIncomeTax -
          minimumWageIncomeTaxExemption
      );

      /*
       * Damga vergisi istisnası:
       * Brüt asgari ücrete isabet eden kısım istisnadır.
       */
      const stampTaxBase = Math.max(
        0,
        grossSalary - MINIMUM_WAGE_GROSS
      );

      const stampTax =
        stampTaxBase * STAMP_TAX_RATE;

      const totalDeductions =
        employeeSgk +
        unemploymentInsurance +
        incomeTax +
        stampTax;

      const netSalary =
        grossSalary - totalDeductions;

      const formatTL = (value: number) =>
        `${value.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`;

      return [
        {
          title: "Net maaş",
          value: formatTL(netSalary),
        },
        {
          title: "SGK işçi payı",
          value: formatTL(employeeSgk),
        },
        {
          title: "İşsizlik sigortası",
          value: formatTL(unemploymentInsurance),
        },
        {
          title: "Gelir vergisi",
          value: formatTL(incomeTax),
        },
        {
          title: "Damga vergisi",
          value: formatTL(stampTax),
        },
        {
          title: "Toplam kesinti",
          value: formatTL(totalDeductions),
        },
      ];
    },
    description:
      "Net maaş hesaplama aracı, brüt maaştan SGK işçi payı, işsizlik sigortası, gelir vergisi ve damga vergisi kesintilerini dikkate alarak yaklaşık net maaşı hesaplar. 2026 yılı Türkiye ücret vergisi tarifesi ve asgari ücret istisnası esas alınmıştır.",
    howItWorks:
      "Brüt maaştan SGK ve işsizlik sigortası işçi payları düşülerek gelir vergisi matrahı bulunur. Kümülatif gelir vergisi matrahına göre ilgili vergi dilimi uygulanır. Asgari ücret gelir vergisi istisnası düşüldükten sonra gelir vergisi belirlenir. Damga vergisinde ise brüt asgari ücrete isabet eden kısım istisna edilir.",
    faq: [
      {
        question: "Net maaş nasıl hesaplanır?",
        answer:
          "Net maaş, brüt maaştan SGK işçi payı, işsizlik sigortası, gelir vergisi ve damga vergisi gibi yasal kesintiler düşüldükten sonra kalan tutardır.",
      },
      {
        question:
          "Neden kümülatif gelir vergisi matrahı soruluyor?",
        answer:
          "Gelir vergisi yıl içinde kademeli vergi dilimlerine göre hesaplandığı için aynı brüt maaşın net tutarı yılın farklı aylarında değişebilir. Ocak ayında önceki kümülatif matrah 0 TL'dir.",
      },
      {
        question:
          "Asgari ücret gelir vergisine tabi midir?",
        answer:
          "2026 yılında asgari ücret gelir vergisi ve damga vergisinden istisnadır. Asgari ücretin üzerinde ücret alanlarda da ilgili istisna uygulanır.",
      },
      {
        question:
          "Ocak ayında kümülatif gelir vergisi matrahına ne yazmalıyım?",
        answer:
          "Ocak ayı için önceki aylardan gelen kümülatif matrah bulunmadığından 0 TL girilmelidir.",
      },
    ],
    relatedCalculators: [
      "brut-net-maas-hesaplama",
      "maas-zam-hesaplama",
      "fazla-mesai-hesaplama",
      "saatlik-ucret-hesaplama",
    ],
    seo: {
      title:
        "Net Maaş Hesaplama 2026 - Brüt Maaştan Net Maaş",
      description:
        "2026 Türkiye vergi dilimleri, SGK, işsizlik ve asgari ücret istisnasını dikkate alarak brüt maaştan net maaşı hesaplayın.",
    },
  },
  {
    slug: "kira-artis-hesaplama",
    title: "Kira Artış Hesaplama",
    shortDescription:
      "Mevcut kira ve artış oranına göre kira artış tutarını ve yeni kira bedelini hesaplayın.",
    category: "finans",
    keywords: [
      "kira artış hesaplama",
      "kira zammı hesaplama",
      "kira artışı",
      "yeni kira hesaplama",
      "kira zam oranı",
      "kira artış oranı",
    ],
    inputs: [
      {
        id: "currentRent",
        label: "Mevcut Kira",
        type: "number",
        placeholder: "Örn. 15000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "increaseRate",
        label: "Kira Artış Oranı",
        type: "number",
        placeholder: "Örn. 25",
        unit: "%",
        required: true,
        min: 0,
        step: 0.01,
      },
    ],
    calculate: (values) => {
      const currentRent = Number(values.currentRent);
      const increaseRate = Number(values.increaseRate);

      if (!Number.isFinite(currentRent) || currentRent < 0) {
        throw new Error(
          "Mevcut kira 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(increaseRate) || increaseRate < 0) {
        throw new Error(
          "Kira artış oranı 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      const increaseAmount =
        (currentRent * increaseRate) / 100;

      const newRent = currentRent + increaseAmount;

      const formatTL = (value: number) =>
        `${value.toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} TL`;

      return [
        {
          title: "Kira artış tutarı",
          value: formatTL(increaseAmount),
        },
        {
          title: "Yeni kira",
          value: formatTL(newRent),
        },
      ];
    },
    description:
      "Kira artış hesaplama aracı, mevcut kira bedeli ve belirlenen artış oranına göre artış tutarını ve yeni kira bedelini hesaplar. Artış oranı kullanıcı tarafından girilir.",
    howItWorks:
      "Kira artış tutarı, mevcut kira bedelinin artış oranıyla çarpılıp 100'e bölünmesiyle hesaplanır. Yeni kira ise mevcut kira ile artış tutarının toplamıdır.",
    faq: [
      {
        question: "Kira artış tutarı nasıl hesaplanır?",
        answer:
          "Kira artış tutarı, mevcut kira × artış oranı ÷ 100 formülüyle hesaplanır.",
      },
      {
        question: "Yeni kira nasıl hesaplanır?",
        answer:
          "Yeni kira, mevcut kira bedeline hesaplanan artış tutarının eklenmesiyle bulunur.",
      },
      {
        question: "15.000 TL kiraya %25 zam yapılırsa yeni kira ne olur?",
        answer:
          "Artış tutarı 3.750 TL, yeni kira bedeli ise 18.750 TL olur.",
      },
      {
        question: "Bu araç yasal kira artış oranını otomatik belirler mi?",
        answer:
          "Hayır. Araç, kullanıcının girdiği artış oranını hesaplar. Yasal kira artış oranları dönemsel olarak değişebileceğinden güncel yasal oran ayrıca kontrol edilmelidir.",
      },
    ],
    relatedCalculators: [
      "maas-zam-hesaplama",
      "yuzde-artis-hesaplama",
      "yuzde-hesaplama",
      "enflasyon-hesaplama",
    ],
    seo: {
      title: "Kira Artış Hesaplama - Yeni Kira Hesaplama",
      description:
        "Mevcut kira ve artış oranını girerek kira artış tutarını ve yeni kira bedelini kolayca hesaplayın.",
    },
  },
  {
    slug: "tasarruf-hesaplama",
    title: "Tasarruf Hesaplama",
    shortDescription:
      "Aylık gelir ve giderlerinize göre ne kadar tasarruf edebileceğinizi, tasarruf oranınızı ve yıllık birikiminizi hesaplayın.",
    category: "finans",
    keywords: [
      "tasarruf hesaplama",
      "tasarruf oranı hesaplama",
      "aylık tasarruf hesaplama",
      "birikim hesaplama",
      "para biriktirme hesaplama",
      "tasarruf planı",
    ],
    inputs: [
      {
        id: "monthlyIncome",
        label: "Aylık Gelir",
        type: "number",
        placeholder: "Örn. 50000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "monthlyExpenses",
        label: "Aylık Gider",
        type: "number",
        placeholder: "Örn. 35000",
        unit: "TL",
        required: true,
        min: 0,
        step: 0.01,
      },
      {
        id: "savingsGoal",
        label: "Tasarruf Hedefi (İsteğe Bağlı)",
        type: "number",
        placeholder: "Örn. 100000",
        unit: "TL",
        min: 0,
        step: 0.01,
      },
    ],
    calculate: (values) => {
      const monthlyIncome = Number(values.monthlyIncome);
      const monthlyExpenses = Number(values.monthlyExpenses);

      const rawSavingsGoal = values.savingsGoal;
      const savingsGoal =
        rawSavingsGoal === undefined ||
        rawSavingsGoal === null ||
        rawSavingsGoal === ""
          ? 0
          : Number(rawSavingsGoal);

      if (!Number.isFinite(monthlyIncome) || monthlyIncome < 0) {
        throw new Error(
          "Aylık gelir 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(monthlyExpenses) || monthlyExpenses < 0) {
        throw new Error(
          "Aylık gider 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      if (!Number.isFinite(savingsGoal) || savingsGoal < 0) {
        throw new Error(
          "Tasarruf hedefi 0 veya daha büyük ve geçerli bir sayı olmalıdır."
        );
      }

      const monthlySavings =
        monthlyIncome - monthlyExpenses;

      const savingsRate =
        monthlyIncome > 0
          ? (monthlySavings / monthlyIncome) * 100
          : 0;

      const annualSavings =
        monthlySavings * 12;

      const results = [
        {
          title: "Aylık tasarruf",
          value: `${monthlySavings.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
        {
          title: "Tasarruf oranı",
          value: `${savingsRate.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}%`,
        },
        {
          title: "Yıllık tasarruf",
          value: `${annualSavings.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} TL`,
        },
      ];

      if (savingsGoal > 0 && monthlySavings > 0) {
        const monthsToGoal =
          Math.ceil(savingsGoal / monthlySavings);

        const years = Math.floor(monthsToGoal / 12);
        const months = monthsToGoal % 12;

        let goalDuration = "";

        if (years > 0) {
          goalDuration += `${years} yıl`;
        }

        if (months > 0) {
          goalDuration +=
            goalDuration.length > 0
              ? ` ${months} ay`
              : `${months} ay`;
        }

        if (goalDuration === "") {
          goalDuration = "1 ay";
        }

        results.push({
          title: "Hedefe ulaşma süresi",
          value: `${monthsToGoal} ay (${goalDuration})`,
        });
      } else if (savingsGoal > 0 && monthlySavings <= 0) {
        results.push({
          title: "Hedefe ulaşma süresi",
          value: "Mevcut gelir-gider durumuyla hesaplanamaz.",
        });
      }

      return results;
    },
    description:
      "Tasarruf hesaplama aracı, aylık gelir ve gider arasındaki farkı kullanarak aylık ve yıllık tasarruf miktarını ve gelir içindeki tasarruf oranını hesaplar. İsteğe bağlı tasarruf hedefi girildiğinde hedefe ulaşmak için gereken tahmini süreyi de gösterir.",
    howItWorks:
      "Aylık tasarruf, aylık gelirden aylık giderin çıkarılmasıyla bulunur. Tasarruf oranı, aylık tasarrufun aylık gelire oranıdır. Yıllık tasarruf ise aylık tasarrufun 12 ile çarpılmasıyla hesaplanır. Tasarruf hedefi girildiğinde hedef tutarı aylık tasarrufa bölünerek gereken ay sayısı hesaplanır.",
    faq: [
      {
        question: "Aylık tasarruf nasıl hesaplanır?",
        answer:
          "Aylık tasarruf, aylık gelirden aylık giderin çıkarılmasıyla hesaplanır.",
      },
      {
        question: "Tasarruf oranı nasıl hesaplanır?",
        answer:
          "Tasarruf oranı, aylık tasarrufun aylık gelire bölünüp 100 ile çarpılmasıyla hesaplanır.",
      },
      {
        question: "Tasarruf hedefime kaç ayda ulaşırım?",
        answer:
          "Tasarruf hedefiniz aylık tasarruf miktarına bölünerek yaklaşık süre hesaplanır. Hesaplama, her ay aynı miktarda tasarruf edildiği varsayımına dayanır.",
      },
      {
        question:
          "Aylık giderim gelirimden fazlaysa ne olur?",
        answer:
          "Bu durumda aylık tasarruf negatif çıkar ve mevcut gelir-gider durumuyla bir tasarruf hedefine ulaşma süresi hesaplanamaz.",
      },
    ],
    relatedCalculators: [
      "yatirim-getirisi-hesaplama",
      "enflasyon-hesaplama",
      "alim-gucu-hesaplama",
      "maas-zam-hesaplama",
    ],
    seo: {
      title: "Tasarruf Hesaplama - Aylık Birikim Hesaplama",
      description:
        "Gelir ve giderlerinizi girerek aylık tasarrufunuzu, tasarruf oranınızı, yıllık birikiminizi ve hedefe ulaşma sürenizi hesaplayın.",
    },
  },
];