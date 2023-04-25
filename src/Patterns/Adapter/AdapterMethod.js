import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';

import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../../Interactivity/generalUtilities';
import { stepValues, edgeValues } from './DemoSteps';

import { adapterCode } from './nodeCodes';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AdapterMethodInit';
import { updateNodes } from '../../Interactivity/updateNodes';

const fitViewOptions = {
  padding: 0.5,
};

const AdapterMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [false, false];

  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden) });
  
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


