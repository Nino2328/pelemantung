import {
  Users,
  House,
  UserRound,
  UserRoundCheck,
  Building2,
  Store,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const populationData = [
  {
    name: "Laki-laki",
    jumlah: 290,
  },
  {
    name: "Perempuan",
    jumlah: 299,
  },
];

const ageData = [
  {
    kelompok: "0–14",
    jumlah: 113,
  },
  {
    kelompok: "15–24",
    jumlah: 78,
  },
  {
    kelompok: "25–44",
    jumlah: 157,
  },
  {
    kelompok: "45–59",
    jumlah: 120,
  },
  {
    kelompok: "60+",
    jumlah: 121,
  },
];

const genderData = [
  {
    name: "Laki-laki",
    value: 290,
  },
  {
    name: "Perempuan",
    value: 299,
  },
];

const stats = [
  {
    icon: Users,
    label: "Jumlah Penduduk",
    value: "589",
    unit: "Jiwa",
  },
  {
    icon: House,
    label: "Jumlah KK",
    value: "208",
    unit: "Kepala Keluarga",
  },
  {
    icon: UserRound,
    label: "Laki-laki",
    value: "290",
    unit: "Jiwa",
  },
  {
    icon: UserRoundCheck,
    label: "Perempuan",
    value: "299",
    unit: "Jiwa",
  },
  {
    icon: Building2,
    label: "Jumlah RT",
    value: "4",
    unit: "RT",
  },
  {
    icon: Store,
    label: "UMKM",
    value: "3",
    unit: "Unit",
  },
];

function Statistics() {
  return (
    <section id="statistik" className="section statistics-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">DATA DUSUN</span>

          <h2>
            Statistik
            <span>Dusun</span>
          </h2>

          <p>
            Gambaran umum mengenai kondisi demografi masyarakat Dusun
            Pelemantung.
          </p>
        </div>

        <div className="statistics-cards">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="stat-card" key={stat.label}>
                <div className="stat-card-top">
                  <div className="stat-icon">
                    <Icon size={22} />
                  </div>

                  <span>{stat.label}</span>
                </div>

                <strong>{stat.value}</strong>

                <small>{stat.unit}</small>
              </div>
            );
          })}
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div>
                <span className="chart-label">DEMOGRAFI</span>

                <h3>Penduduk Berdasarkan Jenis Kelamin</h3>
              </div>

              <div className="chart-number">
                589
                <small>Total</small>
              </div>
            </div>

            <div className="chart">
              <ResponsiveContainer width="100%" height={330}>
                <BarChart
                  data={populationData}
                  margin={{
                    top: 15,
                    right: 10,
                    left: -15,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />

                  <XAxis dataKey="name" tickLine={false} axisLine={false} />

                  <YAxis tickLine={false} axisLine={false} />

                  <Tooltip />

                  <Bar
                    dataKey="jumlah"
                    fill="#2f6f52"
                    radius={[8, 8, 0, 0]}
                    barSize={70}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div>
                <span className="chart-label">KOMPOSISI</span>

                <h3>Komposisi Penduduk</h3>
              </div>
            </div>

            <div className="chart">
              <ResponsiveContainer width="100%" height={330}>
                <PieChart>
                  <Pie
                    data={genderData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    outerRadius={100}
                    innerRadius={55}
                    paddingAngle={4}
                  >
                    {genderData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={index === 0 ? "#2f6f52" : "#d6a85f"}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                  <Legend verticalAlign="bottom" height={35} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="chart-card age-chart">
          <div className="chart-header">
            <div>
              <span className="chart-label">DEMOGRAFI</span>

              <h3>Penduduk Berdasarkan Kelompok Usia</h3>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={ageData}
              margin={{
                top: 15,
                right: 20,
                left: -15,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis dataKey="kelompok" tickLine={false} axisLine={false} />

              <YAxis tickLine={false} axisLine={false} />

              <Tooltip />

              <Bar
                dataKey="jumlah"
                fill="#4a7f95"
                radius={[8, 8, 0, 0]}
                barSize={55}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
