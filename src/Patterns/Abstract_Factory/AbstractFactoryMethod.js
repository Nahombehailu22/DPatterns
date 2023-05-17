import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';
import { useParams, Link  } from "react-router-dom";

import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';
import { AddNodes } from './AddNode';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange, findMissingID} from '../../Interactivity/generalUtilities';
import { edgeValues, stepValues } from './DemoSteps';
import { concreteFactoryCode, productCode } from './nodeCodes';
import { handleNodeDelete, updateNodeMethods } from '../../Interactivity/abstractFactoryUtilities';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import { updateNodes } from '../../Interactivity/updateNodes';

import initialize from './initializeValues';
import { Button } from '@mui/material';
import ConvertToJava from '../../ConvertToCode/ConvertToJava';
import { ClientCodePython } from '../../ConvertToCode/PatternsClientCode/AbstractFactoryMethod/clientCodePython';
import { ClientCodeJava } from '../../ConvertToCode/PatternsClientCode/AbstractFactoryMethod/clientCodeJava';
import ConvertToPython from '../../ConvertToCode/ConvertToPython';
import ChooseCodeLanguage from '../../ConvertToCode/ChooseCodeLanguage';

const fitViewOptions = {
  padding: 0.3,
};

const AbstractFactoryMethod = () => {
  const {type} = useParams();
  const [pageType, setPageType] = useState("example");
  const initialValues = {initialNodes, initialEdges}
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [true, true, true, true, true, true];

  const [convert,setConvert] = useState(false)

  useEffect(() => { 
    initialize(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type,initialValues)
    updateNodeMethods(nodes, setNodes)
  },[type]);
  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden)
    updateNodeMethods(nodes, setNodes)
  });
  
  const handleChanges = (type, id, event, index, methodId) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
      
        if (id == '0'){
          const nums = nodes.find(node => node.id === id).data.methods
          .map(method => method.id.charCodeAt() - 65)
  
          const nextID = findMissingID(nums) + 65
          const newID = String.fromCharCode(nextID)

          handleAddMethod(id, nodes, setNodes, "createProduct", newID)
          handleAddMethod("1", nodes, setNodes, "createProduct", newID)
          handleAddMethod("2", nodes, setNodes, "createProduct", newID)

          AddNodes({ setNodes, setEdges, setHidden, setEdgeHidden, nextID })
        }
        else {
          handleAddMethod(id, nodes, setNodes, "newMethod")
        }
        
 
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        if (id == '0'){
        handleNodeDelete(index, nodes, edges, setNodes, setEdges, methodId)
        }
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        break;
      case "attributeName":
        handleAttributeNameChange(id, index, event, nodes, setNodes)
        break;

      default:
        break;
    }
  };

  const codeWritten = (connectedID, id) => {
    switch(id){
      case "c1":
        return (<div>{productCode(nodes)}</div>);
      default:
        return (<div>{concreteFactoryCode(nodes, connectedID)}</div>);
    }
  }

  return (
    <div className="wrapper" style={{ height: 800 }}>
      <Link to={`/abstractfactorymethod/${pageType}`} >
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
      <ChooseCodeLanguage 
        nodes={nodes} 
        setNodes ={setNodes} 
        ClientCodePython={ClientCodePython}
        ClientCodeJava={ClientCodeJava} 
      />
    </div>
  );
};

export default AbstractFactoryMethod;
