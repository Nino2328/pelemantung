import { useState } from "react";
import { Wheat, Store, Music2, Trees, ArrowUpRight, X } from "lucide-react";

import umkmImage from "../assets/potensi/umkm.jpg";
import pertanianImage from "../assets/potensi/pertanian.jpg";
import lingkunganImage from "../assets/potensi/lingkungan.jpg";
import budayaImage from "../assets/potensi/budaya.jpg";


const potentials = [
  {
    icon: Wheat,
    title: "Pertanian",
    description:
      "Potensi pertanian dan hasil bumi masyarakat Dusun Pelemantung.",
    image: pertanianImage,
    details: {
      overview: "Dusun Pelemantung memiliki potensi pertanian yang tinggi dengan tanah yang subur dan iklim yang mendukung.",
      products: [
        "Padi sawah - hasil panen utama yang dibudidayakan masyarakat",
        "Palawija - jagung, kacang tanah, dan ubi kayu",
        "Sayuran - cabai, bawang merah, dan sayuran organik lainnya",
        "Tanaman perkebunan - kelapa, kelapa sawit, dan kopi"
      ],
      potential: "Pengembangan pertanian organik dan pertanian berkelanjutan untuk meningkatkan nilai jual hasil bumi lokal."
    }
  },
  {
    icon: Store,
    title: "UMKM",
    description:
      "Berbagai usaha masyarakat yang menjadi bagian dari ekonomi lokal.",
    image: umkmImage,
    details: {
      overview: "Dusun Pelemantung memiliki 3 UMKM yang aktif berkembang dan memberikan kontribusi terhadap ekonomi lokal.",
      products: [
        "Pembuatan kerajinan tangan - berbahan dari hasil bumi lokal",
        "Pengolahan makanan - kripik, selai, dan produk makanan tradisional",
        "Perdagangan kecil menengah - toko kelontong dan usaha jasa",
        "Peternakan - ayam, unggas, dan ternak lainnya"
      ],
      potential: "Peningkatan kualitas produk dan pemasaran melalui digital untuk memperluas jangkauan pasar UMKM lokal."
    }
  },
  {
    icon: Music2,
    title: "Budaya",
    description:
      "Tradisi, kesenian, dan kegiatan budaya yang berkembang di masyarakat.",
    image: budayaImage,
    details: {
      overview: "Budaya lokal Dusun Pelemantung sangat kaya dengan tradisi dan kesenian yang tetap lestari hingga saat ini.",
      products: [
        "Kesenian tradisional - wayang, tari-tarian, dan musik tradisional",
        "Perayaan adat - upacara desa, syukuran, dan perayaan hari besar",
        "Kerajinan budaya - batik, anyaman, dan kerajinan tradisional lainnya",
        "Cerita rakyat dan legenda dusun yang dipelihara turun temurun"
      ],
      potential: "Pelestarian budaya melalui dokumentasi, pendidikan, dan promosi budaya kepada generasi muda dan wisatawan."
    }
  },
  {
    icon: Trees,
    title: "Lingkungan",
    description:
      "Potensi lingkungan dan wilayah yang dapat dikembangkan bersama.",
    image: lingkunganImage,
    details: {
      overview: "Lingkungan Dusun Pelemantung yang asri dan asuhan menjadi aset berharga untuk pengembangan pariwisata berkelanjutan.",
      products: [
        "Taman dan ruang publik - area hijau untuk aktivitas masyarakat",
        "Sumber air bersih - mata air alami dan sumur di berbagai lokasi",
        "Vegetasi alami - hutan, perbukitan, dan keanekaragaman hayati",
        "Pemandangan alam - landscape indah yang potensial untuk wisata"
      ],
      potential: "Pengembangan pariwisata alam, eco-tourism, dan konservasi lingkungan untuk menjaga kelestarian alam dan menambah pendapatan masyarakat."
    }
  },
];

function Potensi() {
  const [selectedPotential, setSelectedPotential] = useState(null);

  return (
    <>
      <section id="potensi" className="section potential-section">
        <div className="container">
          {/* =====================================================
              SECTION HEADING
          ====================================================== */}
          <div className="section-heading">
            <span className="eyebrow">POTENSI LOKAL</span>

            <h2>
              Potensi
              <span> Dusun</span>
            </h2>

            <p>
              Berbagai potensi lokal yang menjadi bagian dari kehidupan masyarakat
              Dusun Pelemantung.
            </p>
          </div>

          {/* =====================================================
              POTENTIAL GRID
          ====================================================== */}
          <div className="potential-grid">
            {potentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="potential-card" key={item.title}>
                  {/* =================================================
                      IMAGE
                  ================================================== */}
                  <div className="potential-image">
                    {item.image ? (
                      <img src={item.image} alt={item.title} loading="lazy" />
                    ) : (
                      <div className="potential-image-empty">
                        <Icon size={42} strokeWidth={1.2} />
                      </div>
                    )}

                    {/* ICON */}
                    <div className="potential-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}
                  <div className="potential-content">
                    <span className="potential-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <button 
                      type="button"
                      onClick={() => setSelectedPotential(item)}
                    >
                      <span>Lihat informasi</span>

                      <ArrowUpRight size={17} strokeWidth={1.8} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MODAL DETAIL
      ========================================================= */}
      {selectedPotential && (
        <div className="potential-modal-overlay" onClick={() => setSelectedPotential(null)}>
          <div className="potential-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              className="potential-modal-close"
              onClick={() => setSelectedPotential(null)}
              aria-label="Tutup modal"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            {selectedPotential.image && (
              <div className="potential-modal-image">
                <img src={selectedPotential.image} alt={selectedPotential.title} />
              </div>
            )}

            {/* Modal Content */}
            <div className="potential-modal-content">
              <div className="potential-modal-header">
                <div className="potential-modal-icon">
                  {(() => {
                    const Icon = selectedPotential.icon;
                    return <Icon size={28} strokeWidth={1.8} />;
                  })()}
                </div>
                <h2>{selectedPotential.title}</h2>
              </div>

              {/* Overview */}
              <div className="potential-modal-section">
                <h3>Gambaran Umum</h3>
                <p>{selectedPotential.details.overview}</p>
              </div>

              {/* Products */}
              <div className="potential-modal-section">
                <h3>Produk & Kegiatan</h3>
                <ul className="potential-modal-list">
                  {selectedPotential.details.products.map((product, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Potential */}
              <div className="potential-modal-section">
                <h3>Potensi Pengembangan</h3>
                <p>{selectedPotential.details.potential}</p>
              </div>

              {/* Close Button */}
              <button 
                className="potential-modal-action"
                onClick={() => setSelectedPotential(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Potensi;
