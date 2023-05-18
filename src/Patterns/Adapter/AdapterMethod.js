import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';
import { useParams, Link  } from "react-router-dom";

import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';

import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange, handleParameterChange} from '../../Interactivity/generalUtilities';
import { stepValues, edgeValues } from './DemoSteps';

import { adapterCode } from './nodeCodes';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AdapterMethodInit';
import { updateNodes } from '../../Interactivity/updateNodes';
import initialize from './initializeValues';
import { Button } from '@mui/material';
import { updateNodeMethods } from '../../Interactivity/adapterMethodUtilities';
import ChooseCodeLanguage from '../../ConvertToCode/ChooseCodeLanguage';
import { ClientCodeJava } from '../../ConvertToCode/PatternsClientCode/AdapterMethod/clientCodeJava';
import { ClientCodePython } from '../../ConvertToCode/PatternsClientCode/AdapterMethod/clientCodePython';
import DrawingEditorModal from './ExampleDescription';

const fitViewOptions = {
  padding: 0.5,
};

const AdapterMethod = (props) => {
  const {type} = useParams();
  const initialValues = {initialNodes, initialEdges}
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [false, false];

  useEffect(() => { 
    initialize(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type, initialValues)
  },[type]);
  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden)
    updateNodeMethods(nodes,setNodes)
  },[nodes]);
  
  const handleChanges = useCallback((type, id, event, index, idParam) => {
      switch(type){
        case "className":
          handleClassNameChange(id, event, nodes, setNodes)
          break;
        case "addMethod":
          handleAddMethod(id, nodes, setNodes)
          updateNodeMethods(nodes,setNodes)
          break;
        case "deleteMethod":
          handleDeleteMethod(id, index, nodes, setNodes)
          updateNodeMethods(nodes,setNodes)
          break;
        case "changeMethodName":
          handleMethodNameChange(id, index, event, nodes, setNodes)
          updateNodeMethods(nodes,setNodes)  
          break;
        case "attributeName":
          handleAttributeNameChange(id, index, event, nodes, setNodes)
          break;
        case "changeParameter":
          handleParameterChange(id, index, idParam, event, nodes, setNodes)
          updateNodeMethods(nodes,setNodes)
          break;
        default:
          break;
      }
  
  }, []);

  const codeWritten = (connectingID, id) => {
    return(<div>{adapterCode(nodes)}</div>)
  }

 
  return (
    <div className="wrapper" style={{ height: 800 }}>
      {type === "example" && <DrawingEditorModal /> }
      <Link to={`/adaptermethod/${type === "demonstration"? "example": "demonstration"}` } target="_blank" >
        <Button variant="contained" style={{ position:"fixed",  right:"20px", zIndex: 10}}>
          {type === "demonstration" ? "Example" : "Demo"}
        </Button>
      </Link>
      <IncrementalHiddenButton stepValues={stepValues} setHidden={setHidden} edgeValues={edgeValues} setEdgeHidden={setEdgeHidden}/>
      <Controls className="controls" style={{position: "fixed", bottom: "0", left: "0"}} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={fitViewOptions}
      />
      <ChooseCodeLanguage 
        nodes={nodes} 
        setNodes ={setNodes} 
        ClientCodePython={ClientCodePython}
        ClientCodeJava={ClientCodeJava} 
      />
    </div>
  );
};

export default AdapterMethod;


