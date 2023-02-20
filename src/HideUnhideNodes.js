import { useState } from "react";
export default function IncrementalHiddenButton({ hidden, setHidden }) {
    const [step, setStep] = useState(0);
  
    const toggleHidden = () => {
      if (step === 0) {
        setHidden([false, false, false, true, true, true]);
        setStep(1);
      } else if (step === 1) {
        setHidden([false, false, false, false, true, true]);
        setStep(2);
      } else if (step === 2) {
        setHidden([false, false, false, false, false, false]);
        setStep(3);
      } else {
        setHidden([false, true, true, true, true, true]);
        setStep(0);
      }
    };
  
    return (
      <div className="buttons">
        <button
          className="skip-button"
          type="button"
          onClick={toggleHidden}
          style={{
            zIndex: 10,
          }}
        >
          {step === 0 ? "Next" : step === 1 ? "Step 1" : step === 2 ? "Step 2" : "Start"}
        </button>
      </div>
    );
  }
  