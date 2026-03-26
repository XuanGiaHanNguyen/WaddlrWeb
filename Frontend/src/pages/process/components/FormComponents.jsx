import { useState, useRef } from "react";
import { Upload, FileText, X, Lock, AlertTriangle } from "lucide-react";
import { C } from "../tokens";

export function Label({ children, hint }) {
  return (
    <div className="mb-1.5">
      <label className="text-xs font-bold tracking-widest uppercase" style={{ color: C.deep }}>
        {children}
      </label>
      {hint && (
        <div className="text-xs mt-0.5" style={{ color: C.muted }}>
          {hint}
        </div>
      )}
    </div>
  );
}

export function Input({ type = "text", placeholder, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
      style={{
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        color: C.deep,
        background: focused ? C.white : "#fafafa",
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        ...style,
      }}
    />
  );
}

export function Select({ children, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none cursor-pointer transition-all duration-200 appearance-none pr-10"
      style={{
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        color: C.deep,
        background: `#fafafa url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234a6a78' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 1rem center`,
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        ...style,
      }}
    >
      {children}
    </select>
  );
}

export function Textarea({ placeholder, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      rows={3}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-y transition-all duration-200"
      style={{
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        color: C.deep,
        background: focused ? C.white : "#fafafa",
        minHeight: "90px",
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        ...style,
      }}
    />
  );
}

export function FieldGroup({ children, span2, style }) {
  return (
    <div
      className="flex flex-col gap-1.5"
      style={{ gridColumn: span2 ? "span 2" : undefined, ...style }}
    >
      {children}
    </div>
  );
}

export function FormGrid({ children, cols = 2 }) {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {children}
    </div>
  );
}

export function Divider({ label }) {
  return (
    <div className="flex items-center gap-4 my-7">
      <div className="flex-1 h-px" style={{ background: "rgba(74,106,120,0.15)" }} />
      <span
        className="text-[0.7rem] font-bold tracking-widest uppercase whitespace-nowrap"
        style={{ color: C.muted }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: "rgba(74,106,120,0.15)" }} />
    </div>
  );
}

export function InfoBox({ children, variant = "teal" }) {
  const isTeal = variant === "teal";
  const Icon = isTeal ? Lock : AlertTriangle;
  return (
    <div
      className="flex gap-3 rounded-xl p-4 mb-5"
      style={{
        background: isTeal ? "rgba(26,122,138,0.06)" : "rgba(89,89,89,0.06)",
        border: `1px solid ${isTeal ? "rgba(26,122,138,0.2)" : "rgba(232,114,12,0.2)"}`,
      }}
    >
      <Icon
        size={18}
        color={isTeal ? C.safeGreen : C.accent}
        className="shrink-0 mt-px"
      />
      <p className="text-[0.82rem] leading-relaxed" style={{ color: C.muted }}>
        {children}
      </p>
    </div>
  );
}

export function RadioGroup({ name, options }) {
  return (
    <div className="flex flex-wrap gap-5 mt-1.5">
      {options.map((o) => (
        <label
          key={o.value}
          className="flex items-center gap-2 cursor-pointer text-[0.88rem]"
          style={{ color: C.deep }}
        >
          <input
            type="radio"
            name={name}
            value={o.value}
            className="w-4 h-4"
            style={{ accentColor: C.accent }}
          />
          {o.label}
        </label>
      ))}
    </div>
  );
}

export function CheckGroup({ options }) {
  return (
    <div className="flex flex-col gap-2 mt-1.5">
      {options.map((o) => (
        <label
          key={o}
          className="flex items-center gap-2.5 cursor-pointer text-[0.88rem]"
          style={{ color: C.deep }}
        >
          <input
            type="checkbox"
            className="w-4 h-4"
            style={{ accentColor: C.accent }}
          />
          {o}
        </label>
      ))}
    </div>
  );
}

export function PillGroup({ options }) {
  const [active, setActive] = useState([]);
  const toggle = (v) =>
    setActive((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((o) => {
        const on = active.includes(o.value);
        const Icon = o.icon;
        return (
          <button
            key={o.value}
            onClick={() => toggle(o.value)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.8rem] font-medium transition-all duration-200 cursor-pointer"
            style={{
              border: `1.5px solid ${on ? C.accent : "rgba(74,106,120,0.25)"}`,
              background: on ? C.accent : "transparent",
              color: on ? C.white : C.muted,
            }}
          >
            {Icon && <Icon size={13} />}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function Counter({ label, sublabel, value, onChange }) {
  return (
    <div
      className="flex justify-between items-center px-4 py-3.5 rounded-xl bg-[#fafafa]"
      style={{ border: "1.5px solid rgba(74,106,120,0.15)" }}
    >
      <div>
        <div
          className="text-[0.88rem] font-semibold"
          style={{ color: C.deep }}
        >
          {label}
        </div>
        <div className="text-[0.72rem]" style={{ color: C.muted }}>
          {sublabel}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(-1)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
          style={{
            border: "1.5px solid rgba(74,106,120,0.25)",
            background: C.white,
            color: C.deep,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div
          className="font-bold text-base text-center min-w-[1.5rem]"
          style={{ color: C.deep }}
        >
          {value}
        </div>
        <button
          onClick={() => onChange(1)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
          style={{
            border: "1.5px solid rgba(74,106,120,0.25)",
            background: C.white,
            color: C.deep,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function UploadZone({ label, sub }) {
  const [files, setFiles] = useState([]);
  const ref = useRef();
  const handleChange = (e) =>
    setFiles((p) => [...p, ...Array.from(e.target.files)]);
  const remove = (name) => setFiles((p) => p.filter((f) => f.name !== name));
  return (
    <div>
      <div
        onClick={() => ref.current.click()}
        className="rounded-2xl p-7 text-center cursor-pointer bg-[#fafafa] transition-all duration-200 group"
        style={{ border: "2px dashed rgba(74,106,120,0.3)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = C.accent;
          e.currentTarget.style.background = "rgba(232,114,12,0.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(74,106,120,0.3)";
          e.currentTarget.style.background = "#fafafa";
        }}
      >
        <div className="flex justify-center mb-2.5">
          <Upload size={28} color={C.muted} />
        </div>
        <div
          className="text-[0.9rem] font-semibold mb-1"
          style={{ color: C.deep }}
        >
          {label}
        </div>
        <div className="text-[0.78rem] mb-3" style={{ color: C.muted }}>
          {sub}
        </div>
        <span
          className="px-5 py-1.5 rounded-full text-[0.78rem] font-semibold"
          style={{ background: C.accent, color: C.white }}
        >
          Choose Files
        </span>
        <input
          type="file"
          ref={ref}
          multiple
          className="hidden"
          onChange={handleChange}
        />
      </div>
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {files.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1 text-[0.75rem] font-medium"
              style={{
                background: "rgba(26,122,138,0.1)",
                border: "1px solid rgba(26,122,138,0.25)",
                color: C.safeGreen,
              }}
            >
              <FileText size={12} />
              {f.name}
              <span
                className="cursor-pointer opacity-60 flex"
                onClick={() => remove(f.name)}
              >
                <X size={12} />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function StepHeader({ eyebrow, title, subtitle, Icon }) {
  return (
    <div className="flex gap-4 items-start mb-8">
      <div className="w-[52px] h-[52px] rounded-[14px] bg-[#fff8d6] flex items-center justify-center shrink-0">
        <Icon size={24} color="#fb923c" />
      </div>
      <div>
        <div
          className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-0.5"
          style={{ color: C.accent }}
        >
          {eyebrow}
        </div>
        <div
          className="font-black leading-tight text-[1.6rem]"
          style={{ fontFamily: "'Playfair Display', serif", color: "#605c50" }}
        >
          {title}
        </div>
        <div
          className="text-[0.88rem] mt-1.5 leading-relaxed"
          style={{ color: C.muted }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
