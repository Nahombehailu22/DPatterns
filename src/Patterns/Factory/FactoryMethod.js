import React, { useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls } from 'reactflow';
import { useParams, Link  } from "react-router-dom";

import { AddNodes } from './AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './factoryMethodInit';
import { findMissingID, handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleNodeDelete} from '../../Interactivity/generalUtilities';
import { updateNodeMethods } from '../../Interactivity/factoryMethodUtilities';
import { stepValues, edgeValues, popValues } from './DemoSteps';
import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';
import { concreteCreatorCode, productCode } from './nodeCodes';
import { updateNodes } from '../../Interactivity/updateNodes';
import initialize from './initializeValues';
import { Button } from '@mui/material';
import ConvertToJava from '../../ConvertToCode/ConvertToJava';

const fitViewOptions = {
  padding: 0.4,
};

const FactoryMethod = () => {
  const {type} = useParams();
  const [pageType, setPageType] = useState("example");
  const initialValues = {initialNodes, initialEdges}
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const [popHidden, setPopHidden] = useState(popValues[popValues.length - 1])
  const demoProps = {stepValues, setHidden, edgeValues, setEdgeHidden, popValues, setPopHidden};

  const [convert,setConvert] = useState(false)

  useEffect(() => { 
    initialize(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type,initialValues)
  },[type]);
  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden)});

  const handleChanges = (type, id, event, index) => {
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
      case "deleteNode":
        handleNodeDelete(id, nodes, edges, setNodes, setEdges)
        handleNodeDelete(id+"a", nodes, edges, setNodes, setEdges)
        handleNodeDelete(id+"b", nodes, edges, setNodes, setEdges)
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        updateNodeMethods(nodes,setNodes)
        break;
      case "addClass":
        const nums = nodes.filter(node => !isNaN(node.id)).map(node => parseInt(node.id));      
        const newID = findMissingID(nums) 

        AddNodes({setNodes, setEdges, setHidden, setEdgeHidden, newID})
        updateNodeMethods(nodes,setNodes)
        break;

      default:
        break;

    }
  };

  const codeWritten = (connectingID, id) => {
    switch(id){
      case '0b':
        return (<div>{productCode(nodes)}</div>)
      default:
        return (<div>{concreteCreatorCode(nodes, connectingID)}</div>)
    }
  }
  
  return (
    <div className="wrapper" style={{ height: 800 }} >
        <Link to={`/factorymethod/${pageType}`} target="_blank">
          <Button variant="contained" style={{ position:"fixed",  right:"20px", zIndex: 10}}
            onClick={() => {
              if(pageType === "demonstration"){ setPageType("example")}
              else{setPageType("demonstration")}
            }}
          >
            {type === "demonstration" ? "Example" : "Demo"}
          </Button>
        </Link>
      <IncrementalHiddenButton {...demoProps} />
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
        <Button variant="contained" 
          style={{ position:"absolute", bottom:"-70px", right:"800px", zIndex: 10}}
          onClick={() => {
            setConvert(!convert)}
            }> 
            {!convert? "Show Code":"Hide Code"}
        </Button>
        {convert && (
          <ConvertToJava nodes={nodes} />
        )}
    </div>
  );
};

export default FactoryMethod;
