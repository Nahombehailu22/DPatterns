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

import { ClientCodeJava } from '../../ConvertToCode/PatternsClientCode/FactoryMethod/clientCodeJava';
import { ClientCodePython } from '../../ConvertToCode/PatternsClientCode/FactoryMethod/clientCodePython';
import ChooseCodeLanguage from '../../ConvertToCode/ChooseCodeLanguage';
import { AdditionalInfoPop } from '../../Interactivity/additionalInfo';
import LogisticsFactoryModal from './ExampleDescription';

const fitViewOptions = {
  padding: 0.4,
};

const FactoryMethod = () => {
  const {type} = useParams();
  const initialValues = {initialNodes, initialEdges}
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const [popHidden, setPopHidden] = useState(popValues[popValues.length - 1])
  const demoProps = {stepValues, setHidden, edgeValues, setEdgeHidden, popValues, setPopHidden};

  const [infoDisplayed, setInfoDisplayed] = useState(false)
  const [displayInfo, setDisplayInfo] = useState(null)
  const [showAgain, setShowAgain] = useState(true)
  

  const createConcreteInfo = 
  `When a concrete class is added, it triggers the creation of a concrete product associated with that class. 
  The concrete class represents a specific implementation or type, while the concrete product represents an object that the class produces.
  The reason behind creating a concrete product alongside the concrete class lies in the separation of responsibilities and the flexibility it offers. 
  By associating a product with a class, the Factory design pattern encapsulates the creation process within the factory, 
  allowing the client code to interact with the abstract factory or factory method without being aware of the specific product creation details.`;



  useEffect(() => { 
    initialize(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type,initialValues)
    updateNodeMethods(nodes,setNodes)
  },[type]);
  useEffect(() => { 
    updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden)
    updateNodeMethods(nodes,setNodes)
  });

  const handleChanges = (type, id, event, index) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
        if (id === "0a"){ handleAddMethod(id, nodes, setNodes, "interfaceMethod")}
        else{ handleAddMethod(id, nodes, setNodes, "newMethod")}

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
        break;
      case "addClass": {
        const nums = nodes.filter(node => !isNaN(node.id)).map(node => parseInt(node.id));      
        const newID = findMissingID(nums);
        AddNodes({setNodes, setEdges, setHidden, setEdgeHidden, newID});
        if (showAgain){
        setInfoDisplayed(true)
        setDisplayInfo(createConcreteInfo)
        }
      }
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
      {type === "example" && <LogisticsFactoryModal/>}
      {infoDisplayed && <AdditionalInfoPop infoDisplayed={infoDisplayed} setInfoDisplayed= {setInfoDisplayed} setShowAgain={setShowAgain} info={displayInfo}/>}
      <Link to={`/factorymethod/${type === "demonstration"? "example": "demonstration"}` } target="_blank" >
        <Button variant="contained" style={{ position:"fixed",  right:"20px", zIndex: 10}}>
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
      <ChooseCodeLanguage 
        nodes={nodes} 
        setNodes ={setNodes} 
        ClientCodePython={ClientCodePython}
        ClientCodeJava={ClientCodeJava} 
      />
    </div>
  );
};

export default FactoryMethod;
