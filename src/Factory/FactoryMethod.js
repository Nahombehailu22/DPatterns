import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import OnConnectEnd from '../Components/AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './factoryMethodInit';
import IncrementalHiddenButton from './HideUnhideNodes.js';

let concretePos = 1125;
const getProductPosition = () => `${concretePos+=175}`;

let id = 3;
const getId = () => `${id++}`;

const fitViewOptions = {
  padding: 0.5,
};

const FactoryMethod = (props) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState([false, true, true, true, true, true]);
  const popHidden = [false, true, false, false, false, true];

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
                    if (node.id === '1' || node.id === '2') {
                        return {
                            ...node,
                            data: {
                                ...node.data,
                                methods: node.data.methods.map((method, i) => {
                                    if (i === 0) {
                                        return nodes[0].data.methods[0];
                                    }
                                    return method;
                                }),
                            },
                        };
                    }

                    if (node.id === '1a' || node.id === '2a') {
                        return {
                            ...node,
                            data: {
                                ...node.data,
                                methods: node.data.methods.map((method, i) => {
                                    if (i === 0) {
                                        return nodes[3].data.methods[0];
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

    setNodes(nodes => nodes.filter(node => node.id !== id+"a"));
    setEdges((edges) => edges.filter((edge) => edge.source !== id+"a" && edge.target !== id+"a"));
  }, []);

  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);
  const onConnectEnd = OnConnectEnd({ reactFlowWrapper, source:"0", project, setNodes, setEdges });

  
function addProduct() {
  const id = getId();
  const concretePos = getProductPosition();
  const ida = id + "a";
  const newNode = {
    id: ida,
    position: project({ x: concretePos, y: 475 }),
    data: { 
      class_name: `ConcreteProduct${id}`,
      methods: ['doStuff'],
      handles: [0, 0, 0, 0, 1, 0, 0, 0],
      title: "Concrete Product",
      description: ""
    },
    type: "class"
  };
  setNodes(nodes => [...nodes, newNode]);
  setEdges(edges => [
    ...edges,
    {
      id: `ea1-${id}a`,
      source: "0a",
      sourceHandle: "d",
      target: ida,
      targetHandle: "n",
      type: "buttonedge",
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
          addProduct();
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
