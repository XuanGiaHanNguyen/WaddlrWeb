import { ShieldCheck } from "lucide-react";
import { StepHeader, Divider, FormGrid, FieldGroup, Label, Input, Textarea, RadioGroup, InfoBox } from "../components/FormComponents";

export function Step2() {
  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <StepHeader
        eyebrow="Step 2 of 3"
        title="Background Check"
        subtitle="Honest answers keep everyone safe. All responses are fully confidential."
        Icon={ShieldCheck}
      />

      <InfoBox variant="teal">
        To keep the community safe, you will be asked to provide proof of everything said here.
      </InfoBox>

      <Divider label="Substance Use" />
      <div className="flex flex-col gap-5">
        <FieldGroup>
          <Label>Have you used illegal substances in the past 12 months?</Label>
          <RadioGroup name="drugs" options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }, { value: "na", label: "Prefer not to say" }]} />
        </FieldGroup>
        <FieldGroup>
          <Label>Are you currently in recovery or a support programme?</Label>
          <RadioGroup name="recovery" options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }, { value: "na", label: "Not applicable" }]} />
        </FieldGroup>
        <FieldGroup>
          <Label>Do you consume alcohol regularly in your home?</Label>
          <RadioGroup name="alcohol" options={[{ value: "no", label: "No" }, { value: "occasionally", label: "Occasionally" }, { value: "yes", label: "Regularly" }]} />
        </FieldGroup>
      </div>

      <Divider label="Safety & Legal" />
      <div className="flex flex-col gap-5">
        <FieldGroup>
          <Label>Have you ever been convicted of a violent offence?</Label>
          <RadioGroup name="violent" options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes — details required below" }]} />
        </FieldGroup>
        <FieldGroup>
          <Label>Have you ever been issued a restraining / protective order?</Label>
          <RadioGroup name="restraining" options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes — details required below" }]} />
        </FieldGroup>
        <FieldGroup>
          <Label>Any legal reasons you cannot have visitors at your home?</Label>
          <RadioGroup name="legal" options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
        </FieldGroup>
        <FieldGroup>
          <Label>
            Additional context{" "}
            <span className="font-normal normal-case text-[0.72rem]">(if you answered Yes above)</span>
          </Label>
          <Textarea placeholder="Please provide context for any 'Yes' answers. Reviewed privately by our team." />
        </FieldGroup>
      </div>

      <Divider label="Mental Health & Wellbeing" />
      <FieldGroup>
        <Label>Any mental health conditions our team should know about when matching guests?</Label>
        <RadioGroup name="mental" options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes — optional note above" }, { value: "na", label: "Prefer not to say" }]} />
      </FieldGroup>

      <Divider label="References" />
      <FormGrid>
        <FieldGroup><Label>Reference 1 — Name</Label><Input placeholder="Full name" /></FieldGroup>
        <FieldGroup><Label>Reference 1 — Contact</Label><Input placeholder="Phone or email" /></FieldGroup>
        <FieldGroup><Label>Reference 2 — Name</Label><Input placeholder="Full name" /></FieldGroup>
        <FieldGroup><Label>Reference 2 — Contact</Label><Input placeholder="Phone or email" /></FieldGroup>
      </FormGrid>
    </div>
  );
}
