import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import ExploreTrain from "./components/Explore Train";
import CheckPNR from "./components/CheckPNR";
import TrackTrain from "./components/Track Train";
import TrainSchedule from "./components/Train schedule";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      <div className="page-overlay"></div>

      {/* Navbar */}
      <nav className="navbar">

        <div className="brand">
          <div className="brand-icon">🚆</div>
          <span>RAILWAY</span>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </nav>


      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <h1>
            Explore
            <br />
            <span>Incredible India</span>
          </h1>

          <p className="hero-description">
            Discover India's beautiful destinations,
            <br />
            one journey at a time.
          </p>

          <div className="search-box">

            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder="Search trains, stations or destinations..."
            />

            <button className="search-button">
              Search
            </button>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features">

        <FeatureCard
          icon="🚆"
          title="EXPLORE"
          subtitle="TRAIN"
          onClick={() => navigate("/explore-train")}
        />

        <FeatureCard
          icon="🎫"
          title="CHECK"
          subtitle="PNR"
          onClick={() => navigate("/check-pnr")}
        />

        <FeatureCard
          icon="📍"
          title="TRACK"
          subtitle="TRAIN"
          onClick={() => navigate("/track-train")}
        />

        <FeatureCard
          icon="📅"
          title="TRAIN"
          subtitle="SCHEDULE"
          onClick={() => navigate("/train-schedule")}
        />

      </section>

      <footer className="footer">
        © 2026 Railway India • Explore Incredible India
      </footer>

    </div>
  );
}


function FeatureCard({ icon, title, subtitle, onClick }) {

  return (
    <button
      className="feature-card"
      onClick={onClick}
    >

      <div className="feature-icon">
        {icon}
      </div>

      <div className="feature-title">
        {title}
      </div>

      <div className="feature-subtitle">
        {subtitle}
      </div>

    </button>
  );
}


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/explore-train"
          element={<ExploreTrain />}
        />

        <Route
          path="/check-pnr"
          element={<CheckPNR />}
        />

        <Route
          path="/track-train"
          element={<TrackTrain />}
        />

        <Route
          path="/train-schedule"
          element={<TrainSchedule />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;