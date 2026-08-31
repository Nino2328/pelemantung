import {
  ArrowUpRight,
  CalendarDays,
  UsersRound,
  HeartHandshake,
} from "lucide-react";

const activities = [
  {
    date: "01",
    month: "JUN",
    title: "Kerja Bakti Dusun",
    description: "Kegiatan gotong royong membersihkan lingkungan dusun.",
    icon: UsersRound,
  },
  {
    date: "08",
    month: "JUN",
    title: "Kegiatan Posyandu",
    description: "Kegiatan pelayanan masyarakat dan kesehatan warga dusun.",
    icon: HeartHandshake,
  },
  {
    date: "15",
    month: "JUN",
    title: "Pertemuan Warga",
    description:
      "Pertemuan warga untuk membahas kegiatan dan perkembangan dusun.",
    icon: CalendarDays,
  },
];

function Activities() {
  return (
    <section id="kegiatan" className="section activities-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">KEGIATAN MASYARAKAT</span>

          <h2>
            Kegiatan
            <span>Dusun</span>
          </h2>

          <p>
            Berbagai kegiatan yang dilakukan bersama oleh masyarakat Dusun
            Pelemantung.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article className="activity-card" key={activity.title}>
                <div className="activity-date">
                  <strong>{activity.date}</strong>
                  <span>{activity.month}</span>
                </div>

                <div className="activity-content">
                  <div className="activity-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{activity.title}</h3>

                  <p>{activity.description}</p>

                  <button>
                    Selengkapnya
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Activities;
