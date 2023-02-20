import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';
import ClassNode from './ClassNode.js';

// Import component styles and ReactFlow default styles
import './index.css';
import 'reactflow/dist/style.css';
import './Buttons.css';

import OnConnectEnd from './AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './FactoryMethodValues.js';
import IncrementalHiddenButton from './HideUnhideNodes.js';
// import ToggleHiddenButton from './HideUnhideNodes.js';


const hide = (hidden) => (nodeOrEdge) => {
  nodeOrEdge.hidden = hidden;
  return nodeOrEdge;
};

let concretePos = 1125;
const getProductPosition = () => `${concretePos+=175}`;

let id = 3;
const getId = () => `${id++}`;


// Define the FactoryMethod component
const FactoryMethod = (props) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);

  // Set up state for nodes and edges using ReactFlow hooks
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState([false, true, true, true, true, true]);
  

  useEffect(() => {
    setNodes((nds) => {
      const newNodes = nds.map((node, i) => {
        return {
          ...node,
          hidden: hidden[i]
        };
      });
      return newNodes;
    });
    setEdges((eds) => eds.map((edge, i) => {
      return {
        ...edge,
        hidden: hidden[i+1]
      };
    }));
  }, [hidden]);


  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);
  const onConnectEnd = OnConnectEnd({ reactFlowWrapper, source:"0", project, setNodes, setEdges });

  const handleClassNameChange = (id, e) => {
    const index = classNames.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedClassNames = [...classNames];
      updatedClassNames[index].classname = e.target.value;
      updatedClassNames[1].classname = e.target.value;
      setClassNames(updatedClassNames);
      console.log(classNames);
    }
  };

  const [classNames, setClassNames] = useState([
    { title: "creator", classname: "Creator", id: "0" },
    { title: "concreteCreator1", classname: "ConcreteCreator1", id: "1" },
    { title: "concreteCreator2", classname: "ConcreteCreator2", id: "2" },
    { title: "product", classname: "Product", id: "0a" },
    { title: "concreteProduct1", classname: "concreteProduct1", id: "1a" },
    { title: "concreteProduct2", classname: "concreteProduct2", id: "2a" },
  ]);

  useEffect (() => {
    const assignClasses = classNames.map(({title, classname}) => {
      nodeTypes[title].className = classname;
      nodeTypes[title].nameChange = handleClassNameChange;
    });
  });

  function handleNodeDelete (id) {
    console.log('deleting node with id:', id);
    setNodes(nodes => nodes.filter(node => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));

    setNodes(nodes => nodes.filter(node => node.id !== id+"a"));
    setEdges((edges) => edges.filter((edge) => edge.source !== id+"a" && edge.target !== id+"a"));
  };
  
  nodeTypes['concreteCreator'].onDelete = handleNodeDelete;

  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: "800px" }}>
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
          // Create a new node with a new ID
          const id = getId();
          const concretePos = getProductPosition();
          const ida = id + "a";
          nodeTypes["concreteProduct"].id = ida;
          nodeTypes["concreteProduct"].className = `ConcreteProduct${id}`;
          const newNode = {
            id: ida,
            position: project({ x: concretePos, y: 475 }),
            data: { label: "concreteProduct" + ida },
            type: "concreteProduct",
          };
          // Add the new node and a corresponding edge to the state
          setNodes((nodes) => [...nodes, newNode]);
          setEdges((edges) => [
            ...edges,
            {
              id: "ea1-" + id + "a",
              source: "0a",
              sourceHandle: "b",
              target: ida,
              targetHandle: "u",
              type: "buttonedge",
              animated: true,
            },
          ]);
        }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      />
    </div>
  );
};

export default FactoryMethod;
