import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSlider from "./components/HeroSlider";
import Home from "./Pages/Home";
import { Navbar } from "./components/Navbar";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import DestinationDetails from "./Pages/DestinationDetails";
import Footer from "./components/Footer";
import Packages from "./Pages/Packages";
import PackageCard from "./components/PackageCard";
import Pack from "./data/Pack";
import SearchBox from "./components/SearchBox";
import Safari from "./Pages/Safari";
import Hotel from "./Pages/Hotel";
// import Home from "./pages/Home";
// import Packages from "./pages/Packages";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Navbar shown on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroslider" element={<HeroSlider />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinationdetails" element={<DestinationDetails />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packagecard" element={<PackageCard />} />
        <Route path="/pack" element={<Pack />} />
        <Route path="/searchbox" element={<SearchBox />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/hotel" element={<Hotel />} />



        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

<Footer />
    </Router>
  );
}

export default App;
