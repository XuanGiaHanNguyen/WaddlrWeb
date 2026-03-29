import { Store, Hospital } from "lucide-react";

function StarRating({ count, total = 5 }) {
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          width="8"
          height="8"
          viewBox="0 0 10 10"
          style={{ fill: i < count ? "#e8720c" : "#ddd" }}
        >
          <polygon points="5,1 6.2,3.8 9,4.1 7,6 7.6,9 5,7.5 2.4,9 3,6 1,4.1 3.8,3.8" />
        </svg>
      ))}
    </div>
  );
}

function PropTag({ label }) {
  return (
    <span
      className="text-[8px] bg-[#fff4e8] text-[#d4860a] rounded-[4px] px-[5px] py-[2px] font-medium font-sans"
      style={{ border: "0.5px solid rgba(232,114,12,0.3)" }}
    >
      {label}
    </span>
  );
}

function PropCard({ icon: Icon, name, distance, stars, tags }) {
  return (
    <div
      className="bg-white rounded-[14px] w-[170px] shrink-0 overflow-hidden flex"
      style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}
    >
      <div
        className="w-[52px] shrink-0 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #d4860a 0%, #e8720c 100%)",
        }}
      >
        <Icon size={22} color="#fff" strokeWidth={1.8} />
      </div>
      <div className="p-[8px_9px] flex-1 min-w-0">
        <div className="text-[11px] font-bold text-[#0d2b35] font-sans truncate">
          {name}
        </div>
        <div className="my-[3px]">
          <StarRating count={stars} />
        </div>
        <div className="text-[9px] text-[#4a6a78] font-sans">
          Distance: {distance}
        </div>
        <div className="flex gap-1 mt-[5px] flex-wrap">
          {tags.map((t) => (
            <PropTag key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MapPin_({ top, left, light, icon }) {
  const bg = light ? "#f5a55a" : "#e8720c";
  return (
    <div
      className="absolute flex flex-col items-center z-[6]"
      style={{ top, left }}
    >
      <div
        className="w-[34px] h-[34px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        style={{
          borderRadius: "50% 50% 50% 0",
          transform: "rotate(-45deg)",
          background: bg,
        }}
      >
        <div className="text-white flex" style={{ transform: "rotate(45deg)" }}>
          {icon}
        </div>
      </div>
      <div
        className="-mt-[1px]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: `7px solid ${bg}`,
        }}
      />
    </div>
  );
}

function NavIcon({ children, active }) {
  return (
    <div
      className={`flex flex-col items-center gap-[3px] ${active ? "text-[#e8720c]" : "text-[#9ab]"}`}
    >
      {children}
      {active && (
        <div className="w-1 h-1 rounded-full bg-[#e8720c]" />
      )}
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone-outer">
        <div className="phone-inner">
          <div className="phone-notch" />

          {/* ── SCREEN ── */}
          <div className="absolute inset-0 bg-white flex flex-col font-sans">

            {/* Status bar */}
            <div className="h-7 flex justify-between items-end pb-[3px] text-[10px] font-semibold text-[#0d2b35] bg-white z-10 shrink-0">
              <span>9:41</span>
              <span className="flex gap-1 items-center">
                <svg width="12" height="10" viewBox="0 0 12 10">
                  <rect x="0" y="4" width="2" height="6" rx="1" fill="currentColor" />
                  <rect x="3" y="2.5" width="2" height="7.5" rx="1" fill="currentColor" />
                  <rect x="6" y="1" width="2" height="9" rx="1" fill="currentColor" />
                  <rect x="9" y="0" width="2" height="10" rx="1" fill="currentColor" />
                </svg>
                <svg width="14" height="10" viewBox="0 0 14 10">
                  <rect x="1" y="1" width="11" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <rect x="2.5" y="2.5" width="7" height="5" rx="0.5" fill="currentColor" />
                  <rect x="12.5" y="3.5" width="1" height="3" rx="0.5" fill="currentColor" />
                </svg>
              </span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center px-4 pt-2 pb-3 shrink-0 z-10 bg-white">
              <div>
                <div className="text-[11px] text-[#7a9bab] font-sans">Nearby safe spots</div>
                <div className="text-[16px] font-bold text-[#0d2b35] font-sans leading-tight">
                  Around You
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#e8720c] flex items-center justify-center shadow-[0_2px_8px_rgba(232,114,12,0.4)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>

            {/* Map */}
            <div className="relative flex-1 overflow-hidden">
              {/* Map SVG background */}
              <svg
                viewBox="0 0 240 300"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="240" height="300" fill="#eef2f5" />
                {/* Roads */}
                <line x1="0" y1="150" x2="240" y2="150" stroke="#fff" strokeWidth="14" />
                <line x1="0" y1="150" x2="240" y2="150" stroke="#dde4ea" strokeWidth="1" strokeDasharray="8 6" />
                <line x1="120" y1="0" x2="120" y2="300" stroke="#fff" strokeWidth="14" />
                <line x1="120" y1="0" x2="120" y2="300" stroke="#dde4ea" strokeWidth="1" strokeDasharray="8 6" />
                <line x1="0" y1="80" x2="240" y2="80" stroke="#fff" strokeWidth="9" />
                <line x1="0" y1="220" x2="240" y2="220" stroke="#fff" strokeWidth="9" />
                <line x1="60" y1="0" x2="60" y2="300" stroke="#fff" strokeWidth="9" />
                <line x1="180" y1="0" x2="180" y2="300" stroke="#fff" strokeWidth="9" />
                <line x1="0" y1="40" x2="180" y2="190" stroke="#fff" strokeWidth="7" />
                <line x1="240" y1="60" x2="60" y2="300" stroke="#fff" strokeWidth="7" />
                {/* Blocks */}
                <rect x="65" y="85" width="50" height="60" rx="4" fill="#dde4ea" />
                <rect x="125" y="85" width="50" height="60" rx="4" fill="#dde4ea" />
                <rect x="65" y="155" width="50" height="60" rx="4" fill="#dde4ea" />
                <rect x="125" y="155" width="50" height="60" rx="4" fill="#dde4ea" />
                <rect x="10" y="90" width="45" height="55" rx="4" fill="#dde4ea" />
                <rect x="185" y="90" width="45" height="55" rx="4" fill="#dde4ea" />
                <rect x="10" y="155" width="45" height="55" rx="4" fill="#dde4ea" />
                <rect x="185" y="155" width="45" height="55" rx="4" fill="#dde4ea" />
                {/* Park */}
                <rect x="67" y="87" width="20" height="20" rx="3" fill="#c8dfc8" />
                {/* Labels */}
                <text x="68" y="78" fontSize="7" fill="#a0b4c4" fontFamily="-apple-system,sans-serif">Torstr.</text>
                <text x="128" y="78" fontSize="7" fill="#a0b4c4" fontFamily="-apple-system,sans-serif">Rosenthaler</text>
                <text x="108" y="255" fontSize="7" fill="#a0b4c4" fontFamily="-apple-system,sans-serif">Ackerstr.</text>
                <text x="165" y="55" fontSize="7" fill="#a0b4c4" fontFamily="-apple-system,sans-serif">BRUNNEN</text>
                <text x="60" y="240" fontSize="7" fill="#a0b4c4" fontFamily="-apple-system,sans-serif">MITTE</text>
              </svg>

              {/* Radius ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full"
                style={{
                  border: "1.5px solid rgba(232,114,12,0.5)",
                  background: "rgba(232,114,12,0.06)",
                }}
              >
                <div
                  className="absolute -right-[6px] top-1/2 -translate-y-1/2 bg-white text-[#e8720c] text-[9px] font-bold px-[5px] py-[2px] rounded-lg"
                  style={{ border: "1px solid rgba(232,114,12,0.4)" }}
                >
                  10km
                </div>
              </div>

              {/* Center dot */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#e8720c] border-2 border-white z-[5]"
                style={{ boxShadow: "0 0 0 4px rgba(232,114,12,0.2)" }}
              />

              {/* Pins */}
              <MapPin_
                top="18%"
                left="22%"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6M9 12h6M9 15h4" />
                  </svg>
                }
              />
              <MapPin_
                top="40%"
                left="16%"
                light
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                  </svg>
                }
              />
              <MapPin_
                top="55%"
                left="62%"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                }
              />
            </div>

            {/* Cards strip */}
            <div className="bg-white rounded-t-[20px] pt-3 pb-2 shrink-0 z-10">
              <div className="flex gap-[10px] px-[14px] overflow-x-hidden">
                <PropCard icon={Store} name="Spar Store" distance="120m" stars={4} tags={["Safe House", "Verified"]} />
                <PropCard icon={Hospital} name="City Clinic" distance="380m" stars={5} tags={["24hr", "Security"]} />
              </div>
            </div>

            {/* Bottom nav */}
            <div
              className="h-[54px] bg-white flex items-center justify-around px-2 pb-[6px] shrink-0 relative z-[15]"
              style={{ borderTop: "0.5px solid rgba(0,0,0,0.07)" }}
            >
              <NavIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </NavIcon>
              <NavIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </NavIcon>
              {/* FAB */}
              <div
                className="w-11 h-11 rounded-full bg-[#e8720c] flex items-center justify-center -mt-5"
                style={{ boxShadow: "0 4px 16px rgba(232,114,12,0.45)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <NavIcon active>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </NavIcon>
              <NavIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </NavIcon>
            </div>
          </div>
          {/* ── END SCREEN ── */}
        </div>
      </div>
    </div>
  );
}
