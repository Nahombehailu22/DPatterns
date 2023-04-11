import { useState } from "react";

const IncrementalHiddenButton = ({ hidden, setHidden }) => {
    const [step, setStep] = useState(0);
  
    const toggleHidden = () => {
      switch (step) {
        case 0:
          setHidden([false, false, false]);
          setStep(1);
          break
        case 1:
          setHidden([false, true, false]);
          setStep(0);
          break
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
  
  export default IncrementalHiddenButton;