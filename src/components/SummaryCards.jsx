import { UserRound, Sprout, MapPin, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: UserRound,
    title: "Profil Dusun",
    description:
      "Kenali sejarah, wilayah, masyarakat, dan informasi dasar Dusun Pelemantung.",
    page: "profil",
  },
  {
    icon: Sprout,
    title: "Potensi Dusun",
    description:
      "Jelajahi pertanian, UMKM, budaya, lingkungan, dan potensi lokal lainnya.",
    page: "potensi",
  },
  {
    icon: MapPin,
    title: "Lokasi & Kontak",
    description: "Temukan lokasi dan informasi kontak resmi Dusun Pelemantung.",
    page: "kontak",
  },
];

function SummaryCards({ onNavigate }) {
  return (
    <section className="summary-section">
      <div className="container">
        <div className="summary-grid">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <button
                className="summary-card"
                key={card.title}
                onClick={() => onNavigate(card.page)}
              >
                <div className="summary-card-icon">
                  <Icon size={25} />
                </div>

                <div className="summary-card-content">
                  <h3>{card.title}</h3>

                  <p>{card.description}</p>

                  <span className="summary-link">
                    Lihat informasi
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SummaryCards;
