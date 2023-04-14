import { useCallback } from 'react';
import { MarkerType } from 'reactflow';

let currPos = -450;
const getPos = () => (currPos -= 225)

let id = 67;
const getId = () => String.fromCharCode(id++);

export const AddNodes = ({setNodes, setEdges, setHidden }) => {
// setHidden([false, false, false, false, false, false, false, false]);

  const id = getId();
  const idLower = id.toLowerCase();
  const currPos = getPos();
  const newNode = {
      id: `0${idLower}`,
      type: 'genericInterface',
      data: { 
          class_name: `AbstractProduct${id}`,
          handles: [1, 1, 0, 0, 0, 0, 0, 0],
          title: "Abstract Product",
      },
      position: { x: currPos, y: 60},
    };

  const newNode1 = {
    id: `0${idLower}1`,
      type: 'genericClass',
      data: { 
          class_name: `ConcreteProduct${id}1`,
          handles: [0, 0, 0, 0, 1, 1, 0, 0],
          title: "Concrete Product",
      },
      position: { x: currPos, y: -125},
  };

  const newNode2 = {
    id: `0${idLower}2`,
      type: 'genericClass',
      data: { 
        class_name: `ConcreteProduct${id}1`,
          handles: [0, 0, 0, 0, 1, 1, 0, 0],
          title: "Concrete Product",
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
      type: 'buttonedge', 
      targetHandle: 's',
      markerStart: { type: MarkerType.ArrowClosed},
      animated: true,   
    },
    { 
      id: `0a-${idLower}2`, 
      source: `0${idLower}`,
      sourceHandle: 'd', 
      target: `0${idLower}2`,  
      type: 'buttonedge', 
      targetHandle: 'n',
      markerStart: { type: MarkerType.ArrowClosed},
      animated: true,   
    },
  ]);
};

