import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ConvertToJava from './ConvertToJava';
import ConvertToPython from './ConvertToPython';

const ChooseCodeLanguage = ({nodes, setNodes, ClientCodePython, ClientCodeJava}) => {
    const [code, setCode] = useState('');

    const handleChange = (event) => {
      setCode(event.target.value);
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
            </Select>
        </FormControl>
    
        {code === "python"? 
            <ConvertToPython nodes={nodes} setNodes={setNodes} clientCode={ClientCodePython} />: 
            code === "java" ? 
            <ConvertToJava nodes={nodes} setNodes={setNodes} clientCode={ClientCodeJava} />
                : null
        }
      </div>
     );
}
 
export default ChooseCodeLanguage;