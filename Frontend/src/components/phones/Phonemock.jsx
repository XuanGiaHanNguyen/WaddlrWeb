import DUCK from "../../assets/Duck.jpg";

export default function PhoneMockupSplash() {
  return (
    <div className="phone-wrap">
      <div className="phone-outer">
        <div className="phone-inner">
          <div className="phone-notch" />
          {/* SCREEN */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#ed8a33",
              display: "flex",
              flexDirection: "column",
              fontFamily: "-apple-system, sans-serif",
            }}
          >
            {/* Status bar */}
            <div
              style={{
                height: "36px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "0 20px 4px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              <span>9:41</span>
              <span
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <svg width="14" height="10" viewBox="0 0 14 10">
                  <rect
                    x="0"
                    y="5"
                    width="2.5"
                    height="5"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="3.5"
                    y="3"
                    width="2.5"
                    height="7"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="7"
                    y="1.5"
                    width="2.5"
                    height="8.5"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="10.5"
                    y="0"
                    width="2.5"
                    height="10"
                    rx="0.5"
                    fill="currentColor"
                  />
                </svg>
                <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
                  <path
                    d="M10 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.5 7.5a6.5 6.5 0 0 1 9 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 4a11 11 0 0 1 16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg width="20" height="10" viewBox="0 0 24 12">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="20"
                    height="11"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="8"
                    rx="1"
                    fill="currentColor"
                  />
                  <path d="M21.5 4v4a2 2 0 0 0 0-4z" fill="currentColor" />
                </svg>
              </span>
            </div>

            {/* Center content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
              }}
            >
              {/* Duck icon with rounded square */}
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "28px",
                  overflow: "hidden",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={DUCK}
                  alt="Waddlr duck"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* App name */}
              <div
                style={{
                  fontSize: "38px",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  textShadow: "0 2px 12px rgba(0,0,0,0.15)",
                }}
              >
                Waddlr.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
