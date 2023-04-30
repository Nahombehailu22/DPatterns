import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';
import { useParams, Link  } from "react-router-dom";

import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';

import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../../Interactivity/generalUtilities';
import { stepValues, edgeValues } from './DemoSteps';

import { adapterCode } from './nodeCodes';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AdapterMethodInit';
import { updateNodes } from '../../Interactivity/updateNodes';
import initialize from './initializeValues';
import { Button } from '@mui/material';
import { updateNodeMethods } from '../../Interactivity/adapterMethodUtilities';

const fitViewOptions = {
  padding: 0.5,
};

const AdapterMethod = (props) => {
  const {type} = useParams();
  const [pageType, setPageType] = useState(type === "demonstration"? "demonstration": "example");
  const initialValues = {initialNodes, initialEdges}
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [false, false];

  useEffect(() => { 
    initialize(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type,initialValues)
  },[type]);
  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden)});
  
  const handleChanges = useCallback((type, id, event, index) => {
      switch(type){
        case "className":
          handleClassNameChange(id, event, nodes, setNodes)
          break;
        case "addMethod":
          handleAddMethod(id, nodes, setNodes)
          break;
        case "deleteMethod":
          handleDeleteMethod(id, index, nodes, setNodes)
          break;
        case "changeMethodName":
          handleMethodNameChange(id, index, event, nodes, setNodes)
          updateNodeMethods(nodes,setNodes)  
          break;
        case "attributeName":
          handleAttributeNameChange(id, index, event, nodes, setNodes)
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
      <Link to={`/adaptermethod/${pageType}`} target="_blank">
        <Button variant="contained" style={{ position:"fixed",  right:"20px", zIndex: 10}}
          onClick={() => {
            if(pageType === "demonstration"){ setPageType("example")}
            else{setPageType("demonstration")}
          }}
        >
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
    </div>
  );
};

export default AdapterMethod;


