import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

let id = 4;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = (props) => {
  const nodeTypes = props.nodeTypes;
  const edgeTypes = props.edgeTypes;
  const initialNodes = props.initialNodes;
  const initialEdges = props.initialEdges;

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { project } = useReactFlow();

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);

  const onConnectEnd = useCallback(event => {
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
      setEdges((eds) => eds.concat({
        id,
        source: connectingNodeId.current,
        sourceHandle: 'b',
        target: id,
        targetHandle:'u',
        type: 'buttonedge'
      }));
    }
  }, [project]);
  
  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: 800 }}>
    <Controls />
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