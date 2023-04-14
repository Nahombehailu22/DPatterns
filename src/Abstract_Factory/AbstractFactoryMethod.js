import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import { AddNodes } from '../Abstract_Factory/AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../Interactivity/generalUtilities';
import IncrementalHiddenButton from './HideUnhideNodes.js';
import { updateNodeMethods } from '../Interactivity/abstractFactoryUtilities';

const fitViewOptions = {
  padding: 0.2,
};


const AbstractFactoryMethod = (props) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState([false, false, false, false, false, false, false, false, false]);
  const popHidden = [true, true, true, true, true, true];

  // const onConnectEnd = OnConnectEnd({ setNodes, setEdges });

  
  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          pop: popHidden[i],
          
        },
        hidden: hidden[i]
      };
    }));
  
    setEdges(eds => eds.map((edge, i) => {
      return {
        ...edge,
        hidden: hidden[i + 1]
      };
    }), []);
  });
  
  const handleChanges = useCallback((type, id, event, index) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
        handleAddMethod(id, nodes, setNodes)
        if (id == '0'){
          handleAddMethod("1", nodes, setNodes)
          handleAddMethod("2", nodes, setNodes)
        }
        AddNodes({ setNodes, setEdges })
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
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
  }, []);



  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: 800 }}>
      <IncrementalHiddenButton hidden={hidden} setHidden={setHidden}/>
      <Controls className="controls" />
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
