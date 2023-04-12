import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import OnConnectEnd from '../Components/AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import IncrementalHiddenButton from './HideUnhideNodes.js';

let concretePos = 1125;
const getProductPosition = () => `${concretePos+=175}`;

let id = 3;
const getId = () => `${id++}`;

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
          nameClass: handleClassNameChange,
          nameMethod: handleMethodNameChange,
          onDelete: handleNodeDelete,
          addMethod: handleAddMethod,
          deleteMethod:handleDeleteMethod,
          // codeWritten: node.id === '0b' ? productCode : concreateCreatorCode,
          pop: popHidden[i],
        },
        hidden: hidden[i]
      };
    }),[]);
  
    setEdges(eds => eds.map((edge, i) => {
      return {
        ...edge,
        hidden: hidden[i + 1]
      };
    }), []);
  });

  
  const handleClassNameChange = useCallback((id, event) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        return {
          ...node,
          data: {
            ...node.data,
            class_name: event.target.value
          }
        };
      }
      return node;
    }));
  }, []);

  const handleMethodNameChange = useCallback((id, index, event) => {
    setNodes(nodes => {
        const timeoutId = setTimeout(() => {
            setNodes(nodes => {
                return nodes.map(node => {
                    if (!isNaN(node.id)) {
                        return {
                            ...node,
                            data: {
                                ...node.data,
                                methods: node.data.methods.map((method, i) => {
                                    if (i === 0) {
                                        return nodes.find(node => node.id === "0").data.methods[1];
                                    }
                                    return method;
                                }),
                            },
                        };
                    }

                    if(node.id.includes('a')) {
                        return {
                            ...node,
                            data: {
                                ...node.data,
                                methods: node.data.methods.map((method, i) => {
                                    if (i === 0) {
                                        return nodes.find(node => node.id === "0a").data.methods[0];
                                    }
                                    
                                    return method;
                                }),
                            },
                        };
                    }

                    return node;
                });
            });
        }, 250);

        return nodes.map(node => {
            if (node.id === id) {
                const newMethods = [...node.data.methods];
                newMethods[index] = event.target.value;
                return {
                    ...node,
                    data: {
                        ...node.data,
                        methods: newMethods,
                    },
                };
            }
            return node;
        });
    });
}, [setNodes]);


  const handleAddMethod = useCallback((id) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const nextID = node.data.methods.length + 1;
        const newMethods = [...node.data.methods, `method${nextID}`];
        
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods
          }
        };
      }
      return node;
    }));
  }, []);

  const handleDeleteMethod = useCallback((id, index) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const newMethods = [...node.data.methods];
        newMethods.splice(index, 1);
  
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods
          }
        };
      }
      return node;
    }));
  }, []);


  const handleNodeDelete = useCallback((id) => {
    setNodes(nodes => nodes.filter(node => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));

    // setNodes(nodes => nodes.filter(node => node.id !== id+"a"));
    // setEdges((edges) => edges.filter((edge) => edge.source !== id+"a" && edge.target !== id+"a"));

    // setNodes(nodes => nodes.filter(node => node.id !== id+"b"));
    // setEdges((edges) => edges.filter((edge) => edge.source !== id+"b" && edge.target !== id+"b"));
  }, []);

  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);
  const onConnectEnd = OnConnectEnd({ reactFlowWrapper, source:"0", project, setNodes, setEdges });

  
const addProduct = (event) => {
  setHidden([false, false, false, false, false, false, false, false]);
  const { top, left } = reactFlowWrapper.current.getBoundingClientRect();

  const id = getId();
  const concretePos = getProductPosition();
  const newNode = {
    id: `${id}a`,
    position: project({ x: concretePos, y: 475 }),
    data: { 
      class_name: `ConcreteProduct${id}`,
      methods: ['doStuff'],
      handles: [0, 0, 0, 0, 1, 0, 0, 0],
      title: "Concrete Product",
      description: "", 
      pop: true,
    },
    type: "class"
  };
  setNodes((nodes) => [...nodes, newNode]);
  const newNode1 = {
    id: `${id}b`,
    type: 'code',
    position: project({ x: event.clientX - left - 80, y: event.clientY - top + 250 }),
    data: { 
      handles: [0, 0, 0, 0, 1, 0, 0, 0],
      connectedId: id,
    },
  };
  
  setNodes((nodes) => [...nodes, newNode1]);
  setEdges(edges => [
    ...edges,
    {
      id: `ea1-${id}a`,
      source: "0a",
      sourceHandle: "d",
      target: `${id}a`,
      targetHandle: "n",
      type: "buttonedge",
      animated: true
    },
    {
      id: `eb1-${id}b`,
      source: id,
      sourceHandle: "d",
      target: `${id}b`,
      targetHandle: "n",
      type: "straight",
      animated: true
    }
  ]);
}

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
