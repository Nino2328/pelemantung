import {
  Crown,
  UserRound,
  Users,
  BriefcaseBusiness,
  WalletCards,
  Handshake,
  ShieldCheck,
  HeartHandshake,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import heroImage from "../assets/struktur/pemimpin.jpeg";


/*
|--------------------------------------------------------------------------
| DATA STRUKTUR DUSUN
|--------------------------------------------------------------------------
|
| Untuk sementara semua foto menggunakan hero.png.
|
| Nanti Anda bisa menggantinya dengan foto masing-masing perangkat dusun.
|
*/

const members = [
  {
    role: "Sekretaris",
    name: "Nama Sekretaris",
    description:
      "Membantu administrasi, pencatatan kegiatan, surat-menyurat, serta pengelolaan informasi Dusun Pelemantung.",
    icon: BriefcaseBusiness,
    image: heroImage,
    tags: ["Administrasi", "Dokumentasi"],
  },

  {
    role: "Bendahara",
    name: "Nama Bendahara",
    description:
      "Mengelola pencatatan, administrasi, dan pelaporan keuangan berbagai kegiatan Dusun Pelemantung.",
    icon: WalletCards,
    image: heroImage,
    tags: ["Keuangan", "Pelaporan"],
  },

  {
    role: "Ketua RT",
    name: "Nama Ketua RT",
    description:
      "Mengoordinasikan kebutuhan warga serta berbagai kegiatan masyarakat pada tingkat RT.",
    icon: Users,
    image: heroImage,
    tags: ["Koordinasi", "Warga"],
  },

  {
    role: "Tokoh Masyarakat",
    name: "Nama Tokoh Masyarakat",
    description:
      "Berperan memberikan arahan, menjaga kebersamaan, serta mendukung kegiatan sosial masyarakat.",
    icon: UserRound,
    image: heroImage,
    tags: ["Sosial", "Masyarakat"],
  },
];

/*
|--------------------------------------------------------------------------
| NILAI ORGANISASI
|--------------------------------------------------------------------------
*/

const values = [
  {
    icon: ShieldCheck,
    title: "Transparansi",
    description:
      "Mendorong keterbukaan informasi mengenai kegiatan, pelayanan, dan perkembangan dusun.",
  },

  {
    icon: Handshake,
    title: "Gotong Royong",
    description:
      "Membangun kehidupan masyarakat melalui kerja sama dan kepedulian antarwarga.",
  },

  {
    icon: HeartHandshake,
    title: "Pelayanan Warga",
    description:
      "Mengutamakan kebutuhan masyarakat melalui pelayanan yang mudah, terbuka, dan responsif.",
  },
];

function Organization() {
  return (
    <section id="struktur" className="section organization-section">
      <div className="container">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="section-heading organization-heading">
          <span className="eyebrow">PEMERINTAHAN DUSUN</span>

          <h2>
            Struktur
            <span>Dusun</span>
          </h2>

          <p>
            Mengenal unsur pemerintahan dan tokoh masyarakat yang berperan dalam
            mengelola, melayani, serta membangun kehidupan masyarakat Dusun
            Pelemantung.
          </p>
        </div>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <div className="organization-intro">
          <div className="organization-intro-icon">
            <Users size={28} strokeWidth={1.8} />
          </div>

          <div className="organization-intro-content">
            <span className="content-label">ORGANISASI DUSUN</span>

            <h3>
              Bersama membangun lingkungan yang{" "}
              <strong>aktif, terbuka, dan harmonis.</strong>
            </h3>

            <p>
              Pemerintahan Dusun Pelemantung melibatkan berbagai unsur
              masyarakat yang bekerja sama dalam menjalankan pelayanan, kegiatan
              sosial, administrasi, serta pengembangan potensi dusun. Setiap
              unsur memiliki peran masing-masing untuk menciptakan kehidupan
              masyarakat yang lebih tertata dan berkelanjutan.
            </p>
          </div>
        </div>

        {/* =========================================================
            STRUCTURE
        ========================================================= */}

        <div className="organization">
          {/* =======================================================
              KEPALA DUSUN
          ======================================================= */}

          <div className="organization-leader">
            {/* FOTO */}

            <div className="leader-photo">
              <img src={heroImage} alt="Kepala Dusun Pelemantung" />

              <div className="leader-photo-overlay"></div>

              <div className="leader-photo-badge">
                <Crown size={18} strokeWidth={1.8} />

                <span>PIMPINAN DUSUN</span>
              </div>
            </div>

            {/* CONTENT */}

            <div className="leader-content">
              <div className="leader-top">
                <div>
                  <span className="leader-role">KEPALA DUSUN</span>

                  <h3>Nama Kepala Dusun</h3>
                </div>

                <span className="leader-number">01</span>
              </div>

              <p className="leader-description">
                Memimpin dan mengoordinasikan penyelenggaraan pemerintahan,
                pelayanan, serta kegiatan masyarakat Dusun Pelemantung. Kepala
                Dusun menjadi salah satu unsur utama dalam menjaga koordinasi
                antara masyarakat dan pemerintahan desa.
              </p>

              <div className="leader-meta">
                <span>
                  <UserRound size={15} />
                  Kepala Pemerintahan Dusun
                </span>

                <span>
                  <Handshake size={15} />
                  Koordinasi Masyarakat
                </span>
              </div>

              <div className="leader-location">
                <MapPin size={15} />

                <span>Dusun Pelemantung</span>
              </div>
            </div>
          </div>

          {/* =======================================================
              CONNECTOR
          ======================================================= */}

          <div className="organization-connector">
            <span></span>
          </div>

          {/* =======================================================
              MEMBERS
          ======================================================= */}

          <div className="organization-members">
            {members.map((member, index) => {
              const Icon = member.icon;

              return (
                <article className="person-card" key={member.role}>
                  {/* NUMBER */}

                  <div className="person-number">0{index + 2}</div>

                  {/* PHOTO FRAME */}

                  <div className="person-photo">
                    <img src={member.image} alt={member.name} />

                    <div className="person-photo-overlay"></div>

                    {/* ICON */}

                    <div className="person-photo-icon">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="person-info">
                    <span className="person-role">{member.role}</span>

                    <h3>{member.name}</h3>

                    <p>{member.description}</p>

                    {/* TAGS */}

                    <div className="person-tags">
                      {member.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}

                  <div className="person-footer">
                    <span>Unsur Masyarakat</span>

                    <div className="person-arrow">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            ORGANIZATION SUMMARY
        ========================================================= */}

        <div className="organization-summary">
          <div className="organization-summary-heading">
            <span className="content-label">PERAN & NILAI</span>

            <h3>
              Bersinergi untuk
              <span> masyarakat.</span>
            </h3>

            <p>
              Struktur dusun bukan hanya tentang jabatan, tetapi juga tentang
              bagaimana setiap unsur masyarakat dapat berkolaborasi untuk
              menciptakan lingkungan yang lebih baik, tertib, dan harmonis.
            </p>
          </div>

          <div className="organization-values">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div className="organization-value" key={value.title}>
                  <div className="organization-value-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h4>{value.title}</h4>

                    <p>{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM INFORMATION
        ========================================================= */}

        <div className="organization-footer">
          <div>
            <span>UNSUR PENGELOLA</span>

            <strong>5 Unsur</strong>

            <small>Kepala Dusun & unsur masyarakat</small>
          </div>

          <div>
            <span>FOKUS UTAMA</span>

            <strong>Pelayanan</strong>

            <small>Pelayanan dan kebutuhan warga</small>
          </div>

          <div>
            <span>SEMANGAT</span>

            <strong>Gotong Royong</strong>

            <small>Membangun dusun bersama masyarakat</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Organization;
