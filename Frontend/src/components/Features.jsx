import { AlertOctagon, Map, Radio, Bell } from "lucide-react";

const FEATURES = [
  { icon: AlertOctagon, title: "One-Touch SOS", desc: "A single button broadcasts your location to emergency contacts and local authorities within 10 seconds." },
  { icon: Map, title: "Safe Route Mapping", desc: "Get routes that avoid flagged high-risk zones and guide you past verified safe landmarks." },
  { icon: Radio, title: "Live Location Sharing", desc: "Share your real-time location with up to 5 trusted contacts who can track your journey safely." },
  { icon: Bell, title: "Neighbourhood Alerts", desc: "Receive live push notifications when incidents are reported near your current position." },
];

export default function Features() {
  return (
    <section className="w-section pt-0" id="features">
      <div className="section-label">Features</div>
      <h2 className="section-title">Everything you need, nothing you don't</h2>
      <p className="section-sub">Waddlr is lightweight, private, and built by women for women.</p>
      <div className="features-grid">
        {FEATURES.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className={`feature-cell${f.accent ? " accent-cell" : ""}${f.wide ? " wide" : ""}`}
            >
              <div className="feature-icon-wrap">
                <Icon size={24} color="#fb923c" />
              </div>
              <div className="feature-title text-[#e8720c]">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
