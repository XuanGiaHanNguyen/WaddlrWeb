import { useState } from "react";
import { fontStyle } from "./tokens";
import { C } from "./tokens";
import { Stepper } from "./components/Stepper";
import { BtnRow } from "./components/BtnRow";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";

export default function Process() {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const STEP_COMPONENTS = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return (
    <>
      <style>{fontStyle}</style>
      <div style={{ minHeight: "100vh", padding: "7.5rem 2vw 2rem", display: "flex", flexDirection: "column", alignItems: "center", background: C.cream }}>
        <Stepper current={step} />
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: C.white, borderRadius: 12, padding: "3rem", boxShadow: "0 8px 8px rgba(13,43,53,0.1)", position: "relative", overflow: "hidden" }}>
            {STEP_COMPONENTS[step - 1]}
            {step < 4 && <BtnRow step={step} onBack={back} onNext={next} isLast={step === 3} />}
          </div>
        </div>
      </div>
    </>
  );
}