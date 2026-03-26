import { ChevronLeft, ChevronRight, HeartHandshake } from "lucide-react";
import { C } from "../tokens";

export function BtnRow({ step, onBack, onNext, isLast }) {
  return (
    <div
      className={`flex items-center mt-10 ${
        step > 1 ? "justify-between" : "justify-end"
      }`}
    >
      {step > 1 && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 bg-transparent px-6 py-3.5 rounded-full text-[0.88rem] font-medium cursor-pointer transition-all duration-200"
          style={{
            color: C.muted,
            border: "1.5px solid rgba(74,106,120,0.25)",
          }}
        >
          <ChevronLeft size={16} /> Back
        </button>
      )}
      <button
        onClick={onNext}
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[0.9rem] font-semibold border-none cursor-pointer transition-all duration-[250ms]"
        style={{ background: C.accent, color: C.white }}
      >
        {isLast ? (
          <>
            <HeartHandshake size={16} /> Submit Registration
          </>
        ) : (
          <>
            Continue <ChevronRight size={16} />
          </>
        )}
      </button>
    </div>
  );
}

import { Home, Search, CheckCircle, User, Check } from "lucide-react";

const STEPS = [
  { label: "Your Profile", Icon: User },
  { label: "Background", Icon: Search },
  { label: "Your Space", Icon: Home },
  { label: "Confirmation", Icon: CheckCircle },
];

export function Stepper({ current }) {
  return (
    <div className="flex items-center w-full max-w-[1000px] mb-10">
      {STEPS.map((s, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <div
            key={n}
            className="flex-1 flex flex-row items-center gap-2 relative"
          >
            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div
                className="absolute top-[21px] h-0.5 z-0 transition-all duration-[400ms]"
                style={{
                  left: "calc(50% + 22px)",
                  right: "10px",
                  background: done ? C.safeGreen : "rgba(255,233,160,0.8)",
                }}
              />
            )}

            {/* Step icon */}
            <div
              className="w-[42px] h-[42px] z-10 relative flex items-center justify-center transition-all duration-300"
              style={{
                borderRadius: "20%",
                border: `2px solid ${
                  done ? C.safeGreen : active ? C.accent : "rgba(255,233,160,0.9)"
                }`,
                background: done ? C.safeGreen : active ? C.accent : C.cream,
                color: done || active ? C.white : C.muted,
              }}
            >
              {done ? <Check size={16} /> : <s.Icon size={16} />}
            </div>

            {/* Step label */}
            <div
              className="text-[0.7rem] font-semibold tracking-[0.04em] uppercase leading-tight"
              style={{
                color: done ? C.safeGreen : active ? C.accent : C.muted,
              }}
            >
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
