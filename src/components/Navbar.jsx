import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  UserRound,
  BarChart3,
  Sprout,
  Images,
  MapPin,
  Users,
} from "lucide-react";

import logoPelemantung from "../assets/logo/logo-pelemantung.png";

const navItems = [
  {
    id: "home",
    label: "Beranda",
    icon: Home,
  },
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

function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (id) => {
    setMenuOpen(false);

    if (id === "home") {
      onNavigate(null);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    onNavigate(id);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* =========================================
            BRAND
        ========================================== */}
        <button
          className="brand"
          onClick={() => handleNavigate("home")}
          aria-label="Beranda Dusun Pelemantung"
        >
          <div className="brand-logo">
            <img src={logoPelemantung} alt="Logo Dusun Pelemantung" />
          </div>

          <div className="brand-text">
            <strong>Dusun Pelemantung</strong>
            <span>Website Profil Dusun</span>
          </div>
        </button>

        {/* =========================================
            NAVIGATION
        ========================================== */}
        <nav className={`nav-menu ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`nav-link ${activePage === item.id ? "active" : ""}`}
                onClick={() => handleNavigate(item.id)}
              >
                <Icon size={17} strokeWidth={1.8} />

                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* =========================================
            MOBILE MENU
        ========================================== */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
