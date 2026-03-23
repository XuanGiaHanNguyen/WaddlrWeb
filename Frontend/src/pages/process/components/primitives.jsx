import { useState, useRef } from "react";
import { Upload, FileText, X, Lock, AlertTriangle } from "lucide-react";
import { C } from "../tokens";

export function Label({ children, hint }) {
  return (
    <div style={{ marginBottom: "0.35rem" }}>
      <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: C.deep }}>
        {children}
      </label>
      {hint && <div style={{ fontSize: "0.72rem", color: C.muted, marginTop: "2px" }}>{hint}</div>}
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
      style={{
        width: "100%", padding: "0.75rem 1rem",
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        borderRadius: "12px", fontSize: "0.9rem", color: C.deep,
        background: focused ? C.white : "#fafafa", outline: "none",
        transition: "border-color 0.2s, background 0.2s",
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
      style={{
        width: "100%", padding: "0.75rem 1rem",
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        borderRadius: "12px", fontSize: "0.9rem", color: C.deep,
        background: `#fafafa url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234a6a78' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 1rem center`,
        outline: "none", appearance: "none", cursor: "pointer", paddingRight: "2.5rem",
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        transition: "border-color 0.2s", ...style,
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
      style={{
        width: "100%", padding: "0.75rem 1rem",
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        borderRadius: "12px", fontSize: "0.9rem", color: C.deep,
        background: focused ? C.white : "#fafafa", outline: "none",
        resize: "vertical", minHeight: "90px",
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        transition: "border-color 0.2s", ...style,
      }}
    />
  );
}

export function FieldGroup({ children, span2, style }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", gridColumn: span2 ? "span 2" : undefined, ...style }}>
      {children}
    </div>
  );
}

export function FormGrid({ children, cols = 2 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "1.2rem" }}>
      {children}
    </div>
  );
}

export function Divider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.8rem 0 1.4rem" }}>
      <div style={{ flex: 1, height: "1px", background: "rgba(74,106,120,0.15)" }} />
      <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, whiteSpace: "nowrap" }}>
        {label}
      </span>
      <div style={{ flex: 1, height: "1px", background: "rgba(74,106,120,0.15)" }} />
    </div>
  );
}

export function InfoBox({ children, variant = "teal" }) {
  const bg = variant === "teal" ? "rgba(26,122,138,0.06)" : "rgba(89,89,89,0.06)";
  const br = variant === "teal" ? "rgba(26,122,138,0.2)" : "rgba(232,114,12,0.2)";
  const col = variant === "teal" ? C.safeGreen : C.accent;
  const Icon = variant === "teal" ? Lock : AlertTriangle;
  return (
    <div style={{ display: "flex", gap: "0.8rem", background: bg, border: `1px solid ${br}`, borderRadius: "12px", padding: "1rem 1.2rem", marginBottom: "1.4rem" }}>
      <Icon size={18} color={col} style={{ flexShrink: 0, marginTop: "1px" }} />
      <p style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

export function RadioGroup({ name, options }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginTop: "0.4rem" }}>
      {options.map((o) => (
        <label key={o.value} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.88rem", color: C.deep }}>
          <input type="radio" name={name} value={o.value} style={{ accentColor: C.accent, width: 16, height: 16 }} />
          {o.label}
        </label>
      ))}
    </div>
  );
}

export function CheckGroup({ options }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.4rem" }}>
      {options.map((o) => (
        <label key={o} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer", fontSize: "0.88rem", color: C.deep }}>
          <input type="checkbox" style={{ accentColor: C.accent, width: 16, height: 16 }} />
          {o}
        </label>
      ))}
    </div>
  );
}

export function PillGroup({ options }) {
  const [active, setActive] = useState([]);
  const toggle = (v) => setActive((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
      {options.map((o) => {
        const on = active.includes(o.value);
        const Icon = o.icon;
        return (
          <button
            key={o.value}
            onClick={() => toggle(o.value)}
            style={{
              padding: "0.45rem 0.9rem", borderRadius: "100px", cursor: "pointer",
              border: `1.5px solid ${on ? C.accent : "rgba(74,106,120,0.25)"}`,
              background: on ? C.accent : "transparent",
              color: on ? C.white : C.muted,
              fontSize: "0.8rem", fontWeight: 500, transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: "0.4rem",
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
  const btnStyle = {
    width: 32, height: 32, borderRadius: "50%",
    border: "1.5px solid rgba(74,106,120,0.25)",
    background: C.white, color: C.deep, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.2s",
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.9rem 1rem", border: "1.5px solid rgba(74,106,120,0.15)", borderRadius: "12px", background: "#fafafa" }}>
      <div>
        <div style={{ fontSize: "0.88rem", color: C.deep, fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: "0.72rem", color: C.muted }}>{sublabel}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
        <button onClick={() => onChange(-1)} style={btnStyle}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
        <div style={{ fontWeight: 700, fontSize: "1rem", minWidth: "1.5rem", textAlign: "center" }}>{value}</div>
        <button onClick={() => onChange(1)} style={btnStyle}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  );
}

export function UploadZone({ label, sub }) {
  const [files, setFiles] = useState([]);
  const ref = useRef();
  const handleChange = (e) => setFiles((p) => [...p, ...Array.from(e.target.files)]);
  const remove = (name) => setFiles((p) => p.filter((f) => f.name !== name));
  return (
    <div>
      <div
        onClick={() => ref.current.click()}
        style={{ border: "2px dashed rgba(74,106,120,0.3)", borderRadius: "16px", padding: "1.8rem", textAlign: "center", cursor: "pointer", background: "#fafafa", transition: "all 0.2s" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.background = "rgba(232,114,12,0.03)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(74,106,120,0.3)"; e.currentTarget.style.background = "#fafafa"; }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.6rem" }}><Upload size={28} color={C.muted} /></div>
        <div style={{ fontSize: "0.9rem", fontWeight: 600, color: C.deep, marginBottom: "0.3rem" }}>{label}</div>
        <div style={{ fontSize: "0.78rem", color: C.muted, marginBottom: "0.8rem" }}>{sub}</div>
        <span style={{ background: C.accent, color: C.white, padding: "0.4rem 1.2rem", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 600 }}>Choose Files</span>
        <input type="file" ref={ref} multiple style={{ display: "none" }} onChange={handleChange} />
      </div>
      {files.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.7rem" }}>
          {files.map((f) => (
            <div key={f.name} style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "rgba(26,122,138,0.1)", border: "1px solid rgba(26,122,138,0.25)", color: C.safeGreen, borderRadius: "8px", padding: "0.3rem 0.7rem", fontSize: "0.75rem", fontWeight: 500 }}>
              <FileText size={12} />
              {f.name}
              <span style={{ cursor: "pointer", opacity: 0.6, display: "flex" }} onClick={() => remove(f.name)}><X size={12} /></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function StepHeader({ eyebrow, title, subtitle, Icon }) {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "2rem" }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: "#fff8d6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={24} color="#fb923c" />
      </div>
      <div>
        <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: "0.2rem" }}>{eyebrow}</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 900, lineHeight: 1.15, color: "#605c50" }}>{title}</div>
        <div style={{ fontSize: "0.88rem", color: C.muted, marginTop: "0.4rem", lineHeight: 1.6 }}>{subtitle}</div>
      </div>
    </div>
  );
}