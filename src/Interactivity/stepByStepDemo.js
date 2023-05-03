import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

const IncrementalHiddenButton = ({ stepValues, setHidden, edgeValues, setEdgeHidden, popValues, setPopHidden }) => {
  const [step, setStep] = useState(0);

  const toggleHidden = () => {
    setHidden(stepValues[step]);
    setEdgeHidden(edgeValues[step]);
    if(setPopHidden){
      setPopHidden(popValues[step])
    }
    setStep(step + 1 === stepValues.length ? 0 : step + 1);
  };

  const unHideAll = () => {
    setHidden(stepValues[stepValues.length - 2]);
    setEdgeHidden(edgeValues[stepValues.length - 2]);
    if(setPopHidden){
      setPopHidden(popValues[popValues.length - 2])
    }
    setStep(stepValues.length - 1);
  };

  return (
    <div >
      <ButtonGroup variant="contained"
        style = {{ position: "fixed", bottom: "20px", right: "20px", zIndex: 10}}>
        <Button onClick={toggleHidden} >
          { step === 0 ? "Next" : step < stepValues.length - 1? `Step ${step}`: "Start" }
        </Button>
        <Button onClick={unHideAll}>Skip</Button>
      </ButtonGroup>

    </div>
  );
}

export default IncrementalHiddenButton;
