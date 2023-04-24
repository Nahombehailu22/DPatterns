import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls } from 'reactflow';

import '../Patterns_CSS/index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import { AddNodes, AddNodesAbs, AddNodesImp } from './AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './BridgeMethodInit';
import { findMissingID, handleAddMethod, handleAttributeNameChange, handleClassNameChange, handleDeleteMethod, handleMethodNameChange} from '../Interactivity/generalUtilities';
import { stepValues, edgeValues } from './DemoSteps';
import IncrementalHiddenButton from '../Interactivity/stepByStepDemo';
import { handleNodeDelete, updateNodeMethods } from '../Interactivity/bridgeMethodUtilities';

const fitViewOptions = {
  padding: 0.4,
};

const BridgeMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [false, true, false, false, false, true];

  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: node.id === '0b' ? implementationCode: refinedAbstractionCode,
          pop: popHidden[i],
          
        },
        hidden: hidden[i]
      };
    }));
  
    setEdges(eds => eds.map((edge, i) => {
      return {
        ...edge,
        hidden: edgeHidden[i]
      };
    }), []);
  });

  const implementationCode = () => {
    const impNode =  nodes.find(node =>(node.id === "0"))
    const imp = impNode.data.attributes.find(attribute => attribute.id === "1").name;

    const interfaceNode =  nodes.find(node =>(node.id === "0a"))
    const operationImp1 = interfaceNode.data.methods.find(method => method.id === "1").name;

    return (
      <p>
        {imp}.{operationImp1}
      </p>
    )
  };
  
  const refinedAbstractionCode = () => {
    const impNode =  nodes.find(node =>(node.id === "0"))
    const imp = impNode.data.attributes.find(attribute => attribute.id === "1").name;

    return (
      <p>
          {imp}.methodN()
          <br></br>
          {imp}.methodM()
      </p>
    )
  };

  const handleChanges = (type, id, event, index) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
        handleAddMethod(id, nodes, setNodes)
        updateNodeMethods(nodes, setNodes)
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        break;
      case "deleteNode":
        handleNodeDelete(id, nodes, edges, setNodes, setEdges)
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        updateNodeMethods(nodes, setNodes)
        break;
      case "addClass":
        if(id === "0a"){
          const nums = nodes
          .filter(node => node.id.endsWith('a'))
          .map(node => parseInt(node.id.slice(0, -1)));

          const newID = findMissingID(nums)
          AddNodesImp({setNodes, setEdges, setHidden, setEdgeHidden, newID})
        }
        if(id === "0"){
          const nums = nodes
          .filter(node => !isNaN(node.id))
          .map(node => parseInt(node.id)); 

          const newID = findMissingID(nums) 
          AddNodesAbs({setNodes, setEdges, setHidden, setEdgeHidden, newID})
        }
        updateNodeMethods(nodes, setNodes)
        break;
      case "attributeName":
        handleAttributeNameChange(id, index, event, nodes, setNodes)
        break;

      default:
        break;

    }
  };
  
  return (
    <div className="wrapper" style={{ height: 800 }}>
      <IncrementalHiddenButton stepValues= {stepValues} setHidden={setHidden} edgeValues={edgeValues} setEdgeHidden={setEdgeHidden}/>
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

export default BridgeMethod;
