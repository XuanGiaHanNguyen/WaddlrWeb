import { useState, useRef } from "react";
import { Upload, FileText, X, Lock, AlertTriangle } from "lucide-react";

export function Label({ children, hint }) {
  return (
    <div className="mb-1.5">
      <label className="text-xs font-bold tracking-widest uppercase text-slate-700">
        {children}
      </label>
      {hint && (
        <div className="text-xs mt-0.5 text-slate-400">{hint}</div>
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
      className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 bg-slate-50 text-slate-800 placeholder:text-slate-300 border ${
        focused
          ? "border-orange-500 ring-2 ring-orange-500/10 bg-white shadow-sm"
          : "border-slate-200 hover:border-slate-300"
      }`}
      style={style}
    />
  );
}

export function Select({ children, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`w-full px-4 py-3 rounded-xl text-sm outline-none cursor-pointer transition-all duration-200 appearance-none bg-slate-50 text-slate-800 border ${
        focused
          ? "border-orange-500 ring-2 ring-orange-500/10 bg-white shadow-sm"
          : "border-slate-200 hover:border-slate-300"
      }`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394a3b8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1rem center",
        paddingRight: "2.5rem",
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
      className={`w-full px-4 py-3 rounded-xl text-sm outline-none resize-y transition-all duration-200 bg-slate-50 text-slate-800 placeholder:text-slate-300 border ${
        focused
          ? "border-orange-500 ring-2 ring-orange-500/10 bg-white shadow-sm"
          : "border-slate-200 hover:border-slate-300"
      }`}
      style={{ minHeight: "90px", ...style }}
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
      className="grid gap-x-6 gap-y-7"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {children}
    </div>
  );
}

export function Divider({ label }) {
  return (
    <div className="flex items-center gap-4 my-9">
      <div className="flex-1 h-px bg-slate-100" />
      <span className="text-[0.7rem] font-bold tracking-widest uppercase text-slate-400 whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-slate-100" />
    </div>
  );
}

export function InfoBox({ children, variant = "teal" }) {
  const isTeal = variant === "teal";
  const Icon = isTeal ? Lock : AlertTriangle;
  return (
    <div
      className={`flex gap-3 rounded-xl p-4 mb-5 ${
        isTeal
          ? "bg-teal-50 border border-teal-100"
          : "bg-orange-50 border border-orange-100"
      }`}
    >
      <Icon
        size={18}
        className={`shrink-0 mt-px ${isTeal ? "text-teal-600" : "text-orange-500"}`}
      />
      <p className="text-[0.82rem] leading-relaxed text-slate-500">{children}</p>
    </div>
  );
}

export function RadioGroup({ name, options }) {
  return (
    <div className="flex flex-wrap gap-5 mt-1.5">
      {options.map((o) => (
        <label
          key={o.value}
          className="flex items-center gap-2 cursor-pointer text-[0.88rem] text-slate-700"
        >
          <input
            type="radio"
            name={name}
            value={o.value}
            className="w-4 h-4 accent-orange-500"
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
          className="flex items-center gap-2.5 cursor-pointer text-[0.88rem] text-slate-700"
        >
          <input type="checkbox" className="w-4 h-4 accent-orange-500" />
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
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.8rem] font-medium transition-all duration-200 cursor-pointer border ${
              on
                ? "bg-orange-500 border-orange-500 text-white"
                : "bg-transparent border-slate-200 text-slate-500 hover:border-slate-300"
            }`}
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
    <div className="flex justify-between items-center px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div>
        <div className="text-[0.88rem] font-semibold text-slate-800">{label}</div>
        <div className="text-[0.72rem] text-slate-400">{sublabel}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(-1)}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-700 hover:border-slate-300 transition-all duration-200 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="font-bold text-base text-center min-w-[1.5rem] text-slate-800">
          {value}
        </div>
        <button
          onClick={() => onChange(1)}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-700 hover:border-slate-300 transition-all duration-200 cursor-pointer"
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
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  const handleChange = (e) =>
    setFiles((p) => [...p, ...Array.from(e.target.files)]);
  const remove = (name) => setFiles((p) => p.filter((f) => f.name !== name));
  return (
    <div>
      <div
        onClick={() => ref.current.click()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`rounded-2xl p-7 text-center cursor-pointer transition-all duration-200 border-2 border-dashed ${
          hovered
            ? "border-orange-400 bg-orange-50/30"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <div className="flex justify-center mb-2.5">
          <Upload size={28} className="text-slate-400" />
        </div>
        <div className="text-[0.9rem] font-semibold mb-1 text-slate-700">{label}</div>
        <div className="text-[0.78rem] mb-3 text-slate-400">{sub}</div>
        <span className="px-5 py-1.5 rounded-full text-[0.78rem] font-semibold bg-orange-500 text-white">
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
              className="flex items-center gap-1.5 rounded-lg px-3 py-1 text-[0.75rem] font-medium bg-teal-50 border border-teal-100 text-teal-600"
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
      <div className="w-[52px] h-[52px] rounded-[14px] bg-orange-50 flex items-center justify-center shrink-0">
        <Icon size={24} className="text-orange-400" />
      </div>
      <div>
        <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-0.5 text-orange-500">
          {eyebrow}
        </div>
        <div className="font-black leading-tight text-[1.6rem] text-slate-700" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </div>
        <div className="text-[0.88rem] mt-1.5 leading-relaxed text-slate-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
}