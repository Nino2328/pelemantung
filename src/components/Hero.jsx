import { useEffect, useState } from "react";

import {
  ArrowRight,
  MapPin,
  ChevronDown,
  Sprout,
  Users,
  Map,
} from "lucide-react";

import heroImage from "../assets/hero.png";
import galleryImage1 from "../assets/gallery/gallery-1.jpg";
import galleryImage2 from "../assets/gallery/gallery-2.jpg";
import umkmImage from "../assets/potensi/umkm.jpg";
import budayaImage from "../assets/potensi/budaya.jpg";

// Foto pertama HARUS heroImage, sisanya akan berganti bergantian
const heroSlides = [heroImage, budayaImage, galleryImage1, galleryImage2, umkmImage];

function Hero({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (section) => {
    // Panggil onNavigate dari parent (App.jsx) jika disediakan,
    // misalnya untuk mengganti halaman/menu aktif.
    if (onNavigate) {
      onNavigate(section);
    }

    // Fallback: langsung scroll ke section dengan id yang sesuai,
    // supaya tombol tetap berfungsi walau onNavigate belum diatur.
    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleScroll = () => {
    document.getElementById("profil")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div className="hero-background">
        {heroSlides.map((slide, index) => {
          const total = heroSlides.length;

          // jarak posisi foto ini terhadap foto yang sedang aktif (0..total-1)
          const diff = (index - activeSlide + total) % total;

          // ubah ke posisi terpendek: negatif = di kiri, positif = di kanan
          const offset = diff > total / 2 ? diff - total : diff;

          return (
            <img
              key={slide}
              src={slide}
              alt="Kegiatan masyarakat Dusun Pelemantung"
              className={`hero-background-image${
                index === activeSlide ? " is-active" : ""
              }`}
              style={{ transform: `translateX(${offset * 100}%)` }}
            />
          );
        })}
      </div>

      {/* =========================================
          OVERLAY
      ========================================== */}
      <div className="hero-overlay"></div>

      {/* =========================================
          DECORATIVE ELEMENTS
      ========================================== */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <div className="container hero-content">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>

            <span>WEBSITE PROFIL DUSUN</span>
          </div>

          <h1>
            Selamat Datang di
            <span>Dusun Pelemantung</span>
          </h1>

          <p>
            Mengenal lebih dekat kehidupan, potensi, budaya, dan masyarakat
            Dusun Pelemantung dalam satu ruang informasi yang mudah diakses.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => handleNavigate("profil")}
            >
              <span>Jelajahi Dusun</span>

              <ArrowRight size={19} strokeWidth={2} />
            </button>

            <button
              className="btn btn-light"
              onClick={() => handleNavigate("statistik")}
            >
              <span>Lihat Statistik</span>
            </button>
          </div>

          {/* LOCATION */}
          <div className="hero-location">
            <div className="hero-location-icon">
              <MapPin size={16} strokeWidth={2} />
            </div>

            <span>Dusun Pelemantung · DI Yogyakarta</span>
          </div>
        </div>

        {/* =========================================
            HERO INFORMATION CARD
        ========================================== */}
        <div className="hero-card">
          <div className="hero-card-top">
            <div className="hero-card-icon">
              <Map size={23} strokeWidth={1.8} />
            </div>

            <div className="hero-card-title">
              <span>PROFIL DUSUN</span>

              <strong>Pelemantung</strong>
            </div>
          </div>

          <div className="hero-card-line"></div>

          <p>
            Temukan informasi mengenai profil, masyarakat, potensi, kegiatan,
            dan kehidupan Dusun Pelemantung.
          </p>

          {/* MINI INFORMATION */}
          <div className="hero-card-features">
            <div className="hero-card-feature">
              <div className="hero-feature-icon">
                <Users size={15} />
              </div>

              <span>Masyarakat</span>
            </div>

            <div className="hero-card-feature">
              <div className="hero-feature-icon">
                <Sprout size={15} />
              </div>

              <span>Potensi Lokal</span>
            </div>
          </div>

          <button
            className="hero-card-link"
            onClick={() => handleNavigate("profil")}
          >
            <span>Kenali Dusun</span>

            <ArrowRight size={17} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <button className="hero-scroll" onClick={handleScroll}>
        <span>Scroll untuk menjelajah</span>

        <div className="hero-scroll-icon">
          <ChevronDown size={17} />
        </div>
      </button>
    </section>
  );
}

export default Hero;