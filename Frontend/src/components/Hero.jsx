import PhoneMockup from "./phones/Phonemockup";
import PhoneMockupTwo from "./phones/Phonemock";
import { Shield, MapPin, AlertTriangle, Bell } from "lucide-react";

const STATS = [
  { num: "12K+", label: "Verified Safe Locations" },
  { num: "500K", label: "Women Protected" },
  { num: "<30s", label: "Avg Response Time" },
];

function FloatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className=" px-[18px] py-[14px] min-w-[200px]">
      <div className="flex items-center gap-2 mb-1">
        <Icon size={20} color="#fb923c" className="shrink-0" />
        <span className="text-[0.85rem] font-normal text-gray-500">
          {label}
        </span>
      </div>
      <div className="text-base font-normal">{value}</div>
      <div className="text-[0.85rem] font-normal text-gray-400">{sub}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-eyebrow">Community Safety Network</div>
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
          <a href="/authenication" className="btn-secondary">
            → Become a Safe Host
          </a>
        </div>
        <div className="h-28" />
      </div>

      <div className="hero-visual">
        {/* Card 1 — Nearest Safe Spot */}
        <div className="float-card float-card-1">
          <FloatCard
            icon={Shield}
            label="Nearest Safe Spot"
            value="120m"
            sub="Spar Convenience — Open 24h"
          />
        </div>

        {/* Card 2 — Live Location */}
        <div className="float-card float-card-2">
          <FloatCard
            icon={MapPin}
            label="Live Location Shared"
            value="3 Contacts"
            sub="Sarah, Mom, Jade are watching"
          />
        </div>

        {/* Card 3 — Crime Alert */}
        <div className="float-card float-card-3">
          <FloatCard
            icon={AlertTriangle}
            label="Crime Alert Nearby"
            value="2 Reports"
            sub="Avoid Elm St — Stay on Main"
          />
        </div>

        {/* Card 4 — SOS */}
        <div className="float-card float-card-4">
          <FloatCard
            icon={Bell}
            label="SOS Triggered"
            value="Notifying..."
            sub="Alerting Mom & Emergency Services"
          />
        </div>

        {/* Phone mockups */}
        <div className="relative w-fit">
          <div className="relative z-10">
            <PhoneMockupTwo />
          </div>
          <div className="absolute top-0 left-[240px] z-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
