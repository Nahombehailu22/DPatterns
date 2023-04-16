import React, { useState } from "react";

const IncrementalHiddenButton = ({ setHidden, setEdgeHidden }) => {
  const [step, setStep] = useState(0);

  const toggleHidden = () => {
    switch (step) {
      case 0:
        setHidden([false, false, false, true, true, true, true, true, true, true]);
        setEdgeHidden([false, false, true, true, true, true, true, true, true, true, true]);
        setStep(1);
        break;
      case 1:
        setHidden([false, false, false, false, true, true, true, true, true, true]);
        setEdgeHidden([false, false, false, true, true, true, true, true, true, true, true]);
        setStep(2);
        break;
      case 2:
        setHidden([false, false, false, false, true, false, false, true, false, false]);
        setEdgeHidden([false, false, false, false, false, false, false, true, true, true, true]);
        setStep(3);
        break;
      case 3:
        setHidden([false, false, false, false, false, false, false, false, false, false]);
        setEdgeHidden([false, false, false, false, false, false, false, false, false, false, false]);
        setStep(4);
        break;
      default:
        setHidden([false, true, true, true, true, true, true, true, true, true]);
        setEdgeHidden([true, true, true, true, true, true, true, true, true, true, true]);
        setStep(0);
        break;
    }
  };

  const unHideAll = () => {
    setHidden([false, false, false, false, false, false, false, false, false, false]);
    setEdgeHidden([false, false, false, false, false, false, false, false, false, false, false]);
    setStep(4);
  };

  return (
    <div className="buttons">
      <button className="next-button" type="button" onClick={toggleHidden}>
        {
          step === 0 ? "Next" :
          step === 1 ? "Step 1" :
          step === 2 ? "Step 2" :
          step === 3 ? "Step 3" :
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
