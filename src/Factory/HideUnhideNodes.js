import React, { useState } from "react";
import '../Buttons.css';

const IncrementalHiddenButton = ({ hidden, setHidden }) => {
  const [step, setStep] = useState(0);

  const toggleHidden = () => {
    switch (step) {
      case 0:
        setHidden([false, false, false, true, true, true, false, false, false]);
        setStep(1);
        break;
      case 1:
        setHidden([false, false, false, false, true, true, false, false, false]);
        setStep(2);
        break;
      case 2:
        setHidden([false, false, false, false, false, false, false, false, false]);
        setStep(3);
        break;
      default:
        setHidden([false, true, true, true, true, true, false, true, true]);
        setStep(0);
        break;
    }
  };

  const unHideAll = () => {
    setHidden([false, false, false, false, false, false, false, false, false]);
    setStep(3);
  };

  return (
    <div className="buttons">
      <button className="next-button" type="button" onClick={toggleHidden}>
        {
          step === 0 ? "Next" :
          step === 1 ? "Step 1" :
          step === 2 ? "Step 2" :
          "Start"
        }
      </button>

      <button className="skip-button" type="button" onClick={unHideAll}>
       Skip
      </button>
    </div>
  );
}

export default IncrementalHiddenButton;
