import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';
import OnConnectEnd from './AddNode';



const AddNodeOnEdgeDrop = (props) => {
  const nodeTypes = props.nodeTypes;
  const edgeTypes = props.edgeTypes;
  const initialNodes = props.initialNodes;
  const initialEdges = props.initialEdges;

  const source = props.source;

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { project } = useReactFlow();

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);

  const onConnectEnd = OnConnectEnd({ reactFlowWrapper, source, project, setNodes, setEdges });
  
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