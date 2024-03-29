import { MarkerType } from 'reactflow';
import ButtonEdge from '../../Components/DashedEdge';
import ClassNode from '../../Components/Nodes/ClassNode';
import InterfaceNode from '../../Components/Nodes/InterfaceNode';
import CodeNode from '../../Components/Nodes/CodeNode';
import GenericClassNode from '../../Components/Nodes/GenericClassNode';

const initialNodes = [
  {
    id: '0',
    type: 'interface',
    data: { 
        handles: [1, 1, 1, 0, 0, 0, 0, 0],
        deletable: false,
        connectable: true,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'class',
    data: { 
        handles: [0, 0, 0, 1, 0, 1, 0, 0],
        deletable: false,
    },
    position: { x: 0, y: -275},
  },
  {
    id: '2',
    type: 'class',
    data: { 
        handles: [0, 0, 1, 1, 1, 0, 0, 0],
        deletable: false,
    },
    position: { x: 0, y: 250},
  },
  {
    id: 'c',
    type: 'client',
    data: { 
        attributes: [
          {
            id: '1',
            name: 'factory',
            status: 'private',
        }
      ],
        handles: [0, 1, 0, 0, 0, 0, 0, 1],
        deletable: false,
    },
    position: { x: 300, y: 0},
  },
  {
    id: '0a',
    type: 'interface',
    data: { 
        handles: [1, 1, 0, 0, 0, 0, 0, 0],
    },
    position: { x: -215, y: 30},
  },
  {
    id: '0a1',
    type: 'class',
    data: { 
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
    },
    position: { x: -225, y: -175},
  },
  {
    id: '0a2',
    type: 'class',
    data: { 
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
    },
    position: { x: -225, y: 240},
  },
  {
    id: '0b',
    type: 'interface',
    data: { 
        handles: [1, 1, 0, 0, 0, 0, 0, 0],
    },
    position: { x: -440, y: 30},
  },
  {
    id: '0b1',
    type: 'class',
    data: { 
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
    },
    position: { x: -450, y: -175},
  },
  {
    id: '0b2',
    type: 'class',
    data: { 
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
    },
    position: { x: -450, y: 240},
  },
  {
    id: 'c1',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: '0',
    },
    position: { x: 275, y: 275},
  },
  {
    id: '2a',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 0, 0, 0, 1],
        connectedId: '2',
    },
    position: { x: 225, y: 360},
  },
];

const initialEdges = [
  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'u', 
    target: '1', 
    type: 'buttonedge', 
    targetHandle: 's',
    markerStart: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '0-2', 
    source: '0', 
    sourceHandle: 'd', 
    target: '2', 
    type: 'buttonedge', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '0-c', 
    source: '0', 
    sourceHandle: 'r', 
    target: 'c', 
    type: 'straight', 
    targetHandle: 'w',
    markerStart: { type: MarkerType.Arrow },
  },
  
  { 
    id: '1-0a1', 
    source: '1', 
    sourceHandle: 'l', 
    target: '0a1', 
    type: 'buttonedge', 
    targetHandle: 'n',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '2-0a2', 
    source: '2', 
    sourceHandle: 'l', 
    target: '0a2', 
    type: 'buttonedge', 
    targetHandle: 's',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
 
  { 
    id: '1-0b1', 
    source: '1', 
    sourceHandle: 'l', 
    target: '0b1', 
    type: 'buttonedge', 
    targetHandle: 'n',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '2-0b2', 
    source: '2', 
    sourceHandle: 'l', 
    target: '0b2', 
    type: 'buttonedge', 
    targetHandle: 's',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '0a-a1', 
    source: '0a', 
    sourceHandle: 'u', 
    target: '0a1', 
    type: 'straight', 
    targetHandle: 's',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: '0a-a2', 
    source: '0a', 
    sourceHandle: 'd', 
    target: '0a2', 
    type: 'straight', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: '0b-b1', 
    source: '0b', 
    sourceHandle: 'u', 
    target: '0b1', 
    type: 'straight',
    targetHandle: 's',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: '0b-b2', 
    source: '0b', 
    sourceHandle: 'd', 
    target: '0b2', 
    type: 'straight', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: 'c-c1', 
    source: 'c', 
    sourceHandle: 'd', 
    target: 'c1', 
    type: 'straight', 
    targetHandle: 'n',
    animated: true,
  },
  { 
    id: '2-2a', 
    source: '2', 
    sourceHandle: 'r', 
    target: '2a', 
    type: 'straight', 
    targetHandle: 'w',
    animated: true,
  },
  
];

const nodeTypes = {
    client: ClassNode,
    class: ClassNode, 
    interface: InterfaceNode,
    code: CodeNode, 
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };
