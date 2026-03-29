import { useState } from "react";
import { User } from "lucide-react";
import { StepHeader, Divider, FormGrid, FieldGroup, Label, Input, Select, Textarea } from "../components/FormComponents";

export function Step1() {
  const [mode, setMode] = useState("existing");

  return (
    <div className="px-2 py-1" style={{ animation: "fadeUp 0.4s ease both" }}>
      <StepHeader
        eyebrow="Step 1 of 4"
        title="Your Profile"
        subtitle="Tell us a bit about yourself."
        Icon={User}
      />

      {/* Toggle */}
      <div className="flex rounded-xl overflow-hidden mb-7 border border-slate-200">
        {[["existing", "I have an account"], ["new", "Create account"]].map(([key, lbl]) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`flex-1 py-3 text-center text-sm font-semibold cursor-pointer border-none transition-all duration-200 ${
              mode === key
                ? "bg-orange-500 text-white"
                : "bg-slate-50 text-slate-500 hover:bg-slate-100"
            }`}
          >
            {lbl}
          </button>
        ))}
      </div>

      {mode === "existing" ? (
        <FormGrid>
          <FieldGroup><Label>Email address</Label><Input type="email" placeholder="you@example.com" /></FieldGroup>
          <FieldGroup><Label>Password</Label><Input type="password" placeholder="••••••••" /></FieldGroup>
        </FormGrid>
      ) : (
        <FormGrid>
          <FieldGroup><Label>First name</Label><Input placeholder="Jordan" /></FieldGroup>
          <FieldGroup><Label>Last name</Label><Input placeholder="Smith" /></FieldGroup>
          <FieldGroup><Label>Email address</Label><Input type="email" placeholder="you@example.com" /></FieldGroup>
          <FieldGroup><Label>Phone number</Label><Input type="tel" placeholder="+1 (555) 000-0000" /></FieldGroup>
          <FieldGroup><Label>Create password</Label><Input type="password" placeholder="••••••••" /></FieldGroup>
          <FieldGroup><Label>Confirm password</Label><Input type="password" placeholder="••••••••" /></FieldGroup>
        </FormGrid>
      )}

      <Divider label="Personal Details" />

      <FormGrid>
        <FieldGroup><Label>Date of birth</Label><Input placeholder="MM / DD / YYYY" /></FieldGroup>
        <FieldGroup>
          <Label>Gender identity</Label>
          <Select>
            <option>Select…</option>
            {["Woman", "Man", "Non-binary", "Prefer not to say", "Prefer to self-describe"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </FieldGroup>
        <FieldGroup>
          <Label>Occupation</Label>
          <Select>
            <option>Select…</option>
            {["Healthcare Worker", "Social Worker", "Educator", "Retired", "Student", "Self-employed", "Other"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </FieldGroup>
        <FieldGroup><Label>Languages spoken</Label><Input placeholder="e.g. English, Spanish" /></FieldGroup>
        <FieldGroup span2>
          <Label hint="We only display approximate area, never your exact address.">
            City / Neighbourhood
          </Label>
          <Input placeholder="e.g. East Tampa, FL" />
        </FieldGroup>
        <FieldGroup span2>
          <Label>
            Why do you want to host?{" "}
            <span className="font-normal normal-case text-[0.72rem] text-slate-400">(optional)</span>
          </Label>
          <Textarea placeholder="A few words about your motivation…" />
        </FieldGroup>
      </FormGrid>
    </div>
  );
}