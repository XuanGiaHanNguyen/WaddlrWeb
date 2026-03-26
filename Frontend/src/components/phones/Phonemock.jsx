import DUCK from "../../assets/Duck.jpg";

export default function PhoneMockupSplash() {
  return (
    <div className="phone-wrap">
      <div className="phone-outer">
        <div className="phone-inner">
          <div className="phone-notch" />
          {/* SCREEN */}
          <div className="absolute inset-0 bg-[#ed8a33] flex flex-col font-sans">

            {/* Status bar */}
            <div className="h-9 flex justify-between items-end px-5 pb-1 text-[12px] font-semibold text-white shrink-0">
              <span>9:41</span>
              <span className="flex gap-[5px] items-center">
                <svg width="14" height="10" viewBox="0 0 14 10">
                  <rect x="0" y="5" width="2.5" height="5" rx="0.5" fill="currentColor" />
                  <rect x="3.5" y="3" width="2.5" height="7" rx="0.5" fill="currentColor" />
                  <rect x="7" y="1.5" width="2.5" height="8.5" rx="0.5" fill="currentColor" />
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="currentColor" />
                </svg>
                <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
                  <path d="M10 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor" />
                  <path d="M5.5 7.5a6.5 6.5 0 0 1 9 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 4a11 11 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg width="20" height="10" viewBox="0 0 24 12">
                  <rect x="0.5" y="0.5" width="20" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <rect x="2" y="2" width="16" height="8" rx="1" fill="currentColor" />
                  <path d="M21.5 4v4a2 2 0 0 0 0-4z" fill="currentColor" />
                </svg>
              </span>
            </div>

            {/* Center content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {/* Duck icon */}
              <div className="w-[100px] h-[100px] rounded-[28px] overflow-hidden shadow-[0_6px_12px_rgba(0,0,0,0.2)]">
                <img
                  src={DUCK}
                  alt="Waddlr duck"
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* App name */}
              <div className="text-[38px] font-black text-white tracking-tight" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
                Waddlr.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
