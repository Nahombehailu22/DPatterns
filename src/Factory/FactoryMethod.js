import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import OnConnectEnd from './AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './factoryMethodInit';
import IncrementalHiddenButton from './HideUnhideNodes.js';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange} from '../Interactivity/generalUtilities';
import { handleNodeDelete, updateNodeMethods } from '../Interactivity/factoryMethodUtilities';

const fitViewOptions = {
  padding: 0.4,
};

const FactoryMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState([false, true, true, true, true, true, false, true, true]);
  const popHidden = [false, true, false, false, false, true];
  
  const { project } = useReactFlow();
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);
  const onConnectEnd = OnConnectEnd({ reactFlowWrapper, project, setNodes, setEdges, setHidden });


  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: node.id === '0b' ? productCode : concreteCreatorCode,
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

  const productCode = () => {
    const factoryMethod = nodes.find(node => node.id === "0").data.methods[1];
    const interfaceMethod = nodes.find(node => node.id === "0a").data.methods[0];
    const interfaceClass = nodes.find(node => node.id === "0a").data.class_name;

    return (
      <p>
        {interfaceClass} p = {factoryMethod}()
        <br></br>
        p.{interfaceMethod}()
      </p>
    )
  };
  
  const concreteCreatorCode = (currID) => {
    const concreteProduct = nodes.find(node => node.id === `${currID}a`).data.class_name;
    return (
      <p>
          <b>return new</b> {concreteProduct}
      </p>
    )
  };

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
      case "deleteNode":
        handleNodeDelete(id, nodes, edges, setNodes, setEdges)
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        updateNodeMethods(nodes,setNodes)
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
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={(event) => {
          onConnectEnd(event);
        }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={fitViewOptions}
      />
    </div>
  );
};

export default FactoryMethod;
