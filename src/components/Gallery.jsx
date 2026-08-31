import galleryImage1 from "../assets/gallery/gallery-1.jpg";
import galleryImage2 from "../assets/gallery/gallery-2.jpg";
import galleryImage3 from "../assets/gallery/gallery-3.jpg";

import umkmImage from "../assets/potensi/umkm.jpg";
import heroImage from "../assets/hero.png";

export default function Gallery() {
  const images = [
    {
      image: heroImage,
      title: "Dusun Pelemantung",
      category: "Lingkungan",
    },
    {
      image: galleryImage1,
      title: "Kegiatan Masyarakat",
      category: "Kegiatan",
    },
    {
      image: umkmImage,
      title: "Potensi UMKM",
      category: "Potensi",
    },
    {
      image: galleryImage2,
      title: "Kehidupan Masyarakat",
      category: "Masyarakat",
    },
    {
      image: galleryImage3,
      title: "Aktivitas Dusun",
      category: "Kegiatan",
    },
  ];

  return (
    <section id="galeri" className="section gallery-section">
      <div className="container">
        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="section-heading gallery-heading">
          <span className="eyebrow">GALERI DUSUN</span>

          <h2>
            Momen
            <span> Pelemantung</span>
          </h2>

          <p>
            Dokumentasi kegiatan, lingkungan, potensi, dan kehidupan masyarakat
            Dusun Pelemantung.
          </p>
        </div>

        {/* =========================================
            GALLERY GRID
        ========================================== */}
        <div className="gallery-grid">
          {images.map((item, index) => (
            <article
              className={`gallery-item gallery-item-${index + 1}`}
              key={`${item.title}-${index}`}
            >
              {/* IMAGE */}
              <img src={item.image} alt={item.title} loading="lazy" />

              {/* OVERLAY */}
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <span className="gallery-category">{item.category}</span>

                  <h3>{item.title}</h3>
                </div>

                {/* ARROW */}
                <div className="gallery-arrow">↗</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
