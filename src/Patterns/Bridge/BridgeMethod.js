import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls } from 'reactflow';


import { AddNodes, AddNodesAbs, AddNodesImp } from './AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './BridgeMethodInit';
import { findMissingID, handleAddMethod, handleAttributeNameChange, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleNodeDelete} from '../../Interactivity/generalUtilities';
import { stepValues, edgeValues, popValues } from './DemoSteps';
import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';
import { updateNodeMethods } from '../../Interactivity/bridgeMethodUtilities';
import { clientCode, implementationCode, refinedAbstractionCode } from './nodeCodes';
import { updateNodes } from '../../Interactivity/updateNodes';

const fitViewOptions = {
  padding: 0.4,
};

const BridgeMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const [popHidden, setPopHidden] = useState(popValues[popValues.length - 1])
  const demoProps = {stepValues, setHidden, edgeValues, setEdgeHidden, popValues, setPopHidden};

  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden) });

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

  const codeWritten = (connectedId, id) => {
    switch(id){
      case '0b':
        return (<div>{implementationCode(nodes)}</div>);
      case 'cb':
        return ( <div>{clientCode(nodes)}</div>)
      default:
        return (<div>{refinedAbstractionCode(nodes)}</div>);
    }
  }
  
  return (
    <div className="wrapper" style={{ height: 800 }}>
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
    </div>
  );
};

export default BridgeMethod;
