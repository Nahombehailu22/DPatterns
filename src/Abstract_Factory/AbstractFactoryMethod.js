import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import '../Patterns_CSS/index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';
import '../Patterns_CSS/demo.css';

import { AddNodes } from '../Abstract_Factory/AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../Interactivity/generalUtilities';
import IncrementalHiddenButton from './HideUnhideNodes.js';
import { handleNodeDelete, updateNodeMethods } from '../Interactivity/abstractFactoryUtilities';

const fitViewOptions = {
  padding: 0.2,
};


const AbstractFactoryMethod = (props) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState([false,true, true, true, true, true, true, true, true, true]);
  const [edgeHidden, setEdgeHidden] = useState([true, true, true, true, true, true, true, true, true, true, true]);
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
        hidden: edgeHidden[i]
      };
    }), []);
  });
  
  const handleChanges = useCallback((type, id, event, index) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
        handleAddMethod(id, nodes, setNodes, "createProduct")
        if (id == '0'){
          handleAddMethod("1", nodes, setNodes, "createProduct")
          handleAddMethod("2", nodes, setNodes, "createProduct")
        }
        AddNodes({ setNodes, setEdges })
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        console.log(index)
        updateNodeMethods(nodes, setNodes)
        handleNodeDelete(index, nodes, edges, setNodes, setEdges)
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
      <IncrementalHiddenButton setHidden={setHidden} setEdgeHidden={setEdgeHidden}/>
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
