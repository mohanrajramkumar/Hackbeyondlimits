import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import SplashScreen from "./components/splashscreen";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Prizes } from "./components/Prizes";
import OrganizerPage from "./components/OrganizerPage";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { Sponsors } from "./components/Sponsors";
import ReasonsSection from "./components/reasons";

function App() {
  const [showSplash, setShowSplash] = useState(true); // ✅ Define state to control splash screen

  return (
    <HelmetProvider>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} /> // ✅ Pass function to hide splash screen
      ) : (
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Hero />
          <About />
          <Timeline />
          <Prizes />
          <ReasonsSection />
          <Sponsors />
          <Location />
          <OrganizerPage />
          <Footer />
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;
