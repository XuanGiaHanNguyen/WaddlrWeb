import { CheckCircle, User, Home, ShieldCheck, LayoutDashboard, ChevronRight } from "lucide-react";
import { StepHeader, Divider } from "../components/primitives";
import { C } from "../tokens";

const CHECKLIST_ITEMS = [
  { Icon: User,         text: "Profile & identity details received", sub: "Verified & encrypted",       color: C.safeGreen },
  { Icon: ShieldCheck,  text: "Background screening submitted",      sub: "Under review by our team",   color: C.accent    },
  { Icon: Home,         text: "Safe place details & availability saved", sub: "Saved to your listing",  color: C.coral     },
  { Icon: CheckCircle,  text: "Confirmation email sent",             sub: "Check your inbox",           color: C.safeGreen },
];

const NEXT_STEPS = [
  "Our team reviews your background check",
  "A coordinator calls to verify your space",
  "Your listing goes live — guests can request a stay",
];

export function Step4() {
  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <StepHeader
        eyebrow="Confirmation"
        title="You're registered!"
        subtitle="Thank you for opening your home. Our team will review your application within 2–3 business days and reach out to confirm your listing."
        Icon={CheckCircle}
      />

      {/* Checklist card */}
      <div style={{ border: "1.5px solid rgba(74,106,120,0.15)", borderRadius: 12, overflow: "hidden", background: "#fafafa", marginBottom: "0.5rem" }}>
        <div style={{ padding: "0.9rem 1.4rem", borderBottom: "1px solid rgba(74,106,120,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>
            Submitted items
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.68rem", fontWeight: 600, color: C.safeGreen, background: "rgba(26,122,138,0.08)", border: "1px solid rgba(26,122,138,0.18)", borderRadius: "100px", padding: "3px 10px" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.safeGreen }} />
            Under review
          </div>
        </div>
        {CHECKLIST_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: "0.9rem", padding: "0.9rem 1.4rem", borderBottom: i < CHECKLIST_ITEMS.length - 1 ? "1px solid rgba(74,106,120,0.08)" : "none", transition: "background 0.15s", animation: `fadeUp 0.35s ease ${0.1 + i * 0.07}s both` }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(232,114,12,0.025)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(74,106,120,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <item.Icon size={16} color={item.color} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: C.deep, marginBottom: 2 }}>{item.text}</div>
              <div style={{ fontSize: "0.72rem", color: C.muted }}>{item.sub}</div>
            </div>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(26,122,138,0.1)", border: "1.5px solid rgba(26,122,138,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="1.5,5 3.8,7.5 8.5,2.5" stroke={C.safeGreen} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        ))}
      </div>

      {/* CTAs — mirror BtnRow spacing/position */}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.9rem", marginTop: "2.4rem" }}>
        <a
          href="/listing"
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent", color: C.muted, padding: "0.85rem 1.4rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 500, border: "1.5px solid rgba(74,106,120,0.2)", textDecoration: "none", transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(74,106,120,0.4)"; e.currentTarget.style.color = C.deep; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(74,106,120,0.2)"; e.currentTarget.style.color = C.muted; }}
        >
          Download your App <ChevronRight size={14} />
        </a>
        <a
          href="/dashboard"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: C.accent, color: C.white, padding: "0.85rem 1.7rem", borderRadius: "100px", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", border: "none", boxShadow: "0 5px 20px rgba(232,114,12,0.3)", transition: "transform 0.2s, box-shadow 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 9px 28px rgba(232,114,12,0.42)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 5px 20px rgba(232,114,12,0.3)"; }}
        >
          <LayoutDashboard size={15} />
          Go to My Dashboard
        </a>
      </div>
    </div>
  );
}