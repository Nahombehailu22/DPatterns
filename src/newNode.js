import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Position,
  MarkerType,
  ReactFlowProvider,
} from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';

import ButtonEdge from './ButtonEdge.js';
import ClassNode from './ClassNode.js';

const nodeTypes = { 
    classNode: (props) => <ClassNode {...props} color1={'#3F51b5'} color2={'#00FFFF'} activeHandles={[1, 1, 1, 1]}/>,
    interfaceNode: (props) => <ClassNode {...props} color1={'red'} color2={'#FFCCCB'} activeHandles={[0, 1, 0, 1]}/> 
    
}

const edgeTypes = {
    buttonedge: ButtonEdge,
  };

 
const initialNodes = [
  {id: '1', type: 'classNode', data: { label: 'Node' },position: { x: 100, y: 10 }, color: 'blue'},
  {id: '2', type: 'classNode', data: { label: 'Node2' },position: { x: 0, y: 200 }},
  {id: '3',  type: 'classNode', data: { label: 'Node 3' },position: { x: 200, y: 200 }},

  {id: '1a',  type: 'interfaceNode', data: { label: 'Node 1A' },position: { x: 450, y: 10 }},
  {id: '2a', type: 'classNode', data: { label: 'Node 2A' },position: { x: 375, y: 250 }},
  {id: '3a',  type: 'classNode', data: { label: 'Node 3A' },position: { x: 550, y: 250 }},
];

const initialEdges = [
    { id: 'e1-2', source: '1', sourceHandle: 'b', target: '2', type: 'buttonedge', targetHandle: 'u',
        markerStart: {
            type: MarkerType.Arrow,
        }       
    },
    { id: 'e1-3', source: '1', sourceHandle: 'b', target: '3', targetHandle: 'u', type: 'buttonedge' },
    { id: 'e1-1a', source: '1',  target: '1a', sourceHandle: 'r', type: 'straight', animated: 'true', targetHandle: 'l',
        markerEnd: {
            type: MarkerType.Arrow,
        }, 
    },
    { id: 'e1a-2a', source: '1a',  sourceHandle: 'b', target: '2a', type: 'buttonedge', animated: 'true', targetHandle: 'u',   
        markerStart: {
            type: MarkerType.Arrow,
    }},
    { id: 'e1a-3a', source: '1a',  sourceHandle: 'b', target: '3a', type: 'buttonedge', animated: 'true', targetHandle: 'u'},
];


let id = 4;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);


  const onConnectEnd = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
          data: { label: `Node ${id}` },
          type: 'classNode'
        };
        
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, sourceHandle: 'b', target: id, targetHandle:'u', type: 'buttonedge'}));
      }
    },
    [project]
  );

  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: 800 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      />
      

    </div>
    
  );
};

export default AddNodeOnEdgeDrop;