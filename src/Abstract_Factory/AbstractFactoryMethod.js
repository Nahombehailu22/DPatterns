import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import OnConnectEnd from '../Components/AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../Interactivity/generalUtilities';
import IncrementalHiddenButton from './HideUnhideNodes.js';

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
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        break;
      // case "deleteNode":
      //   handleNodeDelete(id, nodes, edges, setNodes, setEdges)
      //   break;
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

  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);
  const onConnectEnd = OnConnectEnd({ reactFlowWrapper, source:"0", project, setNodes, setEdges });

  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: 800 }}>
      <IncrementalHiddenButton hidden={hidden} setHidden={setHidden}/>
      <Controls className="controls" />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={(event) => {
          onConnectEnd(event);
          // addProduct(event);
        }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={fitViewOptions}
      />
    </div>
  );
};

export default AbstractFactoryMethod;
