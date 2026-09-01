import { Suspense, lazy, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SummaryCards from "../components/SummaryCards";
import About from "../components/About";
import Organization from "../components/Organization";
import Location from "../components/Location";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const Statistics = lazy(() => import("../components/Statistics"));
const Potensi = lazy(() => import("../components/Potensi"));
const Activities = lazy(() => import("../components/Activities"));
const Gallery = lazy(() => import("../components/Gallery"));
const PageOverlay = lazy(() => import("../components/PageOverlay"));

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
        <Suspense fallback={<div className="section-loading" />}>
          <Statistics />
        </Suspense>

        {/* POTENSI */}
        <Suspense fallback={<div className="section-loading" />}>
          <Potensi />
        </Suspense>

        {/* KEGIATAN */}
        <section id="kegiatan">
          <Suspense fallback={<div className="section-loading" />}>
            <Activities />
          </Suspense>
        </section>

        {/* GALERI */}
        <Suspense fallback={<div className="section-loading" />}>
          <Gallery />
        </Suspense>

        {/* KONTAK */}
        <section id="kontak">
          <Location />
        </section>
      </main>

      <Footer onNavigate={setActivePage} />

      {activePage && (
        <Suspense fallback={null}>
          <PageOverlay
            page={activePage}
            onClose={() => setActivePage(null)}
            onNavigate={setActivePage}
          />
        </Suspense>
      )}
    </div>
  );
}

export default Home;
