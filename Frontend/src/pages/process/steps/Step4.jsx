import { CheckCircle, User, Home, ShieldCheck, LayoutDashboard, ChevronRight } from "lucide-react";
import { StepHeader, Divider } from "../components/FormComponents";
import { C } from "../tokens";

const CHECKLIST_ITEMS = [
  { Icon: User,        text: "Profile & identity details received",      sub: "Verified & encrypted",         color: C.safeGreen },
  { Icon: ShieldCheck, text: "Background screening submitted",           sub: "Under review by our team",     color: C.accent    },
  { Icon: Home,        text: "Safe place details & availability saved",  sub: "Saved to your listing",        color: C.coral     },
  { Icon: CheckCircle, text: "Confirmation email sent",                  sub: "Check your inbox",             color: C.safeGreen },
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
      <div
        className="rounded-xl overflow-hidden bg-[#fafafa] mb-2"
        style={{ border: "1.5px solid rgba(74,106,120,0.15)" }}
      >
        {/* Card header */}
        <div
          className="flex items-center justify-between px-[1.4rem] py-[0.9rem]"
          style={{ borderBottom: "1px solid rgba(74,106,120,0.1)" }}
        >
          <span
            className="text-[0.65rem] font-bold tracking-[0.1em] uppercase"
            style={{ color: C.muted }}
          >
            Submitted items
          </span>
          <div
            className="flex items-center gap-1.5 text-[0.68rem] font-semibold rounded-full px-2.5 py-0.5"
            style={{
              color: C.safeGreen,
              background: "rgba(26,122,138,0.08)",
              border: "1px solid rgba(26,122,138,0.18)",
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: C.safeGreen }}
            />
            Under review
          </div>
        </div>

        {/* Checklist rows */}
        {CHECKLIST_ITEMS.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-[0.9rem] px-[1.4rem] py-[0.9rem] transition-colors duration-150 cursor-default"
            style={{
              borderBottom: i < CHECKLIST_ITEMS.length - 1 ? "1px solid rgba(74,106,120,0.08)" : "none",
              animation: `fadeUp 0.35s ease ${0.1 + i * 0.07}s both`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(232,114,12,0.025)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            {/* Icon bubble */}
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
              style={{ background: "rgba(74,106,120,0.06)" }}
            >
              <item.Icon size={16} color={item.color} />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div
                className="text-[0.85rem] font-semibold mb-0.5"
                style={{ color: C.deep }}
              >
                {item.text}
              </div>
              <div className="text-[0.72rem]" style={{ color: C.muted }}>
                {item.sub}
              </div>
            </div>

            {/* Check badge */}
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(26,122,138,0.1)",
                border: "1.5px solid rgba(26,122,138,0.2)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <polyline points="1.5,5 3.8,7.5 8.5,2.5" stroke={C.safeGreen} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex justify-end items-center gap-[0.9rem] mt-10">
        <a
          href="/listing"
          className="inline-flex items-center gap-1.5 bg-transparent px-[1.4rem] py-[0.85rem] rounded-full text-[0.85rem] font-medium no-underline transition-all duration-200"
          style={{
            color: C.muted,
            border: "1.5px solid rgba(74,106,120,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(74,106,120,0.4)";
            e.currentTarget.style.color = C.deep;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(74,106,120,0.2)";
            e.currentTarget.style.color = C.muted;
          }}
        >
          Download your App <ChevronRight size={14} />
        </a>
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 px-[1.7rem] py-[0.85rem] rounded-full text-[0.88rem] font-semibold no-underline border-none transition-all duration-200"
          style={{
            background: C.accent,
            color: C.white,
            boxShadow: "0 5px 20px rgba(232,114,12,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 9px 28px rgba(232,114,12,0.42)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 20px rgba(232,114,12,0.3)";
          }}
        >
          <LayoutDashboard size={15} />
          Go to My Dashboard
        </a>
      </div>
    </div>
  );
}
