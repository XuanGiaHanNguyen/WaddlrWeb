import { useState } from "react";
import { Home, Dog, Cat, Bird, Fish, Rabbit, X, Bed, ShowerHead, UtensilsCrossed, Wifi, LockKeyhole, Car, Accessibility, WashingMachine } from "lucide-react";
import { StepHeader, Divider, FormGrid, FieldGroup, Label, Input, Select, RadioGroup, CheckGroup, PillGroup, Counter } from "../components/FormComponents";
import { C } from "../tokens";

export function Step3() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [activeDays, setActiveDays] = useState([]);
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const toggleDay = (d) => setActiveDays((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  const petOptions = [
    { value: "dog",   label: "Dog",   icon: Dog   },
    { value: "cat",   label: "Cat",   icon: Cat   },
    { value: "bird",  label: "Bird",  icon: Bird  },
    { value: "fish",  label: "Fish",  icon: Fish  },
    { value: "other", label: "Other", icon: Rabbit },
    { value: "none",  label: "None",  icon: X     },
  ];
  const amenityOptions = [
    { value: "bed",        label: "Private bed",    icon: Bed           },
    { value: "bath",       label: "Own bathroom",   icon: ShowerHead    },
    { value: "kitchen",    label: "Kitchen",        icon: UtensilsCrossed },
    { value: "wifi",       label: "Wi-Fi",          icon: Wifi          },
    { value: "lock",       label: "Lockable room",  icon: LockKeyhole   },
    { value: "parking",    label: "Parking",        icon: Car           },
    { value: "wheelchair", label: "Accessible",     icon: Accessibility },
    { value: "laundry",    label: "Laundry",        icon: WashingMachine },
  ];
  const householdOptions = ["Partner / spouse", "Children under 18", "Other adults", "I live alone"];

  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <StepHeader
        eyebrow="Step 3 of 3"
        title="Your Safe Place"
        subtitle="Tell us about your home, when you're available, and who else lives there."
        Icon={Home}
      />

      <Divider label="About Your Home" />
      <FormGrid>
        <FieldGroup>
          <Label>Type of space</Label>
          <Select>
            {["Spare room in my home", "Studio / granny flat", "Entire apartment", "Sofa / living space only", "Garage / converted space"].map((o) => <option key={o}>{o}</option>)}
          </Select>
        </FieldGroup>
        <FieldGroup>
          <Label>Floor level</Label>
          <Select>
            {["Ground floor", "1st floor", "2nd floor +"].map((o) => <option key={o}>{o}</option>)}
          </Select>
        </FieldGroup>
        <FieldGroup span2>
          <Label hint="Private — never shared publicly.">Full address</Label>
          <Input placeholder="123 Maplewood Dr, Tampa, FL 33602" />
        </FieldGroup>
        <FieldGroup span2>
          <Label>Brief description of the space</Label>
          <Input placeholder="e.g. Quiet private room with lock, own bathroom, close to bus stops…" />
        </FieldGroup>
      </FormGrid>

      <Divider label="Capacity" />
      <div className="flex flex-col gap-3 mb-2">
        <Counter label="Adults"   sublabel="Max number of adult guests"       value={adults}   onChange={(d) => setAdults(Math.max(0, adults + d))}     />
        <Counter label="Children" sublabel="Can you accommodate children?"    value={children} onChange={(d) => setChildren(Math.max(0, children + d))} />
      </div>

      <Divider label="Availability" />
      <FieldGroup style={{ marginBottom: "1rem" }}>
        <Label>Days typically available</Label>
        <div className="grid grid-cols-7 gap-1.5 mt-2">
          {DAYS.map((d) => {
            const on = activeDays.includes(d);
            return (
              <button
                key={d}
                onClick={() => toggleDay(d)}
                className="py-2 px-0.5 rounded-[10px] text-[0.72rem] font-semibold cursor-pointer transition-all duration-200 text-center border-none"
                style={{
                  border: `1.5px solid ${on ? C.safeGreen : "rgba(74,106,120,0.2)"}`,
                  background: on ? C.safeGreen : "transparent",
                  color: on ? C.white : C.muted,
                }}
              >
                {d}
              </button>
            );
          })}
        </div>
      </FieldGroup>
      <FormGrid>
        <FieldGroup><Label>Available from</Label><Input placeholder="e.g. 07:00" /></FieldGroup>
        <FieldGroup><Label>Available until</Label><Input placeholder="e.g. 22:00" /></FieldGroup>
        <FieldGroup span2>
          <Label>Notice required before a guest arrives</Label>
          <Select>
            {["Immediately (I'm on-call)", "30 minutes", "1 hour", "2–4 hours", "Same day", "24 hours"].map((o) => <option key={o}>{o}</option>)}
          </Select>
        </FieldGroup>
      </FormGrid>

      <Divider label="Household & Pets" />
      <FormGrid>
        <FieldGroup><Label>Who else lives in the home?</Label><CheckGroup options={householdOptions} /></FieldGroup>
        <FieldGroup><Label>Pets in the home</Label><PillGroup options={petOptions} /></FieldGroup>
        <FieldGroup span2>
          <Label>Can you host guests with pet allergies / phobias?</Label>
          <RadioGroup name="petallergy" options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "depends", label: "Depends on severity" }]} />
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
