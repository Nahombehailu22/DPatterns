import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ConvertToJava from './ConvertToJava';
import ConvertToPython from './ConvertToPython';
import DisplayCode from './Display';
import sendCodeToGPTModel from '../Assistant/ConvertLanguageAPI';
import { useEffect } from 'react';
import { Label } from '@mui/icons-material';

const ChooseCodeLanguage = ({nodes, setNodes, ClientCodePython, ClientCodeJava}) => {
    const [code, setCode] = useState('');
    const [chosenLanguage, setChosenLanguage] = useState(null);
    const [isGeneratingCode, setIsGeneratingCode] = useState(false);

    const handleLanguageChange = async (targetLanguage, javaProps) => {
      await sendCodeToGPTModel(setChosenLanguage, targetLanguage, javaProps, setIsGeneratingCode)
    };

    const handleChange =  (event) => {
      setCode(event.target.value);
      const language = event.target.value;
      const javaProps = {nodes, setNodes, ClientCodeJava}

      switch(language){
        case "python":
          setChosenLanguage(ConvertToPython(nodes,setNodes,ClientCodePython))
          break;
        case "java":
          setChosenLanguage(ConvertToJava(nodes,setNodes,ClientCodeJava))
          break;
        case "javascript":
          setChosenLanguage(null)
          setIsGeneratingCode(true)
          handleLanguageChange("javascript",{...javaProps})
          break
        case "c++":
          setChosenLanguage(null)
          setIsGeneratingCode(true)
          handleLanguageChange("c++", {...javaProps})
          break;
        case "c#":
          setChosenLanguage(null)
          setIsGeneratingCode(true)
          handleLanguageChange("c#", {...javaProps})
          break;
      }
    };

    return ( 
        <div>
            <FormControl sx={{ m: 1, minWidth: 50}}  style={{ position:"absolute", left: "1100px", right:"170px", zIndex: 10, backgroundColor: "lightblue"}}>
              <InputLabel id="demo-simple-select-label">Code</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={code}
              label="Code"
              onChange={handleChange}
              >
              <MenuItem value={"python"}>Python</MenuItem>
              <MenuItem value={"java"}>Java</MenuItem>
              <MenuItem value={"javascript"}>Javascript</MenuItem>
              <MenuItem value={"c++"}>C++</MenuItem>
              <MenuItem value={"c#"}>C#</MenuItem>

              </Select>
          </FormControl>

          {isGeneratingCode && (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress color="primary" style={{ margin: "10px" }} />
                <p style={{ color:"black" }}>Please Remain Patient As Your Code Is Generated</p>
              </div>
            )}
        {chosenLanguage != null &&
        <DisplayCode code = {chosenLanguage} />}
      </div>
     );
    
}
 
export default ChooseCodeLanguage;