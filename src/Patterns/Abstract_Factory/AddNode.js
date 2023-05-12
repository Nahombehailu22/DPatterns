import { useCallback } from 'react';
import { MarkerType } from 'reactflow';

export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden, nextID }) => {
  setHidden([false, false, false, false, false, false, false, false, false, false, false]);
  setEdgeHidden([false, false, false, false, false, false, false, false, false, false, false, false]);

  const id = String.fromCharCode(nextID);
  const idLower = id.toLowerCase();
  const currPos = -225 - (nextID-65)*225
  const newNode = {
      id: `0${idLower}`,
      type: 'interface',
      data: { 
          class_name: `AbstractProduct${id}`,
          handles: [1, 1, 0, 0, 0, 0, 0, 0],
          title: "Abstract Product",
          relation:[],
          methods: [
            {
              id: "1",
              name: `operation${id}`,
              interfaceMethod: true,
            }
          ]
      },
      position: { x: currPos+10, y: 30},
    };

  const newNode1 = {
    id: `0${idLower}1`,
      type: 'class',
      data: { 
          class_name: `ConcreteProduct${id}1`,
          handles: [0, 0, 0, 0, 1, 1, 0, 0],
          title: "Concrete Product",
          relation: ["implements", `0${idLower}`],
          methods: [
            {
              id: "1",
              name: `operation${id}`,
              overRide:true
            }
          ]
      },
      position: { x: currPos, y: -175},
  };

  const newNode2 = {
    id: `0${idLower}2`,
      type: 'class',
      data: { 
        class_name: `ConcreteProduct${id}2`,
          handles: [0, 0, 0, 0, 1, 1, 0, 0],
          title: "Concrete Product",
          relation:["implements", `0${idLower}`],
          methods: [
            {
              id: "1",
              name: `operation${id}`,
              overRide: true,
            }
          ]
      },
      position: { x: currPos, y: 240},
  };

  setNodes((nodes) => [...nodes, newNode, newNode1, newNode2]);
  setEdges((edges) => [
    ...edges,
    { 
      id: `1-0${idLower}1`, 
      source: '1', 
      sourceHandle: 'l', 
      target: `0${idLower}1`, 
      type: 'buttonedge', 
      targetHandle: 'n',
      markerEnd: { type: MarkerType.Arrow },
      animated: true,   
    },
    { 
      id: `2-0${idLower}2`, 
      source: '2', 
      sourceHandle: 'l', 
      target: `0${idLower}2`, 
      type: 'buttonedge', 
      targetHandle: 's',
      markerEnd: { type: MarkerType.Arrow },
      animated: true,   
    },
    
    { 
      id: `0a-${idLower}1`, 
      source: `0${idLower}`,
      sourceHandle: 'u', 
      target: `0${idLower}1`, 
      type: 'straight', 
      targetHandle: 's',
      markerStart: { type: MarkerType.ArrowClosed},
      animated: true,   
    },
    { 
      id: `0a-${idLower}2`, 
      source: `0${idLower}`,
      sourceHandle: 'd', 
      target: `0${idLower}2`,  
      type: 'straight', 
      targetHandle: 'n',
      markerStart: { type: MarkerType.ArrowClosed},
      animated: true,   
    },
  ]);
};

