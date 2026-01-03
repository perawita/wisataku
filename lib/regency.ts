export type LocalizedText = { id: string; en: string };

export type Regency = {
  id: number;
  name: LocalizedText;
  location: string | LocalizedText;
  description: LocalizedText;
  image: string;
  lat: number;
  lng: number;
  kode_wilayah_tingkat_iv?: string;
  total_destinations?: number;
  total_culinary?: number;
  total_hotels?: number;
};

export const REGENCY: Regency[] = [
  {
    id: 1,
    name: { id: "Kota Mataram", en: "Mataram City" },
    location: { id: "Pulau Lombok, NTB", en: "Lombok Island, NTB" },
    description: {
      id: "Ibu kota Provinsi Nusa Tenggara Barat dan pusat pemerintahan, ekonomi, serta pusat kuliner khas Lombok.",
      en: "Capital city of West Nusa Tenggara and center of government, economy, and Lombok's culinary hub.",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Hubbul_Wathan_Islamic_Center.jpg/800px-Hubbul_Wathan_Islamic_Center.jpg",
    lat: -8.5833,
    lng: 116.1167,
    kode_wilayah_tingkat_iv: "52.71.03.1007",
    total_destinations: 18,
    total_culinary: 124, // Mataram adalah pusat kuliner (Ayam Taliwang, Satay Rembiga)
    total_hotels: 85,    // Dominasi hotel bisnis dan city hotel
  },
  {
    id: 2,
    name: { id: "Kabupaten Lombok Barat", en: "West Lombok Regency" },
    location: { id: "Lombok Barat, NTB", en: "West Lombok, NTB" },
    description: {
      id: "Gerbang masuk laut melalui Pelabuhan Lembar dan pusat resort legendaris di kawasan Senggigi.",
      en: "Sea gateway via Lembar Harbor and home to legendary resorts in the Senggigi area.",
    },
    image: "https://asset.kompas.com/crops/cRNr5juQrYzRCs4k9lp2C5VQEj8=/0x0:0x0/1200x800/data/photo/2016/02/12/1216083IMG-20160207-114407p.jpg",
    lat: -8.6950,
    lng: 116.0700,
    kode_wilayah_tingkat_iv: "52.01.07.2001",
    total_destinations: 42, // Memiliki banyak Gili (Gili Nanggu, Kedis, dll)
    total_culinary: 56,
    total_hotels: 110,   // Banyak resort di sepanjang pesisir Senggigi hingga Sekotong
  },
  {
    id: 3,
    name: { id: "Kabupaten Lombok Tengah", en: "Central Lombok Regency" },
    location: { id: "Lombok Tengah, NTB", en: "Central Lombok, NTB" },
    description: {
      id: "Rumah bagi Sirkuit Internasional Mandalika, bandara internasional, dan deretan pantai pasir putih eksotis.",
      en: "Home to the Mandalika International Circuit, international airport, and a row of exotic white sand beaches.",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Turn_10_Mandalika_International_Circuit.jpg/1024px-Turn_10_Mandalika_International_Circuit.jpg",
    lat: -8.7062,
    lng: 116.2704,
    kode_wilayah_tingkat_iv: "52.02.03.2004",
    total_destinations: 65, // Sangat tinggi karena banyaknya pantai di selatan
    total_culinary: 48,
    total_hotels: 95,    // Pertumbuhan pesat hotel/homestay di area Kuta & Mandalika
  },
  {
    id: 4,
    name: { id: "Kabupaten Lombok Timur", en: "East Lombok Regency" },
    location: { id: "Lombok Timur, NTB", en: "East Lombok, NTB" },
    description: {
      id: "Wilayah agraris yang megah dengan akses pendakian Rinjani via Sembalun dan keajaiban Pantai Pink.",
      en: "Grand agrarian region with Rinjani trekking access via Sembalun and the wonders of Pink Beach.",
    },
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRkjJav1NqWxNFA9GtGVCDsS1ztZst20VOtV7QQyDMhDTAtpDt6EMo41r9LWVOhoxdMrSLH50PAH26boBp35GLXxQI&s=19",
    lat: -8.5300,
    lng: 116.5300,
    kode_wilayah_tingkat_iv: "52.01.07.2008",
    total_destinations: 55, // Termasuk Sembalun, Tetebatu, dan Pantai Pink
    total_culinary: 32,
    total_hotels: 45,    // Dominasi homestay di Sembalun dan resort di Labuan Pandan
  },
  {
    id: 5,
    name: { id: "Kabupaten Lombok Utara", en: "North Lombok Regency" },
    location: { id: "Lombok Utara, NTB", en: "North Lombok, NTB" },
    description: {
      id: "Destinasi premium yang mencakup Tiga Gili (Trawangan, Meno, Air) dan puncak Gunung Rinjani.",
      en: "Premium destination covering the Three Gilis (Trawangan, Meno, Air) and the summit of Mount Rinjani.",
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSznOLl_N61lm8wZq_zAFqXrrQyf7DV2bzueGHW4CIP0slB02drc-ptlQKEnG5ug1rBYJnqBCdpqE3glLXx8X-xjFOQS5q_ScqsFBke0QghvYPFIy3EJ8sGMy13VQwTI_MMQXlAANdPH3I8=w1080-h624-n-k-no",
    lat: -8.3500,
    lng: 116.2000,
    kode_wilayah_tingkat_iv: "52.08.05.2002",
    total_destinations: 38,
    total_culinary: 88,  // Sangat tinggi karena restoran di Gili Islands
    total_hotels: 150,   // Jumlah penginapan terbanyak (Vila & Bungalow di 3 Gili)
  },
];

