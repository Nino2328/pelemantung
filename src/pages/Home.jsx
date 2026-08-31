import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SummaryCards from "../components/SummaryCards";
import About from "../components/About";
import Organization from "../components/Organization";
import Statistics from "../components/Statistics";
import Potensi from "../components/Potensi";
import Activities from "../components/Activities";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import PageOverlay from "../components/PageOverlay";

function Home() {
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activePage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activePage]);

  return (
    <div className="site">
      <CustomCursor />

      <Navbar activePage={activePage} onNavigate={setActivePage} />

      <main>
        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* SUMMARY */}
        <SummaryCards />

        {/* PROFIL */}
        <About />

        {/* STRUKTUR */}
        <Organization />

        {/* STATISTIK */}
        <Statistics />

        {/* POTENSI */}
        <Potensi />

        {/* KEGIATAN */}
        <section id="kegiatan">
          <Activities />
        </section>

        {/* GALERI */}
        <Gallery />

        {/* KONTAK */}
        <section id="kontak">
          <Location />
        </section>
      </main>

      <Footer onNavigate={setActivePage} />

      {activePage && (
        <PageOverlay
          page={activePage}
          onClose={() => setActivePage(null)}
          onNavigate={setActivePage}
        />
      )}
    </div>
  );
}

export default Home;
