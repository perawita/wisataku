export type LocalizedText = { id: string; en: string };

export type Place = {
  id: number;
  name: LocalizedText;
  location: string;      // kecamatan / area
  regency?: string;      // Kabupaten / Kota
  kode_wilayah_tingkat_iv?: string;
  category?: "destinasi" | "penginapan";
  description: LocalizedText;
  image: string;
  lat: number;
  lng: number;
};

export const PLACES: Place[] = [
  // ====================== DESTINASI (LOMBOK TENGAH) ======================
  {
    id: 1,
    name: { id: "Pantai Kuta Lombok", en: "Kuta Beach Lombok" },
    location: "Kuta",
    regency: "Kabupaten Lombok Tengah",
    kode_wilayah_tingkat_iv: "52.02.05.2001",
    category: "destinasi",
    description: {
      id: "Pasir putih dan ombak yang ramah untuk berselancar, plus pemandangan bukit sekitar.",
      en: "White sand and surf-friendly waves, with scenic surrounding hills.",
    },
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.darmawisataindonesia.co.id/wp-content/uploads/2021/05/Pantai-Kuta-Mandalika.jpg",
    lat: -8.8953,
    lng: 116.2821,
  },
  {
    id: 2,
    name: { id: "Tanjung Aan", en: "Tanjung Aan" },
    location: "Kuta",
    regency: "Kabupaten Lombok Tengah",
    kode_wilayah_tingkat_iv: "52.02.05.2001",
    category: "destinasi",
    description: {
      id: "Pantai dengan pasir merica khas dan area berenang yang tenang.",
      en: "Beach with pepper-like sand and calm swimming areas.",
    },
    image: "https://digitaltravelcouple.com/wp-content/uploads/2020/05/tanjung-aan-beach-lombok.jpg",
    lat: -8.9101,
    lng: 116.3214,
  },
  {
    id: 3,
    name: { id: "Bukit Merese", en: "Merese Hill" },
    location: "Kuta",
    regency: "Kabupaten Lombok Tengah",
    kode_wilayah_tingkat_iv: "52.02.05.2001",
    category: "destinasi",
    description: {
      id: "Sunset spot dengan pemandangan laut yang luas dan bukit berundak.",
      en: "Sunset spot with wide sea views and terraced hills.",
    },
    image: "https://img.okezone.com/content/2017/03/04/406/1634148/bukit-merese-sampai-batu-payung-ini-pesona-alam-kawasan-mandalika-EK71CAiQgl.JPG",
    lat: -8.9147,
    lng: 116.3255,
  },
  {
    id: 9,
    name: { id: "Pantai Selong Belanak", en: "Selong Belanak Beach" },
    location: "Selong Belanak",
    regency: "Kabupaten Lombok Tengah",
    kode_wilayah_tingkat_iv: "52.02.05.2007",
    category: "destinasi",
    description: {
      id: "Pantai tenang dengan pasir putih lembut, cocok untuk pemula berselancar.",
      en: "Calm beach with soft white sand, suitable for beginner surfing.",
    },
    image: "https://www.lombokjourney.com/wp-content/uploads/2024/11/akomodasi-di-pantai-selong-belanak-lombok-tengah.jpeg",
    lat: -8.8661,
    lng: 116.1601,
  },

  // ====================== DESTINASI (LOMBOK UTARA) ======================
  {
    id: 4,
    name: { id: "Air Terjun Tiu Kelep", en: "Tiu Kelep Waterfall" },
    location: "Senaru",
    regency: "Kabupaten Lombok Utara",
    kode_wilayah_tingkat_iv: "52.08.01.2001",
    category: "destinasi",
    description: {
      id: "Air terjun spektakuler di kaki Gunung Rinjani, ideal untuk trekking singkat.",
      en: "A spectacular waterfall at the foot of Mount Rinjani, ideal for short trekking.",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Senaru_Waterfall_of_Tiu_Kelep.jpg/2560px-Senaru_Waterfall_of_Tiu_Kelep.jpg",
    lat: -8.3005,
    lng: 116.4026,
  },
  {
    id: 6,
    name: { id: "Gili Trawangan", en: "Gili Trawangan" },
    location: "Gili Indah",
    regency: "Kabupaten Lombok Utara",
    kode_wilayah_tingkat_iv: "52.08.02.2002",
    category: "destinasi",
    description: {
      id: "Pulau kecil dengan snorkeling dan kehidupan malam santai tanpa kendaraan bermotor.",
      en: "Small island with snorkeling and relaxed nightlife without motorized vehicles.",
    },
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQLZPu6Aul1am6jriYgNGZhXfGhuUCl3PsSoXC2ibF7xQj5n0gBgxPWHJbojfxKWmAaFM7Msbrx1blMmOC0N99w_ZAoeUeDT4zyA9pVZGeSZSgxAWmxkWqrBY0ubJxf2Qrff4bdTVdgLc/s1600/Gili+Trawangan+3.jpg",
    lat: -8.3496,
    lng: 116.0382,
  },

  // ====================== DESTINASI (LOMBOK BARAT) ======================
  {
    id: 10,
    name: { id: "Pantai Senggigi", en: "Senggigi Beach" },
    location: "Batu Layar",
    regency: "Kabupaten Lombok Barat",
    kode_wilayah_tingkat_iv: "52.01.07.2003",
    category: "destinasi",
    description: {
      id: "Pusat pariwisata tertua di Lombok dengan garis pantai panjang dan spot sunset.",
      en: "Lombok's oldest tourism hub with a long coastline and sunset spots.",
    },
    image: "https://mediaim.expedia.com/destination/1/d64452d29d45b40e20811d84f89a37b9.jpg",
    lat: -8.4912,
    lng: 116.0469,
  },

  // ====================== DESTINASI (LOMBOK TIMUR) ======================
  {
    id: 11,
    name: { id: "Pantai Pink", en: "Pink Beach" },
    location: "Jerowaru",
    regency: "Kabupaten Lombok Timur",
    kode_wilayah_tingkat_iv: "52.03.01.2001",
    category: "destinasi",
    description: {
      id: "Pantai unik dengan pasir berwarna merah muda akibat fragmen karang merah.",
      en: "Unique beach with pink-colored sand from red coral fragments.",
    },
    image: "https://dahanaranch.com/wp-content/uploads/2025/06/sejarah-pantai-pink-lombok.jpg",
    lat: -8.9134,
    lng: 116.5921,
  },

  // ====================== PENGINAPAN ======================
  {
    id: 101,
    name: { id: "Hotel Santika Mataram", en: "Hotel Santika Mataram" },
    location: "Mataram",
    regency: "Kota Mataram",
    kode_wilayah_tingkat_iv: "52.71.01.1001",
    category: "penginapan",
    description: {
      id: "Hotel bisnis dan keluarga di pusat kota dengan akses mudah ke kuliner lokal.",
      en: "Business and family hotel in the city center with easy access to local culinary.",
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipMeKMzCArHdItADhnO6ZRDc_oJPnhUORdAwpkxC=s1360-w1360-h1020",
    lat: -8.5847,
    lng: 116.1084,
  },
  {
    id: 102,
    name: { id: "Hotel Vila Ombak", en: "Hotel Vila Ombak" },
    location: "Gili Trawangan",
    regency: "Kabupaten Lombok Utara",
    kode_wilayah_tingkat_iv: "52.08.02.2002",
    category: "penginapan",
    description: {
      id: "Hotel internasional pertama di Gili Trawangan dengan gaya arsitektur Sasak.",
      en: "The first international hotel on Gili Trawangan featuring Sasak architecture.",
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipM517_I5g6JwT4dknyP52MpD0Iokdz4zpjHOrA1=s1360-w1360-h1020",
    lat: -8.3533,
    lng: 116.0441,
  },
  {
    id: 104,
    name: { id: "Qunci Villas Resort", en: "Qunci Villas Resort" },
    location: "Senggigi",
    regency: "Kabupaten Lombok Barat",
    kode_wilayah_tingkat_iv: "52.01.07.2003",
    category: "penginapan",
    description: {
      id: "Resor tepi pantai yang memadukan seni modern dengan ketenangan alam Mangsit.",
      en: "Beachfront resort blending modern art with the natural serenity of Mangsit.",
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegQAR6kez6oKZsddqylN5gXrE13B4upOiJA&s",
    lat: -8.4728,
    lng: 116.0375,
  },
  {
    id: 106,
    name: { id: "Pullman Lombok Merujani", en: "Pullman Lombok Merujani" },
    location: "Kuta Mandalika",
    regency: "Kabupaten Lombok Tengah",
    kode_wilayah_tingkat_iv: "52.02.05.2001",
    category: "penginapan",
    description: {
      id: "Resor bintang 5 terbaru di kawasan Sirkuit Mandalika dengan fasilitas premium.",
      en: "The newest 5-star resort in the Mandalika Circuit area with premium facilities.",
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipNPscKtqUQvpH0lNcZ63qk0YQLAKuxlHSx6jl8u=w243-h203-n-k-no-nu",
    lat: -8.8955,
    lng: 116.2995,
  },
  {
    id: 107,
    name: { id: "Sempiak Villas", en: "Sempiak Villas" },
    location: "Selong Belanak",
    regency: "Kabupaten Lombok Tengah",
    kode_wilayah_tingkat_iv: "52.02.05.2007",
    category: "penginapan",
    description: {
      id: "Vila eksklusif di atas bukit dengan pemandangan langsung ke Teluk Selong Belanak.",
      en: "Exclusive villas on a hill with direct views of Selong Belanak Bay.",
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipMm_3WA77thp-uBres9cfC9vs3rV8XW8mBygnih=s1360-w1360-h1020",
    lat: -8.8681,
    lng: 116.1558,
  },
  {
    id: 108,
    name: { id: "Sikara Lombok Hotel", en: "Sikara Lombok Hotel" },
    location: "Kuta",
    regency: "Kabupaten Lombok Tengah",
    kode_wilayah_tingkat_iv: "52.02.05.2001",
    category: "penginapan",
    description: {
      id: "Hotel butik dengan konsep tropis modern yang dekat dengan pusat keramaian Kuta.",
      en: "Boutique hotel with a modern tropical concept close to Kuta's vibrant center.",
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipM-Pax21YbOEQdK_4hwBrLOTuc4p9fI7gwnQG1R=s1360-w1360-h1020",
    lat: -8.8894,
    lng: 116.2801,
  }
];