import { ChevronLeft, ChevronRight, HeartHandshake } from "lucide-react";
import { C } from "../tokens";

export function BtnRow({ step, onBack, onNext, isLast }) {
  return (
    <div style={{ display: "flex", justifyContent: step > 1 ? "space-between" : "flex-end", alignItems: "center", marginTop: "2.4rem" }}>
      {step > 1 && (
        <button
          onClick={onBack}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: C.muted, padding: "0.85rem 1.5rem", borderRadius: "100px", fontSize: "0.88rem", fontWeight: 500, border: "1.5px solid rgba(74,106,120,0.25)", cursor: "pointer", transition: "all 0.2s" }}
        >
          <ChevronLeft size={16} /> Back
        </button>
      )}
      <button
        onClick={onNext}
        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: C.accent, color: C.white, padding: "0.85rem 2rem", borderRadius: "100px", fontSize: "0.9rem", fontWeight: 600, border: "none", cursor: "pointer", transition: "all 0.25s" }}
      >
        {isLast ? <><HeartHandshake size={16} /> Submit Registration</> : <>Continue <ChevronRight size={16} /></>}
      </button>
    </div>
  );
}