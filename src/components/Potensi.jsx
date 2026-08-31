import { Wheat, Store, Music2, Trees, ArrowUpRight } from "lucide-react";

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
  },
  {
    icon: Store,
    title: "UMKM",
    description:
      "Berbagai usaha masyarakat yang menjadi bagian dari ekonomi lokal.",
    image: umkmImage,
  },
  {
    icon: Music2,
    title: "Budaya",
    description:
      "Tradisi, kesenian, dan kegiatan budaya yang berkembang di masyarakat.",
    image: budayaImage,
  },
  {
    icon: Trees,
    title: "Lingkungan",
    description:
      "Potensi lingkungan dan wilayah yang dapat dikembangkan bersama.",
    image: lingkunganImage,
  },
];

function Potensi() {
  return (
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

                  <button type="button">
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
  );
}

export default Potensi;
