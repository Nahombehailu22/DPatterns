import { useState } from "react";
export default function IncrementalHiddenButton({ hidden, setHidden }) {
    const [step, setStep] = useState(0);
  
    const toggleHidden = () => {
      if (step === 0) {
        setHidden([false, false]);
        setStep(1);
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
          {step === 0 ? "Next" : "Start"}
        </button>
      </div>
    );
  }
  