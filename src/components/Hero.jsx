import PhoneMockup from "./phones/Phonemockup";
import PhoneMockupTwo from "./phones/Phonemock";
import { Shield, MapPin, AlertTriangle, Bell } from "lucide-react";

const STATS = [
  { num: "12K+", label: "Verified Safe Locations" },
  { num: "500K", label: "Women Protected" },
  { num: "<30s", label: "Avg Response Time" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-eyebrow">Women's Safety App</div>
        <h1>
          Walk with <em>confidence.</em> Never alone.
        </h1>
        <p className="hero-sub">
          Waddlr guides you to verified safe houses in seconds, detects crime in
          your area in real-time, and keeps you connected to the people who care
          about you.
        </p>
        <div className="hero-ctas">
          <a href="#download" className="btn-primary">
            ⬇ Download Free
          </a>
          <a href="#how" className="btn-secondary">
            See How It Works →
          </a>
        </div>
        <div className="h-28"></div>
      </div>

      <div className="hero-visual">
        <div className="float-card float-card-1">
          <div className="flex items-center gap-2 mb-1">
            <Shield size={20} color="#fb923c" />
            <span className="text-sm font-normal text-gray-500">
              Nearest Safe Spot
            </span>
          </div>
          <div className="text-base font-normal">120m</div>
          <div className="text-sm font-normal text-gray-400">
            Spar Convenience — Open 24h
          </div>
        </div>

        <div className="float-card float-card-2">
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={20} color="#fb923c" />
            <span className="text-sm font-normal text-gray-500">
              Live Location Shared
            </span>
          </div>
          <div className="text-base font-normal">3 Contacts</div>
          <div className="text-sm font-normal text-gray-400">
            Sarah, Mom, Jade are watching
          </div>
        </div>

        <div className="float-card float-card-3">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle size={20} color="#fb923c" />
            <span className="text-sm font-normal text-gray-500">
              Crime Alert Nearby
            </span>
          </div>
          <div className="text-base font-normal">2 Reports</div>
          <div className="text-sm font-normal text-gray-400">
            Avoid Elm St — Stay on Main
          </div>
        </div>

        <div className="float-card float-card-4">
          <div className="flex items-center gap-2 mb-1">
            <Bell size={20} color="#fb923c" />
            <span className="text-sm font-normal text-gray-500">
              SOS Triggered
            </span>
          </div>
          <div className="text-base font-normal">Notifying...</div>
          <div className="text-sm font-normal text-gray-400">
            Alerting Mom & Emergency Services
          </div>
        </div>
        <div className="relative w-fit">
          <div className="relative z-10">
            <PhoneMockupTwo />
          </div>
          <div className="absolute top-0 left-60 z-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
