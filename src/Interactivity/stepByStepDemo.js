import React, { useState } from "react";

const IncrementalHiddenButton = ({ stepValues, setHidden, edgeValues, setEdgeHidden }) => {
  const [step, setStep] = useState(0);

  const toggleHidden = () => {
    setHidden(stepValues[step]);
    setEdgeHidden(edgeValues[step]);
    setStep(step + 1 === stepValues.length ? 0 : step + 1);
  };

  const unHideAll = () => {
    setHidden(stepValues[stepValues.length - 2]);
    setEdgeHidden(edgeValues[stepValues.length - 2]);
    setStep(stepValues.length - 1);
  };

  return (
    <div className="buttons">
      <button className="next-button" type="button" onClick={toggleHidden}>
        { step === 0 ? "Next" : step < stepValues.length - 1? `Step ${step}`: "Start" }
      </button>

      <button className="skip-button" type="button" onClick={unHideAll}>
       Skip
      </button>
    </div>
  );
}

export default IncrementalHiddenButton;
