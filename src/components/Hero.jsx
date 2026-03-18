import PhoneMockup from "./phones/Phonemockup";
import PhoneMockupTwo from "./phones/Phonemock";
import { Shield, MapPin, AlertTriangle, Bell } from "lucide-react";

const STATS = [
  { num: "12K+", label: "Verified Safe Locations" },
  { num: "500K", label: "Women Protected" },
  { num: "<30s", label: "Avg Response Time" },
];

const styles = `
  .float-card {
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    padding: 14px 18px;
    min-width: 200px;
  }

  .float-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }

  .float-card-label {
    font-size: 0.85rem;
    font-weight: 400;
    color: #6b7280;
  }

  .float-card-value {
    font-size: 1rem;
    font-weight: 400;
  }

  .float-card-sub {
    font-size: 0.85rem;
    font-weight: 400;
    color: #9ca3af;
  }

  .phone-wrapper {
    position: relative;
    width: fit-content;
  }

  .phone-front {
    position: relative;
    z-index: 10;
  }

  .phone-back {
    position: absolute;
    top: 0;
    left: 240px;
    z-index: 0;
  }

  .hero-spacer {
    height: 7rem;
  }

  .icon-orange {
    color: #fb923c;
    flex-shrink: 0;
  }
`;

export default function Hero() {
  return (
    <>
      <style>{styles}</style>
      <section className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">Women's Safety App</div>
          <h1>
            Walk with <em>confidence.</em> Never alone.
          </h1>
          <p className="hero-sub">
            Waddlr guides you to verified safe houses in seconds, detects crime
            in your area in real-time, and keeps you connected to the people who
            care about you.
          </p>
          <div className="hero-ctas">
            <a href="#download" className="btn-primary">
              ⬇ Download Free
            </a>
            <a href="#how" className="btn-secondary">
              See How It Works →
            </a>
          </div>
          <div className="hero-spacer" />
        </div>

        <div className="hero-visual">
          {/* Card 1 — Nearest Safe Spot */}
          <div className="float-card float-card-1">
            <div className="float-card-header">
              <Shield size={20} color="#fb923c" />
              <span className="float-card-label">Nearest Safe Spot</span>
            </div>
            <div className="float-card-value">120m</div>
            <div className="float-card-sub">Spar Convenience — Open 24h</div>
          </div>

          {/* Card 2 — Live Location */}
          <div className="float-card float-card-2">
            <div className="float-card-header">
              <MapPin size={20} color="#fb923c" />
              <span className="float-card-label">Live Location Shared</span>
            </div>
            <div className="float-card-value">3 Contacts</div>
            <div className="float-card-sub">Sarah, Mom, Jade are watching</div>
          </div>

          {/* Card 3 — Crime Alert */}
          <div className="float-card float-card-3">
            <div className="float-card-header">
              <AlertTriangle size={20} color="#fb923c" />
              <span className="float-card-label">Crime Alert Nearby</span>
            </div>
            <div className="float-card-value">2 Reports</div>
            <div className="float-card-sub">Avoid Elm St — Stay on Main</div>
          </div>

          {/* Card 4 — SOS */}
          <div className="float-card float-card-4">
            <div className="float-card-header">
              <Bell size={20} color="#fb923c" />
              <span className="float-card-label">SOS Triggered</span>
            </div>
            <div className="float-card-value">Notifying...</div>
            <div className="float-card-sub">
              Alerting Mom &amp; Emergency Services
            </div>
          </div>

          {/* Phone mockups */}
          <div className="phone-wrapper">
            <div className="phone-front">
              <PhoneMockupTwo />
            </div>
            <div className="phone-back">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}