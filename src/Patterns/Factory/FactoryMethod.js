import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls } from 'reactflow';

import { AddNodes } from './AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './factoryMethodInit';
import { findMissingID, handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange} from '../../Interactivity/generalUtilities';
import { handleNodeDelete, updateNodeMethods } from '../../Interactivity/factoryMethodUtilities';
import { stepValues, edgeValues, popValues } from './DemoSteps';
import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';
import { concreteCreatorCode, productCode } from './nodeCodes';
import { updateNodes } from '../../Interactivity/updateNodes';

const fitViewOptions = {
  padding: 0.4,
};

const FactoryMethod = (props) => {
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
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        break;
      case "deleteNode":
        handleNodeDelete(id, nodes, edges, setNodes, setEdges)
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

export default FactoryMethod;
