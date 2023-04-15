import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './SingletonMethodInit';
import IncrementalHiddenButton from './HideUnhideNodes.js';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../Interactivity/generalUtilities';

const fitViewOptions = {
  padding: 1,
};

const SingletonMethod = (props) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState([false, true, false]);
  const popHidden = [false, false];

  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: node.type === 'code' ? writeCode: node.data.writeCode,
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
    }));
  });
  
  const writeCode = () => {
    const instance = nodes[0].data.attributes[0]
    const classSingleton = nodes[0].data.class_name

    return (
      <p>
        if({instance}==null) {'{'}
        <br></br>
        &nbsp;&nbsp;&nbsp;instance = new {classSingleton}()
        <br></br>
        {'}'}
        <br></br>
        return {instance}
      </p>
    )
  };

  const handleChanges = useCallback((type, id, event, index) => {

    if (id == "0"){
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
    }
  
  }, []);

  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);


  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: 800 }}>
      <IncrementalHiddenButton hidden={hidden} setHidden={setHidden}/>
      <Controls className="controls" style={{position: "fixed", bottom: "0", left: "0"}} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={fitViewOptions}
      />
    </div>
  );
};

export default SingletonMethod;


