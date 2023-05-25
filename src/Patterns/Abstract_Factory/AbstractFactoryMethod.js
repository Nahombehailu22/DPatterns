import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';
import { useParams, Link  } from "react-router-dom";

import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';
import { AddNodes } from './AddNode';
import { handleAddMethod, handleNodeDelete, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange, findMissingID} from '../../Interactivity/generalUtilities';
import { edgeValues, popValues, stepValues } from './DemoSteps';
import { concreteFactoryCode, productCode } from './nodeCodes';
import { updateNodeMethods } from '../../Interactivity/abstractFactoryUtilities';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import { updateNodes } from '../../Interactivity/updateNodes';

import initialize from './initializeValues';
import { Button } from '@mui/material';
import { ClientCodePython } from '../../ConvertToCode/PatternsClientCode/AbstractFactoryMethod/clientCodePython';
import { ClientCodeJava } from '../../ConvertToCode/PatternsClientCode/AbstractFactoryMethod/clientCodeJava';
import ChooseCodeLanguage from '../../ConvertToCode/ChooseCodeLanguage';
import { AddNodeFactory } from './AddNodeFactory';
import { AdditionalInfoPop } from '../../Interactivity/additionalInfo';
import FurnitureFactoryModal from './ExampleDescription';

const fitViewOptions = {
  padding: 0.3,
};

const AbstractFactoryMethod = () => {
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

  useEffect(() => { 
    initialize(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type, initialValues)
    updateNodeMethods(nodes, setNodes)
  },[type]);
  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden)
    updateNodeMethods(nodes, setNodes)
  },[nodes]);
  
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
          const factoryNodes = nodes.filter(node => !isNaN(node.id) && node.id != "0b1" && node.id != "0").map(node => parseInt(node.id));

          handleAddMethod(id, nodes, setNodes, "createProduct", newID)
          AddNodes({ setNodes, setEdges, setHidden, setEdgeHidden, nextID, factoryNodes })

          if(showAgain){
          setInfoDisplayed(true)
          setDisplayInfo(addAbstractMethod)
          }
        }
        else {
          handleAddMethod(id, nodes, setNodes, "newMethod")
        }
  
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        if (id == '0'){
          const methodIDs = nodes.find(node => node.id === "0").data.methods
          .map(method => method.id.toLowerCase())

          handleNodeDelete("0" + methodId.toLowerCase(), nodes, edges, setNodes, setEdges)
          for (let i = 0; i < methodIDs.length; i++){
            handleNodeDelete("0" + methodId.toLowerCase()+i, nodes, edges, setNodes, setEdges)     
          }
        }
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        break;
      case "attributeName":
        handleAttributeNameChange(id, index, event, nodes, setNodes)
        break;
      case "addClass":
        const nums = nodes.filter(node => !isNaN(node.id) && node.id != "0b1").map(node => parseInt(node.id));      
        const newID = findMissingID(nums) 
        
        const methodIDs = nodes.find(node => node.id === "0").data.methods
        .map(method => method.id)

        AddNodeFactory({setNodes, setEdges, setHidden, setEdgeHidden, newID, methodIDs})
        if(showAgain){
        setInfoDisplayed(true)
        setDisplayInfo(addConcreteFactory)
        }
        break;

      case "deleteNode":
        handleNodeDelete(id, nodes, edges, setNodes, setEdges)

        const methodIDs_delete = nodes.find(node => node.id === "0").data.methods
        .map(method => method.id.toLowerCase())
      
        for(let i = 0; i < methodIDs_delete.length; i++){
          console.log(methodIDs_delete[i])
          handleNodeDelete("0"+methodIDs_delete[i]+id, nodes, edges, setNodes, setEdges)
        }
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



  const addConcreteFactory =
  `
  When a new concrete factory class is added in the Abstract Factory design pattern, concrete classes implementing the existing abstract product interfaces are created. 
  The concrete factories are responsible for instantiating the concrete product classes that implement these interfaces. 
  By adding a new concrete factory, it must implement all the methods defined in the abstract factory interface. 
  This implementation includes creating instances of the existing abstract product interfaces, ensuring that the new factory produces products that adhere to the predefined interface. 
  The creation of concrete classes associated with the preexisting abstract product interfaces enables the new factory to produce compatible products within the designated family. 
  This allows clients to interact with the products through the abstract factory interface, promoting flexibility and avoiding direct dependencies on concrete implementations.
  `

  const addAbstractMethod = 
  `
  When a new method is added to the AbstractFactory class, 
  it triggers the creation of a new abstract product along with its implementations by the Concrete Factories.
  The reason behind creating an abstract product when a new method is added to the AbstractFactory is to extend the range of products that can be created by the factory. 
  The Abstract Factory pattern provides an interface for creating families of related objects, where each family corresponds to a specific implementation or variation. 
  Each method in the AbstractFactory represents a different family or category of products.

  By adding a new method to the AbstractFactory, a new abstract product is defined, 
  representing a new type of product that can be created within the factory. 
  This abstract product serves as a blueprint or contract that any concrete product within that family must adhere to. 
  It defines the common interface or set of operations that the concrete products associated with the Concrete Factories must implement.
  `

  return (
    <div className="wrapper" style={{ height: 800 }}>
      {type === "example" && <FurnitureFactoryModal/>}
      {infoDisplayed && <AdditionalInfoPop infoDisplayed={infoDisplayed} setInfoDisplayed= {setInfoDisplayed} setShowAgain={setShowAgain} info={displayInfo}/>}
      <Link to={`/abstractfactorymethod/${type === "demonstration"? "example": "demonstration"}` } target="_blank" >
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

export default AbstractFactoryMethod;
