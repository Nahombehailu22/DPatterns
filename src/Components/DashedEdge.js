import React from 'react';
import { getSmoothStepPath, ReactFlow } from 'reactflow';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerStart,
  markerEnd,
}) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    smoothStep: true,
  });

  return (
    <>
      <path
        id={id}
        style={{
          ...style,
          stroke: 'black', 
          strokeWidth: 2, 
          strokeDasharray: '5, 5',
        }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        markerStart={markerStart}
      />
    </>
  );
}
