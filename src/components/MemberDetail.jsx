import { ArrowLeft, X } from "lucide-react";

/**
 * MemberDetail
 * ---------------------------------------------------------
 * Halaman detail (bukan panel setengah layar) untuk satu
 * anggota struktur organisasi. Sengaja memakai class CSS
 * yang SAMA dengan PageOverlay.jsx (.page-overlay, .overlay-back,
 * .overlay-title, dst) supaya gaya & animasinya konsisten
 * dengan halaman "Struktur Dusun", "Potensi Dusun", dll.
 *
 * Cara pakai (lihat Organization.jsx):
 *
 *   const [activeMember, setActiveMember] = useState(null);
 *
 *   <article onClick={() => setActiveMember(member)}>...</article>
 *
 *   {activeMember && (
 *     <MemberDetail
 *       member={activeMember}
 *       onClose={() => setActiveMember(null)}
 *     />
 *   )}
 * ---------------------------------------------------------
 */
function MemberDetail({ member, onClose }) {
  if (!member) return null;

  const Icon = member.icon;

  return (
    <div className="page-overlay">
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
              <span>UNSUR MASYARAKAT</span>
              <strong>{member.role}</strong>
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
      </div>

      <div className="page-overlay-intro">
        <div className="container">
          <span className="eyebrow">{member.role}</span>

          <h1>{member.name}</h1>

          <p>{member.description}</p>
        </div>
      </div>

      <div className="page-overlay-content">
        <div className="container">
          {/* FOTO (kalau ada) */}
          {member.image && (
            <div
              style={{
                width: "100%",
                maxWidth: 520,
                height: 340,
                borderRadius: 24,
                overflow: "hidden",
                marginBottom: 32,
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}

          {/* TAGS */}
          <div className="person-tags" style={{ marginTop: 0 }}>
            {member.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {/* DETAIL LENGKAP */}
          <p
            style={{
              marginTop: 28,
              maxWidth: 720,
              color: "var(--text-soft)",
              fontSize: 15,
              lineHeight: 1.85,
            }}
          >
            {member.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberDetail;