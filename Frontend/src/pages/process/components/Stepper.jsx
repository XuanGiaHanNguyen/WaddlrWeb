import { Home, Search, CheckCircle, User, Check } from "lucide-react";
import { C } from "../tokens";

const STEPS = [
  { label: "Your Profile", Icon: User },
  { label: "Background", Icon: Search },
  { label: "Your Space", Icon: Home },
  { label: "Confirmation", Icon: CheckCircle },
];

export function Stepper({ current }) {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 1000, marginBottom: "2.5rem" }}>
      {STEPS.map((s, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <div key={n} style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5rem", position: "relative" }}>
            {i < STEPS.length - 1 && (
              <div style={{ position: "absolute", top: 21, left: "calc(50% + 22px)", right: "10px", height: 2, background: done ? C.safeGreen : "rgba(255,233,160,0.8)", transition: "background 0.4s", zIndex: 0 }} />
            )}
            <div style={{ width: 42, height: 42, borderRadius: "20%", zIndex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${done ? C.safeGreen : active ? C.accent : "rgba(255,233,160,0.9)"}`, background: done ? C.safeGreen : active ? C.accent : C.cream, color: done || active ? C.white : C.muted, transition: "all 0.3s" }}>
              {done ? <Check size={16} /> : <s.Icon size={16} />}
            </div>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: done ? C.safeGreen : active ? C.accent : C.muted, lineHeight: 1.3 }}>
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}