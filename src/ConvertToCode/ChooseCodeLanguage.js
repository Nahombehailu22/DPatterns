import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ConvertToJava from './ConvertToJava';
import ConvertToPython from './ConvertToPython';
import DisplayCode from './Display';
import sendCodeToGPTModel from '../Assistant/ConvertLanguageAPI';
import { useEffect } from 'react';

const ChooseCodeLanguage = ({nodes, setNodes, ClientCodePython, ClientCodeJava}) => {
    const [code, setCode] = useState('');
    const [chosenLanguage, setChosenLanguage] = useState(null);
    const [javaCode, setJavaCode] = useState(null);

    const handleLanguageChange = async (targetLanguage) => {
      await sendCodeToGPTModel(javaCode, setChosenLanguage, targetLanguage)
    };

    const handleChange =  (event) => {
      setCode(event.target.value);
      const language = event.target.value;

      switch(language){
        case "python":
          setChosenLanguage(ConvertToPython(nodes,setNodes,ClientCodePython))
          break;
        case "java":
          setChosenLanguage(ConvertToJava(nodes,setNodes,ClientCodeJava))
          break;
        case "javascript":
          setJavaCode(ConvertToJava(nodes, setNodes, ClientCodeJava))
          setChosenLanguage(null)
          handleLanguageChange("javascript")
          break
        case "c++":
          setJavaCode(ConvertToJava(nodes, setNodes, ClientCodeJava))
          setChosenLanguage(null)
          handleLanguageChange("c++")
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

              </Select>
          </FormControl>

        {chosenLanguage != null &&
        <DisplayCode code = {chosenLanguage} />}
      </div>
     );
    
}
 
export default ChooseCodeLanguage;