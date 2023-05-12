import { MarkerType } from 'reactflow';
import ButtonEdge from '../../Components/DashedEdge';
import ClassNode from '../../Components/Nodes/ClassNode';
import InterfaceNode from '../../Components/Nodes/InterfaceNode';
import CodeNode from '../../Components/Nodes/CodeNode';
import GenericClassNode from '../../Components/Nodes/GenericClassNode';


const initialNodes = [
  {
    id: '0',
    type: 'abstract',
    data: { 
        class_name: 'Creator',
        handles: [0, 1, 1, 0, 0, 0, 0, 1],
        deletable: false,
        connectable: true,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'class',
    data: { 
        handles: [0, 1, 0, 0, 1, 0, 0, 0],
        deletable: false,
    },
    position: { x: -100, y: 280 },
  },
  {
    id: '2',
    type: 'class',
    data: { 
        handles: [0, 1, 0, 0, 1, 0, 0, 0],
        deletable: false,
    },
    position: { x: 100, y: 280 },
  },
  {
    id: '0a',
    type: 'interface',
    data: { 
        handles: [0, 1, 0, 0, 0, 0, 0, 1],
        deletable: false,
    },
    position: { x: 350, y: 0 },
  },
  {
    id: '1a',
    type: 'class',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        deletable: false,
    },
    position: { x: 275, y: 250 },
  },
  {
    id: '2a',
    type: 'class',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        deletable: false,
    },
    position: { x: 450, y: 250 },
  },
  {
    id: '0b',
    type: 'code',
    data: { 
        handles: [0, 1, 0, 0, 0, 0, 0, 0],
        connectedId: '0',
    },
    position: { x: -200, y: 0 },
  },
  {
    id: '1b',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: '1',
    },
    position: { x: -100, y: 510 },
  },
  {
    id: '2b',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: '2',
    },
    position: { x: 100, y: 510 },
  },
];

const initialEdges = [
  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'd', 
    target: '1', 
    type: 'smoothstep', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed }    

  },
  { 
    id: '0-2',
    source: '0',
    sourceHandle: 'd',
    target: '2', 
    targetHandle: 'n', 
    type: 'smoothstep',  
  },
  { 
    id: 'e1-1a',
    source: '0',  
    target: '0a', 
    sourceHandle: 'r', 
    type: 'straight', 
    animated: 'true', 
    targetHandle: 'w',
    markerEnd: { type: MarkerType.Arrow }, 
  },
  { 
    id: 'e1a-2a',
    source: '0a',  
    sourceHandle: 'd', 
    target: '1a', 
    type: 'buttonedge', 
    animated: 'true', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed }
  },
  { 
    id: 'e1a-3a',
    source: '0a',  
    sourceHandle: 'd', 
    target: '2a', 
    type: 'buttonedge', 
    animated: 'true', 
    targetHandle: 'n'
  },
  { 
    id: '0-0b',
    source: '0b',  
    target: '0', 
    sourceHandle: 'd', 
    type: 'step', 
    targetHandle: 'w',
    animated: true,
  },
  { 
    id: '1-1b',
    source: '1',  
    target: '1b', 
    sourceHandle: 'd', 
    type: 'straight', 
    targetHandle: 'n',
    animated: true,
  },
  { 
    id: '2-2b',
    source: '2',  
    target: '2b', 
    sourceHandle: 'd', 
    type: 'straight', 
    targetHandle: 'n',
    animated: true,
  },
];

const nodeTypes = {
    abstract: ClassNode,
    class: ClassNode,
    interface: InterfaceNode,
    code: CodeNode,
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };
