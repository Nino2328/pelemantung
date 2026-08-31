import { MapPin, Phone, Mail, Clock3, Navigation } from "lucide-react";

function Location() {
  const address =
    "29QG+VFR Bakmi Pentil Nadin, Jl. Kretek Siluk, Siuk 2, Selopamioro, Kec. Imogiri, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55782";

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=29QG%2BVFR%20Bakmi%20Pentil%20Nadin%2C%20Jl.%20Kretek%20Siluk%2C%20Siuk%202%2C%20Selopamioro%2C%20Kec.%20Imogiri%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta%2055782";

  /*
   * OpenStreetMap menggunakan lokasi area Selopamioro sebagai
   * tampilan awal peta.
   *
   * Tombol "Buka Navigasi" diarahkan langsung ke titik
   * 29QG+VFR di Google Maps.
   */
  const mapUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=110.360%2C-7.990%2C110.440%2C-7.930&layer=mapnik";

  return (
    <section id="kontak" className="section location-section">
      <div className="container">
        {/* =====================================================
            LOCATION GRID
        ===================================================== */}
        <div className="location-grid">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="location-content">
            <span className="eyebrow">HUBUNGI KAMI</span>

            <h2>
              Temukan
              <span>Dusun Pelemantung</span>
            </h2>

            <p>
              Untuk informasi lebih lanjut mengenai Dusun Pelemantung, silakan
              hubungi melalui kontak resmi atau kunjungi lokasi dusun.
            </p>

            {/* =================================================
                CONTACT LIST
            ================================================= */}
            <div className="contact-list">
              {/* ALAMAT */}
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <span>Alamat</span>

                  <strong>
                    Jl. Kretek Siluk, Siuk 2, Selopamioro, Imogiri, Bantul, DIY
                    55782
                  </strong>
                </div>
              </div>

              {/* TELEPON */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <span>Telepon</span>

                  <strong>+62 813-2981-9239</strong>
                </div>
              </div>

              {/* EMAIL */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <span>Email</span>

                  <strong>Taufickjogja92@gmail.com</strong>
                </div>
              </div>

              {/* JAM PELAYANAN */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock3 size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <span>Jam Pelayanan</span>

                  <strong>Senin – Jumat · 08.00 – 15.00</strong>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MAP
          ================================================= */}
          <div className="map-wrapper">
            <iframe
              title="Lokasi Dusun Pelemantung"
              src={mapUrl}
              loading="lazy"
              allowFullScreen
            ></iframe>

            {/* =============================================
                MAP OVERLAY CARD
            ============================================== */}
            <div className="map-overlay-card">
              <div className="map-pin">
                <MapPin size={22} strokeWidth={1.8} />
              </div>

              <div className="map-location-text">
                <strong>Dusun Pelemantung</strong>

                <span>Siuk 2, Selopamioro</span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-navigation-button"
                aria-label="Buka navigasi"
                title="Buka lokasi di Google Maps"
              >
                <Navigation size={17} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;