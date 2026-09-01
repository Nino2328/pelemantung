import { ArrowUpRight, MapPin } from "lucide-react";

function Footer({ onNavigate }) {
  const navigate = (page) => {
    onNavigate(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <button
              type="button"
              className="footer-logo"
              onClick={() => navigate("home")}
            >
              <span>D</span>
              <span>P</span>
            </button>

            <h3>Dusun Pelemantung</h3>

            <span className="footer-subtitle">Website Profil Dusun</span>

            <p>
              Media informasi mengenai profil, masyarakat, potensi, budaya, dan
              kegiatan Dusun Pelemantung.
            </p>
          </div>

          <div className="footer-column">
            <h4>Navigasi</h4>

            <button type="button" onClick={() => navigate("home")}>
              Beranda
            </button>

            <button type="button" onClick={() => navigate("profil")}>
              Profil Dusun
            </button>

            <button type="button" onClick={() => navigate("struktur")}>
              Struktur
            </button>

            <button type="button" onClick={() => navigate("statistik")}>
              Statistik
            </button>
          </div>

          <div className="footer-column">
            <h4>Eksplorasi</h4>

            <button type="button" onClick={() => navigate("potensi")}>
              Potensi
            </button>

            <button type="button" onClick={() => navigate("galeri")}>
              Galeri
            </button>

            <button type="button" onClick={() => navigate("kontak")}>
              Kontak
            </button>
          </div>

          <div className="footer-column footer-location">
            <h4>Lokasi</h4>

            <div>
              <MapPin size={18} />

              <span>
                Dusun Pelemantung
                <br />
                Jl. Kretek Siluk, Siuk 2, Selopamioro, Kec. Imogiri, Kabupaten
                Bantul, Daerah Istimewa Yogyakarta
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate("kontak")}
              className="footer-map-link"
            >
              Lihat lokasi
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dusun Pelemantung. Semua hak dilindungi.</span>

          <span>Website Profil Dusun</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
