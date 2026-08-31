import {
  ArrowLeft,
  X,
  Home,
  UserRound,
  Users,
  BarChart3,
  Sprout,
  Images,
  MapPin,
} from "lucide-react";

import About from "./About";
import Organization from "./Organization";
import Statistics from "./Statistics";
import Potensi from "./Potensi";
import Gallery from "./Gallery";
import Location from "./Location";

const pageData = {
  profil: {
    title: "Profil Dusun",
    subtitle: "Mengenal lebih dekat Dusun Pelemantung.",
    icon: UserRound,
  },

  struktur: {
    title: "Struktur Dusun",
    subtitle: "Struktur pemerintahan dan unsur masyarakat.",
    icon: Users,
  },

  statistik: {
    title: "Statistik Dusun",
    subtitle: "Data demografi masyarakat Dusun Pelemantung.",
    icon: BarChart3,
  },

  potensi: {
    title: "Potensi Dusun",
    subtitle: "Potensi lokal dan ekonomi masyarakat.",
    icon: Sprout,
  },

  galeri: {
    title: "Galeri Dusun",
    subtitle: "Dokumentasi kehidupan masyarakat.",
    icon: Images,
  },

  kontak: {
    title: "Kontak & Lokasi",
    subtitle: "Temukan lokasi dan informasi kontak dusun.",
    icon: MapPin,
  },
};

/* Menu navigasi yang tetap tampil di dalam overlay,
   supaya bisa pindah antar section tanpa harus
   klik "Kembali" dulu. */
const overlayNavItems = [
  {
    id: "profil",
    label: "Profil Dusun",
    icon: UserRound,
  },
  {
    id: "struktur",
    label: "Struktur",
    icon: Users,
  },
  {
    id: "statistik",
    label: "Statistik",
    icon: BarChart3,
  },
  {
    id: "potensi",
    label: "Potensi",
    icon: Sprout,
  },
  {
    id: "galeri",
    label: "Galeri",
    icon: Images,
  },
  {
    id: "kontak",
    label: "Kontak",
    icon: MapPin,
  },
];

function PageOverlay({ page, onClose, onNavigate }) {
  const data = pageData[page];

  if (!data) return null;

  const Icon = data.icon;

  const renderContent = () => {
    switch (page) {
      case "profil":
        return <About />;

      case "struktur":
        return <Organization />;

      case "statistik":
        return <Statistics />;

      case "potensi":
        return <Potensi />;

      case "galeri":
        return <Gallery />;

      case "kontak":
        return <Location />;

      default:
        return null;
    }
  };

  const handleOverlayNavigate = (id) => {
    if (id === page) return;

    onNavigate(id);
  };

  return (
    // key={page} membuat elemen ini remount setiap ganti section,
    // sehingga animasi pageSlideIn tetap replay tiap kali pindah menu.
    <div className="page-overlay" key={page}>
      <div className="page-overlay-header">
        <div className="container page-overlay-nav">
          <button className="overlay-back" onClick={onClose}>
            <ArrowLeft size={19} />
            Kembali
          </button>

          <div className="overlay-title">
            <div className="overlay-icon">
              <Icon size={20} />
            </div>

            <div>
              <span>PELEMANTUNG</span>
              <strong>{data.title}</strong>
            </div>
          </div>

          <button
            className="overlay-close"
            onClick={onClose}
            aria-label="Tutup"
          >
            <X size={23} />
          </button>
        </div>

        {/* MENU NAVIGASI OVERLAY */}
        <nav className="container overlay-menu">
          <button className="overlay-menu-link" onClick={onClose}>
            <Home size={16} strokeWidth={1.8} />
            <span>Beranda</span>
          </button>

          {overlayNavItems.map((item) => {
            const ItemIcon = item.icon;
            const isActive = page === item.id;

            return (
              <button
                key={item.id}
                className={`overlay-menu-link ${isActive ? "active" : ""}`}
                onClick={() => handleOverlayNavigate(item.id)}
              >
                <ItemIcon size={16} strokeWidth={1.8} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="page-overlay-intro">
        <div className="container">
          <span className="eyebrow">DUSUN PELEMANTUNG</span>

          <h1>{data.title}</h1>

          <p>{data.subtitle}</p>
        </div>
      </div>

      <div className="page-overlay-content">{renderContent()}</div>
    </div>
  );
}

export default PageOverlay;
