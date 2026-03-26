import { useState } from "react";
import { fontStyle } from "./tokens";
import { Stepper } from "./components/NavigationComponents";
import { BtnRow } from "./components/NavigationComponents";
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
      <div className="min-h-screen flex flex-col items-center pt-30 px-8 pb-8" style={{ background: '#FFF9F0' }}>
        {/* Stepper */}
        <Stepper current={step} />

        {/* Step Container */}
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="bg-white rounded-xl p-12 shadow-md relative overflow-hidden">
            {/* Current Step */}
            {STEP_COMPONENTS[step - 1]}

            {/* Buttons */}
            {step < 4 && (
              <BtnRow step={step} onBack={back} onNext={next} isLast={step === 3} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}