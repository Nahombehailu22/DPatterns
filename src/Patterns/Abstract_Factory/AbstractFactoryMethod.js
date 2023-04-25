import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

// import '../Patterns_CSS/index.css';
// import 'reactflow/dist/style.css';
// import '../Buttons.css';
// import '../Patterns_CSS/demo.css';

import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';
import { AddNodes } from './AddNode';

import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange, findMissingID} from '../../Interactivity/generalUtilities';
import { edgeValues, stepValues } from './DemoSteps';

import { concreteFactoryCode, productCode } from './nodeCodes';
import { handleNodeDelete, updateNodeMethods } from '../../Interactivity/abstractFactoryUtilities';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import { updateNodes } from '../../Interactivity/updateNodes';

const fitViewOptions = {
  padding: 0.2,
};

const AbstractFactoryMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [true, true, true, true, true, true];

  useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden) });
  
  const handleChanges = (type, id, event, index, methodId) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
       
        const nums = nodes.find(node => node.id === id).data.methods
        .map(method => method.id.charCodeAt() - 65)

        const nextID = findMissingID(nums) + 65
        const newID = String.fromCharCode(nextID)

        handleAddMethod(id, nodes, setNodes, "createProduct", newID)
        if (id == '0'){
          handleAddMethod("1", nodes, setNodes, "createProduct",newID)
          handleAddMethod("2", nodes, setNodes, "createProduct",newID)
        }
        AddNodes({ setNodes, setEdges, setHidden, setEdgeHidden, nextID })
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        updateNodeMethods(nodes, setNodes)
        handleNodeDelete(index, nodes, edges, setNodes, setEdges, methodId)
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        updateNodeMethods(nodes, setNodes)
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

export default AbstractFactoryMethod;
