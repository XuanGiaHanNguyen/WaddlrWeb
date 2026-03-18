import { Store, Hospital, MapPin } from "lucide-react";

function StarRating({ count, total = 5 }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
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
      style={{
        fontSize: "8px",
        background: "#fff4e8",
        color: "#d4860a",
        border: "0.5px solid rgba(232,114,12,0.3)",
        borderRadius: "4px",
        padding: "2px 5px",
        fontFamily: "-apple-system, sans-serif",
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  );
}

// Pass a Lucide component reference: icon={Store}
function PropCard({ icon: Icon, name, distance, stars, tags }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        border: "0.5px solid rgba(0,0,0,0.08)",
        width: "170px",
        flexShrink: 0,
        overflow: "hidden",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "52px",
          flexShrink: 0,
          background: "linear-gradient(135deg, #d4860a 0%, #e8720c 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={22} color="#fff" strokeWidth={1.8} />
      </div>
      <div style={{ padding: "8px 9px", flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#0d2b35",
            fontFamily: "-apple-system, sans-serif",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </div>
        <div style={{ margin: "3px 0" }}>
          <StarRating count={stars} />
        </div>
        <div
          style={{
            fontSize: "9px",
            color: "#4a6a78",
            fontFamily: "-apple-system, sans-serif",
          }}
        >
          Distance: {distance}
        </div>
        <div
          style={{
            display: "flex",
            gap: "4px",
            marginTop: "5px",
            flexWrap: "wrap",
          }}
        >
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
      style={{
        position: "absolute",
        top,
        left,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 6,
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "50% 50% 50% 0",
          transform: "rotate(-45deg)",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{ transform: "rotate(45deg)", color: "#fff", display: "flex" }}
        >
          {icon}
        </div>
      </div>
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: `7px solid ${bg}`,
          marginTop: "-1px",
        }}
      />
    </div>
  );
}

function NavIcon({ children, active }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3px",
        color: active ? "#e8720c" : "#9ab",
      }}
    >
      {children}
      {active && (
        <div
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "#e8720c",
          }}
        />
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
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              fontFamily: "-apple-system, sans-serif",
            }}
          >
            {/* Status bar */}
            <div
              style={{
                height: "28px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "0 16px 3px",
                fontSize: "10px",
                fontWeight: 600,
                color: "#0d2b35",
                background: "#fff",
                zIndex: 10,
                flexShrink: 0,
              }}
            >
              <span>9:41</span>
              <span
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <svg width="12" height="10" viewBox="0 0 12 10">
                  <rect
                    x="0"
                    y="4"
                    width="2"
                    height="6"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="3"
                    y="2.5"
                    width="2"
                    height="7.5"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="6"
                    y="1"
                    width="2"
                    height="9"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="9"
                    y="0"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
                <svg width="14" height="10" viewBox="0 0 14 10">
                  <rect
                    x="1"
                    y="1"
                    width="11"
                    height="8"
                    rx="1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="2.5"
                    y="2.5"
                    width="7"
                    height="5"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="12.5"
                    y="3.5"
                    width="1"
                    height="3"
                    rx="0.5"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>

            {/* Top bar */}
            <div
              style={{
                height: "52px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: "10px",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                flexShrink: 0,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d2b35"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#0d2b35",
                  }}
                >
                  Jasmunder Street
                </div>
                <div style={{ fontSize: "10px", color: "#4a6a78" }}>
                  Safe houses nearby
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a6a78"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="5 12 12 5 19 12" />
                  </svg>
                </div>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#fff4e8",
                    border: "1px solid rgba(232,114,12,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e8720c"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Map */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 252 300"
                preserveAspectRatio="xMidYMid slice"
                style={{ position: "absolute", inset: 0 }}
              >
                <line
                  x1="0"
                  y1="60"
                  x2="252"
                  y2="40"
                  stroke="#c8d8e8"
                  strokeWidth="3"
                />
                <line
                  x1="0"
                  y1="110"
                  x2="252"
                  y2="90"
                  stroke="#c8d8e8"
                  strokeWidth="5"
                />
                <line
                  x1="0"
                  y1="160"
                  x2="252"
                  y2="140"
                  stroke="#c8d8e8"
                  strokeWidth="3"
                />
                <line
                  x1="0"
                  y1="220"
                  x2="252"
                  y2="200"
                  stroke="#c8d8e8"
                  strokeWidth="4"
                />
                <line
                  x1="40"
                  y1="0"
                  x2="40"
                  y2="300"
                  stroke="#c8d8e8"
                  strokeWidth="3"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="300"
                  stroke="#c8d8e8"
                  strokeWidth="5"
                />
                <line
                  x1="160"
                  y1="0"
                  x2="160"
                  y2="300"
                  stroke="#c8d8e8"
                  strokeWidth="3"
                />
                <line
                  x1="210"
                  y1="0"
                  x2="210"
                  y2="300"
                  stroke="#c8d8e8"
                  strokeWidth="4"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="252"
                  y2="200"
                  stroke="#d0dce8"
                  strokeWidth="4"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="200"
                  y2="300"
                  stroke="#d0dce8"
                  strokeWidth="3"
                />
                <rect
                  x="42"
                  y="62"
                  width="56"
                  height="46"
                  rx="3"
                  fill="#dce8f0"
                />
                <rect
                  x="102"
                  y="92"
                  width="56"
                  height="46"
                  rx="3"
                  fill="#dce8f0"
                />
                <rect
                  x="162"
                  y="62"
                  width="46"
                  height="46"
                  rx="3"
                  fill="#dce8f0"
                />
                <rect
                  x="42"
                  y="162"
                  width="56"
                  height="56"
                  rx="3"
                  fill="#dce8f0"
                />
                <rect
                  x="102"
                  y="162"
                  width="56"
                  height="56"
                  rx="3"
                  fill="#dce8f0"
                />
                <text
                  x="15"
                  y="106"
                  fontSize="7"
                  fill="#a0b4c4"
                  fontFamily="-apple-system,sans-serif"
                  transform="rotate(-3,15,106)"
                >
                  Gartenstr.
                </text>
                <text
                  x="108"
                  y="255"
                  fontSize="7"
                  fill="#a0b4c4"
                  fontFamily="-apple-system,sans-serif"
                >
                  Ackerstr.
                </text>
                <text
                  x="165"
                  y="55"
                  fontSize="7"
                  fill="#a0b4c4"
                  fontFamily="-apple-system,sans-serif"
                >
                  BRUNNEN
                </text>
                <text
                  x="60"
                  y="240"
                  fontSize="7"
                  fill="#a0b4c4"
                  fontFamily="-apple-system,sans-serif"
                >
                  MITTE
                </text>
              </svg>

              {/* Radius ring */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(232,114,12,0.5)",
                  background: "rgba(232,114,12,0.06)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: "-6px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#fff",
                    border: "1px solid rgba(232,114,12,0.4)",
                    color: "#e8720c",
                    fontSize: "9px",
                    fontWeight: 700,
                    padding: "2px 5px",
                    borderRadius: "8px",
                  }}
                >
                  10km
                </div>
              </div>

              {/* Center dot */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#e8720c",
                  border: "2px solid #fff",
                  boxShadow: "0 0 0 4px rgba(232,114,12,0.2)",
                  zIndex: 5,
                }}
              />

              {/* Pins */}
              <MapPin_
                top="18%"
                left="22%"
                icon={
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                  </svg>
                }
              />
              <MapPin_
                top="55%"
                left="62%"
                icon={
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                }
              />
            </div>

            {/* Cards strip */}
            <div
              style={{
                background: "#fff",
                borderRadius: "20px 20px 0 0",
                padding: "12px 0 8px",
                flexShrink: 0,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  padding: "0 14px",
                  overflowX: "hidden",
                }}
              >
                <PropCard
                  icon={Store}
                  name="Spar Store"
                  distance="120m"
                  stars={4}
                  tags={["Safe House", "Verified"]}
                />
                <PropCard
                  icon={Hospital}
                  name="City Clinic"
                  distance="380m"
                  stars={5}
                  tags={["24hr", "Security"]}
                />
              </div>
            </div>

            {/* Bottom nav */}
            <div
              style={{
                height: "54px",
                background: "#fff",
                borderTop: "0.5px solid rgba(0,0,0,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                padding: "0 8px 6px",
                flexShrink: 0,
                position: "relative",
                zIndex: 15,
              }}
            >
              <NavIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </NavIcon>
              <NavIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </NavIcon>
              {/* FAB */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#e8720c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(232,114,12,0.45)",
                  marginTop: "-20px",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <NavIcon active>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </NavIcon>
              <NavIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
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
