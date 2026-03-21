import { useState, useRef } from "react";
import {
  Home,
  Camera,
  Search,
  CheckCircle,
  User,
  Lock,
  AlertTriangle,
  Upload,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Dog,
  Cat,
  Bird,
  Fish,
  Rabbit,
  Bed,
  ShowerHead,
  UtensilsCrossed,
  Wifi,
  LockKeyhole,
  Car,
  Accessibility,
  WashingMachine,
  LayoutDashboard,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ─── CSS-in-JS tokens ────────────────────────────────────────────────────────
const C = {
  cream: "#fff4d0",
  blush: "#ffe9a0",
  coral: "#d4860a",
  deep: "#0f2027",
  warmDark: "#0d2b35",
  muted: "#4a6a78",
  safeGreen: "#1a7a8a",
  safeLight: "#a8dce4",
  accent: "#e8720c",
  white: "#ffffff",
};

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${C.cream}; font-family: 'DM Sans', sans-serif; color: ${C.deep}; }
  input, select, textarea, button { font-family: 'DM Sans', sans-serif; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.6); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes checkPop {
    0%   { opacity: 0; transform: scale(0.4); }
    70%  { transform: scale(1.15); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

// ─── Primitives ───────────────────────────────────────────────────────────────

function Label({ children, hint }) {
  return (
    <div style={{ marginBottom: "0.35rem" }}>
      <label
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: C.deep,
        }}
      >
        {children}
      </label>
      {hint && (
        <div style={{ fontSize: "0.72rem", color: C.muted, marginTop: "2px" }}>
          {hint}
        </div>
      )}
    </div>
  );
}

function Input({ type = "text", placeholder, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: "100%",
        padding: "0.75rem 1rem",
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        borderRadius: "12px",
        fontSize: "0.9rem",
        color: C.deep,
        background: focused ? C.white : "#fafafa",
        outline: "none",
        transition: "border-color 0.2s, background 0.2s",
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        ...style,
      }}
    />
  );
}

function Select({ children, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: "100%",
        padding: "0.75rem 1rem",
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        borderRadius: "12px",
        fontSize: "0.9rem",
        color: C.deep,
        background: `#fafafa url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234a6a78' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 1rem center`,
        outline: "none",
        appearance: "none",
        cursor: "pointer",
        paddingRight: "2.5rem",
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        transition: "border-color 0.2s",
        ...style,
      }}
    >
      {children}
    </select>
  );
}

function Textarea({ placeholder, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      rows={3}
      style={{
        width: "100%",
        padding: "0.75rem 1rem",
        border: `1.5px solid ${focused ? C.accent : "rgba(74,106,120,0.22)"}`,
        borderRadius: "12px",
        fontSize: "0.9rem",
        color: C.deep,
        background: focused ? C.white : "#fafafa",
        outline: "none",
        resize: "vertical",
        minHeight: "90px",
        boxShadow: focused ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
        transition: "border-color 0.2s",
        ...style,
      }}
    />
  );
}

function FieldGroup({ children, span2, style }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        gridColumn: span2 ? "span 2" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function FormGrid({ children, cols = 2 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "1.2rem",
      }}
    >
      {children}
    </div>
  );
}

function Divider({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "1.8rem 0 1.4rem",
      }}
    >
      <div
        style={{ flex: 1, height: "1px", background: "rgba(74,106,120,0.15)" }}
      />
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: C.muted,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div
        style={{ flex: 1, height: "1px", background: "rgba(74,106,120,0.15)" }}
      />
    </div>
  );
}

function InfoBox({ children, variant = "teal" }) {
  const bg =
    variant === "teal" ? "rgba(26,122,138,0.06)" : "rgba(89, 89, 89, 0.06)";
  const br =
    variant === "teal" ? "rgba(26,122,138,0.2)" : "rgba(232,114,12,0.2)";
  const col = variant === "teal" ? C.safeGreen : C.accent;
  const Icon = variant === "teal" ? Lock : AlertTriangle;
  return (
    <div
      style={{
        display: "flex",
        gap: "0.8rem",
        background: bg,
        border: `1px solid ${br}`,
        borderRadius: "12px",
        padding: "1rem 1.2rem",
        marginBottom: "1.4rem",
      }}
    >
      <Icon size={18} color={col} style={{ flexShrink: 0, marginTop: "1px" }} />
      <p style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.6 }}>
        {children}
      </p>
    </div>
  );
}

function RadioGroup({ name, options }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.2rem",
        marginTop: "0.4rem",
      }}
    >
      {options.map((o) => (
        <label
          key={o.value}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            fontSize: "0.88rem",
            color: C.deep,
          }}
        >
          <input
            type="radio"
            name={name}
            value={o.value}
            style={{ accentColor: C.accent, width: 16, height: 16 }}
          />
          {o.label}
        </label>
      ))}
    </div>
  );
}

function CheckGroup({ options }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "0.4rem",
      }}
    >
      {options.map((o) => (
        <label
          key={o}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            cursor: "pointer",
            fontSize: "0.88rem",
            color: C.deep,
          }}
        >
          <input
            type="checkbox"
            style={{ accentColor: C.accent, width: 16, height: 16 }}
          />
          {o}
        </label>
      ))}
    </div>
  );
}

function PillGroup({ options }) {
  const [active, setActive] = useState([]);
  const toggle = (v) =>
    setActive((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginTop: "0.5rem",
      }}
    >
      {options.map((o) => {
        const on = active.includes(o.value);
        const Icon = o.icon;
        return (
          <button
            key={o.value}
            onClick={() => toggle(o.value)}
            style={{
              padding: "0.45rem 0.9rem",
              borderRadius: "100px",
              cursor: "pointer",
              border: `1.5px solid ${on ? C.accent : "rgba(74,106,120,0.25)"}`,
              background: on ? C.accent : "transparent",
              color: on ? C.white : C.muted,
              fontSize: "0.8rem",
              fontWeight: 500,
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
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

function Counter({ label, sublabel, value, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.9rem 1rem",
        border: "1.5px solid rgba(74,106,120,0.15)",
        borderRadius: "12px",
        background: "#fafafa",
      }}
    >
      <div>
        <div style={{ fontSize: "0.88rem", color: C.deep, fontWeight: 600 }}>
          {label}
        </div>
        <div style={{ fontSize: "0.72rem", color: C.muted }}>{sublabel}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
        <button
          onClick={() => onChange(-1)}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1.5px solid rgba(74,106,120,0.25)",
            background: C.white,
            color: C.deep,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
        >
          <Minus size={14} />
        </button>
        <div
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            minWidth: "1.5rem",
            textAlign: "center",
          }}
        >
          {value}
        </div>
        <button
          onClick={() => onChange(1)}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1.5px solid rgba(74,106,120,0.25)",
            background: C.white,
            color: C.deep,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

function UploadZone({ label, sub }) {
  const [files, setFiles] = useState([]);
  const ref = useRef();
  const handleChange = (e) =>
    setFiles((p) => [...p, ...Array.from(e.target.files)]);
  const remove = (name) => setFiles((p) => p.filter((f) => f.name !== name));
  return (
    <div>
      <div
        onClick={() => ref.current.click()}
        style={{
          border: "2px dashed rgba(74,106,120,0.3)",
          borderRadius: "16px",
          padding: "1.8rem",
          textAlign: "center",
          cursor: "pointer",
          background: "#fafafa",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = C.accent;
          e.currentTarget.style.background = "rgba(232,114,12,0.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(74,106,120,0.3)";
          e.currentTarget.style.background = "#fafafa";
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.6rem",
          }}
        >
          <Upload size={28} color={C.muted} />
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: C.deep,
            marginBottom: "0.3rem",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "0.78rem",
            color: C.muted,
            marginBottom: "0.8rem",
          }}
        >
          {sub}
        </div>
        <span
          style={{
            background: C.accent,
            color: C.white,
            padding: "0.4rem 1.2rem",
            borderRadius: "100px",
            fontSize: "0.78rem",
            fontWeight: 600,
          }}
        >
          Choose Files
        </span>
        <input
          type="file"
          ref={ref}
          multiple
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0.7rem",
          }}
        >
          {files.map((f) => (
            <div
              key={f.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(26,122,138,0.1)",
                border: "1px solid rgba(26,122,138,0.25)",
                color: C.safeGreen,
                borderRadius: "8px",
                padding: "0.3rem 0.7rem",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              <FileText size={12} />
              {f.name}
              <span
                style={{ cursor: "pointer", opacity: 0.6, display: "flex" }}
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

// ─── Stepper ──────────────────────────────────────────────────────────────────
const STEPS = [
  { label: "Your Profile", Icon: User },
  { label: "Background", Icon: Search },
  { label: "Your Space", Icon: Home },
  { label: "Confirmation", Icon: CheckCircle },
];

function Stepper({ current }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 1000,
        marginBottom: "2.5rem",
      }}
    >
      {STEPS.map((s, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <div
            key={n}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
              position: "relative",
            }}
          >
            {i < STEPS.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: 21,
                  left: "calc(50% + 22px)",
                  right: "10px",
                  height: 2,
                  background: done ? C.safeGreen : "rgba(255,233,160,0.8)",
                  transition: "background 0.4s",
                  zIndex: 0,
                }}
              />
            )}
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "20%",
                zIndex: 1,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${done ? C.safeGreen : active ? C.accent : "rgba(255,233,160,0.9)"}`,
                background: done ? C.safeGreen : active ? C.accent : C.cream,
                color: done || active ? C.white : C.muted,
                transition: "all 0.3s",
              }}
            >
              {done ? <Check size={16} /> : <s.Icon size={16} />}
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: done ? C.safeGreen : active ? C.accent : C.muted,
                lineHeight: 1.3,
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

// ─── StepHeader ───────────────────────────────────────────────────────────────
function StepHeader({ eyebrow, title, subtitle, Icon, iconBg }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "flex-start",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: "#fff8d6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={24} color="#fb923c" />
      </div>
      <div>
        <div
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: C.accent,
            marginBottom: "0.2rem",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#605c50",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "0.88rem",
            color: C.muted,
            marginTop: "0.4rem",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────
function Step1() {
  const [mode, setMode] = useState("existing");
  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <StepHeader
        eyebrow="Step 1 of 3"
        title="Your Profile"
        subtitle="Sign in or create an account, then tell us a bit about yourself."
        Icon={User}
        iconBg="rgba(232,114,12,0.12)"
      />
      <div
        style={{
          display: "flex",
          borderRadius: 14,
          overflow: "hidden",
          border: "1.5px solid rgba(74,106,120,0.2)",
          marginBottom: "1.8rem",
        }}
      >
        {[
          ["existing", "I have an account"],
          ["new", "Create account"],
        ].map(([key, lbl]) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            style={{
              flex: 1,
              padding: "0.75rem",
              textAlign: "center",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              background: mode === key ? C.accent : "#fafafa",
              color: mode === key ? C.white : C.muted,
              border: "none",
              transition: "all 0.2s",
            }}
          >
            {lbl}
          </button>
        ))}
      </div>

      {mode === "existing" ? (
        <FormGrid>
          <FieldGroup>
            <Label>Email address</Label>
            <Input type="email" placeholder="you@example.com" />
          </FieldGroup>
          <FieldGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </FieldGroup>
        </FormGrid>
      ) : (
        <FormGrid>
          <FieldGroup>
            <Label>First name</Label>
            <Input placeholder="Jordan" />
          </FieldGroup>
          <FieldGroup>
            <Label>Last name</Label>
            <Input placeholder="Smith" />
          </FieldGroup>
          <FieldGroup>
            <Label>Email address</Label>
            <Input type="email" placeholder="you@example.com" />
          </FieldGroup>
          <FieldGroup>
            <Label>Phone number</Label>
            <Input type="tel" placeholder="+1 (555) 000-0000" />
          </FieldGroup>
          <FieldGroup>
            <Label>Create password</Label>
            <Input type="password" placeholder="••••••••" />
          </FieldGroup>
          <FieldGroup>
            <Label>Confirm password</Label>
            <Input type="password" placeholder="••••••••" />
          </FieldGroup>
        </FormGrid>
      )}

      <Divider label="Personal Details" />
      <FormGrid>
        <FieldGroup>
          <Label>Date of birth</Label>
          <Input placeholder="MM / DD / YYYY" />
        </FieldGroup>
        <FieldGroup>
          <Label>Gender identity</Label>
          <Select>
            <option>Select…</option>
            {[
              "Woman",
              "Man",
              "Non-binary",
              "Prefer not to say",
              "Prefer to self-describe",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </FieldGroup>
        <FieldGroup>
          <Label>Occupation</Label>
          <Select>
            <option>Select…</option>
            {[
              "Healthcare Worker",
              "Social Worker",
              "Educator",
              "Retired",
              "Student",
              "Self-employed",
              "Other",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </FieldGroup>
        <FieldGroup>
          <Label>Languages spoken</Label>
          <Input placeholder="e.g. English, Spanish" />
        </FieldGroup>
        <FieldGroup span2>
          <Label hint="We only display approximate area, never your exact address.">
            City / Neighbourhood
          </Label>
          <Input placeholder="e.g. East Tampa, FL" />
        </FieldGroup>
        <FieldGroup span2>
          <Label>
            Why do you want to host?{" "}
            <span
              style={{
                fontWeight: 400,
                textTransform: "none",
                fontSize: "0.72rem",
              }}
            >
              (optional)
            </span>
          </Label>
          <Textarea placeholder="A few words about your motivation…" />
        </FieldGroup>
      </FormGrid>
    </div>
  );
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────
function Step2() {
  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <StepHeader
        eyebrow="Step 2 of 3"
        title="Background Check"
        subtitle="Honest answers keep everyone safe. All responses are fully confidential."
        Icon={ShieldCheck}
        iconBg="rgba(26,122,138,0.12)"
        iconColor={C.safeGreen}
      />
      <InfoBox style={{ marginTop: "5px" }} variant="teal">
        To keep the community safe, you will be asked to provide proof of
        everything said here.{" "}
      </InfoBox>
      <Divider label="Substance Use" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <FieldGroup>
          <Label>Have you used illegal substances in the past 12 months?</Label>
          <RadioGroup
            name="drugs"
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Yes" },
              { value: "na", label: "Prefer not to say" },
            ]}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>Are you currently in recovery or a support programme?</Label>
          <RadioGroup
            name="recovery"
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Yes" },
              { value: "na", label: "Not applicable" },
            ]}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>Do you consume alcohol regularly in your home?</Label>
          <RadioGroup
            name="alcohol"
            options={[
              { value: "no", label: "No" },
              { value: "occasionally", label: "Occasionally" },
              { value: "yes", label: "Regularly" },
            ]}
          />
        </FieldGroup>
      </div>

      <Divider label="Safety & Legal" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <FieldGroup>
          <Label>Have you ever been convicted of a violent offence?</Label>
          <RadioGroup
            name="violent"
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Yes — details required below" },
            ]}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>
            Have you ever been issued a restraining / protective order?
          </Label>
          <RadioGroup
            name="restraining"
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Yes — details required below" },
            ]}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>
            Any legal reasons you cannot have visitors at your home?
          </Label>
          <RadioGroup
            name="legal"
            options={[
              { value: "no", label: "No" },
              { value: "yes", label: "Yes" },
            ]}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>
            Additional context{" "}
            <span
              style={{
                fontWeight: 400,
                textTransform: "none",
                fontSize: "0.72rem",
              }}
            >
              (if you answered Yes above)
            </span>
          </Label>
          <Textarea placeholder="Please provide context for any 'Yes' answers. Reviewed privately by our team." />
        </FieldGroup>
      </div>

      <Divider label="Mental Health & Wellbeing" />
      <FieldGroup>
        <Label>
          Any mental health conditions our team should know about when matching
          guests?
        </Label>
        <RadioGroup
          name="mental"
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes — optional note above" },
            { value: "na", label: "Prefer not to say" },
          ]}
        />
      </FieldGroup>

      <Divider label="References" />
      <FormGrid>
        <FieldGroup>
          <Label>Reference 1 — Name</Label>
          <Input placeholder="Full name" />
        </FieldGroup>
        <FieldGroup>
          <Label>Reference 1 — Contact</Label>
          <Input placeholder="Phone or email" />
        </FieldGroup>
        <FieldGroup>
          <Label>Reference 2 — Name</Label>
          <Input placeholder="Full name" />
        </FieldGroup>
        <FieldGroup>
          <Label>Reference 2 — Contact</Label>
          <Input placeholder="Phone or email" />
        </FieldGroup>
      </FormGrid>
    </div>
  );
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────
function Step3() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [activeDays, setActiveDays] = useState([]);
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const toggleDay = (d) =>
    setActiveDays((p) =>
      p.includes(d) ? p.filter((x) => x !== d) : [...p, d],
    );

  const petOptions = [
    { value: "dog", label: "Dog", icon: Dog },
    { value: "cat", label: "Cat", icon: Cat },
    { value: "bird", label: "Bird", icon: Bird },
    { value: "fish", label: "Fish", icon: Fish },
    { value: "other", label: "Other", icon: Rabbit },
    { value: "none", label: "None", icon: X },
  ];
  const amenityOptions = [
    { value: "bed", label: "Private bed", icon: Bed },
    { value: "bath", label: "Own bathroom", icon: ShowerHead },
    { value: "kitchen", label: "Kitchen", icon: UtensilsCrossed },
    { value: "wifi", label: "Wi-Fi", icon: Wifi },
    { value: "lock", label: "Lockable room", icon: LockKeyhole },
    { value: "parking", label: "Parking", icon: Car },
    { value: "wheelchair", label: "Accessible", icon: Accessibility },
    { value: "laundry", label: "Laundry", icon: WashingMachine },
  ];
  const householdOptions = [
    "Partner / spouse",
    "Children under 18",
    "Other adults",
    "I live alone",
  ];

  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <StepHeader
        eyebrow="Step 3 of 3"
        title="Your Safe Place"
        subtitle="Tell us about your home, when you're available, and who else lives there."
        Icon={Home}
        iconBg="rgba(245,197,24,0.18)"
        iconColor={C.coral}
      />

      <Divider label="About Your Home" />
      <FormGrid>
        <FieldGroup>
          <Label>Type of space</Label>
          <Select>
            {[
              "Spare room in my home",
              "Studio / granny flat",
              "Entire apartment",
              "Sofa / living space only",
              "Garage / converted space",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </FieldGroup>
        <FieldGroup>
          <Label>Floor level</Label>
          <Select>
            {["Ground floor", "1st floor", "2nd floor +"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </FieldGroup>
        <FieldGroup span2>
          <Label hint="Private — never shared publicly.">Full address</Label>
          <Input placeholder="123 Maplewood Dr, Tampa, FL 33602" />
        </FieldGroup>
        <FieldGroup span2>
          <Label>Brief description of the space</Label>
          <Textarea placeholder="e.g. Quiet private room with lock, own bathroom, close to bus stops…" />
        </FieldGroup>
      </FormGrid>

      <Divider label="Capacity" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          marginBottom: "0.5rem",
        }}
      >
        <Counter
          label="Adults"
          sublabel="Max number of adult guests"
          value={adults}
          onChange={(d) => setAdults(Math.max(0, adults + d))}
        />
        <Counter
          label="Children"
          sublabel="Can you accommodate children?"
          value={children}
          onChange={(d) => setChildren(Math.max(0, children + d))}
        />
      </div>

      <Divider label="Availability" />
      <FieldGroup style={{ marginBottom: "1rem" }}>
        <Label>Days typically available</Label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7,1fr)",
            gap: "0.4rem",
            marginTop: "0.5rem",
          }}
        >
          {DAYS.map((d) => {
            const on = activeDays.includes(d);
            return (
              <button
                key={d}
                onClick={() => toggleDay(d)}
                style={{
                  padding: "0.5rem 0.2rem",
                  borderRadius: 10,
                  border: `1.5px solid ${on ? C.safeGreen : "rgba(74,106,120,0.2)"}`,
                  background: on ? C.safeGreen : "transparent",
                  color: on ? C.white : C.muted,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textAlign: "center",
                }}
              >
                {d}
              </button>
            );
          })}
        </div>
      </FieldGroup>

      <FormGrid>
        <FieldGroup>
          <Label>Available from</Label>
          <Input placeholder="e.g. 07:00" />
        </FieldGroup>
        <FieldGroup>
          <Label>Available until</Label>
          <Input placeholder="e.g. 22:00" />
        </FieldGroup>
        <FieldGroup span2>
          <Label>Notice required before a guest arrives</Label>
          <Select>
            {[
              "Immediately (I'm on-call)",
              "30 minutes",
              "1 hour",
              "2–4 hours",
              "Same day",
              "24 hours",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </FieldGroup>
      </FormGrid>

      <Divider label="Household & Pets" />
      <FormGrid>
        <FieldGroup>
          <Label>Who else lives in the home?</Label>
          <CheckGroup options={householdOptions} />
        </FieldGroup>
        <FieldGroup>
          <Label>Pets in the home</Label>
          <PillGroup options={petOptions} />
        </FieldGroup>
        <FieldGroup span2>
          <Label>Can you host guests with pet allergies / phobias?</Label>
          <RadioGroup
            name="petallergy"
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "depends", label: "Depends on severity" },
            ]}
          />
        </FieldGroup>
      </FormGrid>

      <Divider label="Amenities & Access" />
      <FieldGroup style={{ marginBottom: "1.2rem" }}>
        <Label>What can guests access?</Label>
        <PillGroup options={amenityOptions} />
      </FieldGroup>
    </div>
  );
}

// ─── Step 4 ───────────────────────────────────────────────────────────────────
const CHECKLIST_ITEMS = [
  {
    Icon: User,
    text: "Profile & identity details received",
    sub: "Verified & encrypted",
    color: C.safeGreen,
  },
  {
    Icon: ShieldCheck,
    text: "Background screening submitted",
    sub: "Under review by our team",
    color: C.accent,
  },
  {
    Icon: Home,
    text: "Safe place details & availability saved",
    sub: "Saved to your listing",
    color: C.coral,
  },
  {
    Icon: CheckCircle,
    text: "Confirmation email sent",
    sub: "Check your inbox",
    color: C.safeGreen,
  },
];

const NEXT_STEPS = [
  "Our team reviews your background check",
  "A coordinator calls to verify your space",
  "Your listing goes live — guests can request a stay",
];

// ─── Step 4 ───────────────────────────────────────────────────────────────────
function Step4() {
  return (
    <div style={{ animation: "fadeUp 0.5s ease both" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* ── Left — hero ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            animation: "fadeUp 0.45s ease both",
          }}
        >
          {/* Pulsing badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(232,114,12,0.09)",
              border: "1px solid rgba(232,114,12,0.28)",
              borderRadius: "100px",
              padding: "5px 14px",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: C.accent,
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: C.accent,
                animation: "pulseDot 2s ease infinite",
              }}
            />
            Application received
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.4rem",
              fontWeight: 900,
              color: C.deep,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            You're
            <br />
            <em style={{ fontStyle: "italic", color: C.accent }}>
              registered!
            </em>
          </div>

          {/* Body */}
          <p
            style={{
              fontSize: "0.9rem",
              color: C.muted,
              lineHeight: 1.8,
              maxWidth: "34ch",
            }}
          >
            Thank you for opening your home. Our team will review your
            application within{" "}
            <strong style={{ color: C.deep, fontWeight: 600 }}>
              2–3 business days
            </strong>{" "}
            and reach out to confirm your listing.
          </p>

          {/* What happens next */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: "0.4rem",
              }}
            >
              What happens next
            </div>
            {NEXT_STEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.82rem",
                  color: C.muted,
                  padding: "0.5rem 0",
                  borderBottom:
                    i < NEXT_STEPS.length - 1
                      ? "1px solid rgba(74,106,120,0.08)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(26,122,138,0.1)",
                    border: "1.5px solid rgba(26,122,138,0.2)",
                    color: C.safeGreen,
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — checklist card ── */}
        <div 
          style={{
            padding: "1.3rem 1.8rem 1.1rem",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#fffdf7",
              border: "1.5px solid rgba(212,134,10,0.15)",
              borderRadius: 10,
              overflow: "hidden",
              animation: "fadeUp 0.5s ease 0.1s both",
            }}
          >
            {/* Card header */}
            <div
              style={{
                padding: "1.3rem 1.8rem 1.1rem",
                borderBottom: "1px solid rgba(74,106,120,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                Application summary
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  color: C.safeGreen,
                  background: "rgba(26,122,138,0.08)",
                  border: "1px solid rgba(26,122,138,0.18)",
                  borderRadius: "100px",
                  padding: "3px 10px",
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: C.safeGreen,
                  }}
                />
                Under review
              </div>
            </div>

            {/* Rows */}
            {CHECKLIST_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  padding: "1rem 1.8rem",
                  borderBottom:
                    i < CHECKLIST_ITEMS.length - 1
                      ? "1px solid rgba(74,106,120,0.08)"
                      : "none",
                  transition: "background 0.15s",
                  animation: `fadeUp 0.35s ease ${0.15 + i * 0.07}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(232,114,12,0.025)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: item.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.Icon size={16} color={item.iconColor} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: C.deep,
                      marginBottom: 2,
                    }}
                  >
                    {item.text}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: C.muted }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ── CTAs — outside the grid, right-aligned under the card ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "0.9rem",
            }}
          >
            <a
              href="/listing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "transparent",
                color: C.muted,
                padding: "0.85rem 1.4rem",
                borderRadius: "100px",
                fontSize: "0.85rem",
                fontWeight: 500,
                border: "1.5px solid rgba(74,106,120,0.2)",
                textDecoration: "none",
                transition: "all 0.2s",
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
              View listing <ChevronRight size={14} />
            </a>
            <a
              href="/dashboard"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: C.accent,
                color: C.white,
                padding: "0.85rem 1.7rem",
                borderRadius: "100px",
                fontSize: "0.88rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "none",
                boxShadow: "0 5px 20px rgba(232,114,12,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 9px 28px rgba(232,114,12,0.42)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(232,114,12,0.3)";
              }}
            >
              <LayoutDashboard size={15} />
              Go to My Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── BtnRow ───────────────────────────────────────────────────────────────────
function BtnRow({ step, onBack, onNext, isLast }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: step > 1 ? "space-between" : "flex-end",
        alignItems: "center",
        marginTop: "2.4rem",
      }}
    >
      {step > 1 && (
        <button
          onClick={onBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "transparent",
            color: C.muted,
            padding: "0.85rem 1.5rem",
            borderRadius: "100px",
            fontSize: "0.88rem",
            fontWeight: 500,
            border: "1.5px solid rgba(74,106,120,0.25)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          <ChevronLeft size={16} /> Back
        </button>
      )}
      <button
        onClick={onNext}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: C.accent,
          color: C.white,
          padding: "0.85rem 2rem",
          borderRadius: "100px",
          fontSize: "0.9rem",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          transition: "all 0.25s",
        }}
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

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Process() {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const STEP_COMPONENTS = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return (
    <>
      <style>{fontStyle}</style>
      <div
        style={{
          minHeight: "100vh",
          padding: "7.5rem 2vw 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: C.cream,
        }}
      >
        <Stepper current={step} />
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              background: C.white,
              borderRadius: 12,
              padding: "3rem",
              boxShadow: "0 8px 8px rgba(13,43,53,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {STEP_COMPONENTS[step - 1]}
            {step < 4 && (
              <BtnRow
                step={step}
                onBack={back}
                onNext={next}
                isLast={step === 3}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
