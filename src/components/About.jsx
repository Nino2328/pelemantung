import {
  MapPin,
  Building2,
  Ruler,
  UserRound,
  Target,
  Compass,
  CheckCircle2,
  Users,
  Sprout,
  Landmark,
} from "lucide-react";

// =========================================================
// IMAGE
// src/assets/profil/hero.png
// =========================================================
import aboutImage from "../assets/profil/dusun.png";

// =========================================================
// DATA INFORMASI DUSUN
// =========================================================

const information = [
  {
    icon: MapPin,
    label: "Nama Dusun",
    value: "Pelemantung",
  },
  {
    icon: Building2,
    label: "Desa",
    value: "Selopamioro",
  },
  {
    icon: MapPin,
    label: "Kecamatan",
    value: "Imogiri",
  },
  {
    icon: MapPin,
    label: "Kabupaten",
    value: "Kabupaten Bantul",
  },
  {
    icon: MapPin,
    label: "Provinsi",
    value: "DI Yogyakarta",
  },
  {
    icon: UserRound,
    label: "Kepala Dusun",
    value: "Taufik Hidayat",
  },
  {
    icon: Ruler,
    label: "Luas Wilayah",
    value: "........................",
  },
];

// =========================================================
// MISI DUSUN
// =========================================================

const missions = [
  "Meningkatkan kebersamaan, gotong royong, dan kepedulian antarwarga.",
  "Mengembangkan potensi sumber daya masyarakat dan lingkungan secara berkelanjutan.",
  "Mendorong kegiatan ekonomi masyarakat melalui pengembangan UMKM dan potensi lokal.",
  "Menciptakan lingkungan dusun yang aman, nyaman, bersih, dan harmonis.",
  "Meningkatkan keterbukaan informasi serta partisipasi masyarakat dalam pembangunan dusun.",
];

// =========================================================
// ABOUT COMPONENT
// =========================================================

function About() {
  return (
    <section id="profil" className="section about-section">
      <div className="container">
        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div className="section-heading">
          <span className="eyebrow">PROFIL DUSUN</span>

          <h2>
            Mengenal
            <span>Dusun Pelemantung</span>
          </h2>

          <p>
            Mengenal lebih dekat wilayah, masyarakat, sejarah, serta arah
            pembangunan Dusun Pelemantung sebagai bagian dari kehidupan
            masyarakat yang terus tumbuh dan berkembang.
          </p>
        </div>

        {/* =================================================
            MAIN ABOUT
        ================================================== */}

        <div className="about-grid">
          {/* =================================================
              FOTO DUSUN
          ================================================== */}

          <div className="about-image">
            <img
              src={aboutImage}
              alt="Dusun Pelemantung"
              className="about-main-image"
            />

            <div className="about-image-overlay"></div>

            <div className="about-image-caption">
              <span>IDENTITAS WILAYAH</span>

              <strong>Dusun Pelemantung</strong>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="about-content">
            <span className="content-label">TENTANG DUSUN</span>

            <h3>
              Ruang tumbuh masyarakat yang
              <span> aktif dan berkembang.</span>
            </h3>

            <p>
              Dusun Pelemantung merupakan salah satu lingkungan masyarakat yang
              memiliki kehidupan sosial, budaya, dan potensi lokal yang terus
              berkembang. Kehidupan masyarakat dibangun melalui semangat
              kebersamaan, gotong royong, serta kepedulian terhadap lingkungan
              dan sesama warga.
            </p>

            <p>
              Sebagai bagian dari wilayah pedesaan, Dusun Pelemantung memiliki
              berbagai potensi yang dapat dikembangkan, mulai dari sektor
              pertanian, kegiatan ekonomi masyarakat, UMKM, budaya, hingga
              berbagai kegiatan sosial kemasyarakatan. Potensi tersebut menjadi
              bagian penting dalam mendukung kemandirian dan kesejahteraan
              masyarakat.
            </p>

            <p>
              Website profil ini hadir sebagai media informasi publik yang
              membantu masyarakat mengenal Dusun Pelemantung secara lebih dekat.
              Selain menyajikan informasi wilayah dan pemerintahan dusun,
              website ini juga menjadi ruang untuk memperkenalkan kegiatan,
              potensi, budaya, serta berbagai aktivitas masyarakat.
            </p>

            {/* =================================================
                INFORMATION DATA
            ================================================== */}

            <div className="about-data">
              {information.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="about-data-item" key={item.label}>
                    <div className="about-data-icon">
                      <Icon size={18} />
                    </div>

                    <div>
                      <span>{item.label}</span>

                      <strong>{item.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================
            VISI MISI
        ================================================== */}

        <div className="vision-mission">
          {/* =================================================
              VISI
          ================================================== */}

          <div className="vision-card">
            <div className="vision-icon">
              <Target size={24} />
            </div>

            <div className="vision-content">
              <span className="content-label">VISI</span>

              <h3>Visi Dusun Pelemantung</h3>

              <p>
                "Mewujudkan Dusun Pelemantung yang guyub, mandiri, sejahtera,
                dan berkelanjutan dengan mengembangkan potensi masyarakat serta
                menjunjung tinggi nilai kebersamaan dan gotong royong."
              </p>
            </div>
          </div>

          {/* =================================================
              MISI
          ================================================== */}

          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon">
                <Compass size={24} />
              </div>

              <div>
                <span className="content-label">ARAH PEMBANGUNAN</span>

                <h3>Misi Dusun Pelemantung</h3>
              </div>
            </div>

            <div className="mission-list">
              {missions.map((mission, index) => (
                <div className="mission-item" key={index}>
                  <div className="mission-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <p>{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            NILAI MASYARAKAT
        ================================================== */}

        <div className="about-values">
          {/* KEBERSAMAAN */}

          <div className="value-card">
            <div className="value-icon">
              <Users size={22} />
            </div>

            <div>
              <h4>Kebersamaan</h4>

              <p>
                Membangun hubungan masyarakat yang harmonis dan saling
                mendukung.
              </p>
            </div>
          </div>

          {/* KEMANDIRIAN */}

          <div className="value-card">
            <div className="value-icon">
              <Sprout size={22} />
            </div>

            <div>
              <h4>Kemandirian</h4>

              <p>
                Mendorong masyarakat untuk mengembangkan potensi dan sumber daya
                lokal.
              </p>
            </div>
          </div>

          {/* PEMBANGUNAN */}

          <div className="value-card">
            <div className="value-icon">
              <Landmark size={22} />
            </div>

            <div>
              <h4>Pembangunan</h4>

              <p>
                Mengembangkan dusun melalui partisipasi dan kolaborasi seluruh
                masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
