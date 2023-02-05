import React, { useCallback, useRef, useState, useEffect } from 'react';
import {MarkerType} from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';

import ButtonEdge from './ButtonEdge.js';
import ClassNode from './ClassNode.js';
import AddNodeOnEdgeDrop from './AddNode';
import CustomNode from './cus';

const className = 'Creator';
const methods = ['factroyMethod'];

const nodeTypes = { 
    creator: (props) => <ClassNode {...props} color1={'#2196F3'} color2={ '#00BCD4'} className = {className} methods = {methods} activeHandles={[0, 1, 1, 1]}/>,
    concreteCreator: (props) => <ClassNode {...props} color1={'#2196F3'} color2={ '#00BCD4'} activeHandles={[1, 0, 0, 0]}/>,
    product: (props) => <ClassNode {...props} color1={'#F44336'} color2={'#FF5252'} activeHandles={[0, 1, 0, 1]}/>,
    concreteProduct: (props) => <ClassNode {...props} color1={'#2196F3'} color2={ '#00BCD4'} activeHandles={[1, 0, 0, 0]}/>,   
}
const edgeTypes = {
    buttonedge: ButtonEdge,
  };

const initialNodes = [
  {id: '1', type: 'creator', data: { label: 'Node' },position: { x: 100, y: 10 }},
  {id: '2', type: 'concreteCreator', data: { label: 'Node2' },position: { x: 0, y: 200 }},
  {id: '3',  type: 'concreteCreator', data: { label: 'Node 3' },position: { x: 200, y: 200 }},

  {id: '1a',  type: 'product', data: { label: 'Node 1A' },position: { x: 450, y: 10 }},
  {id: '2a', type: 'concreteProduct', data: { label: 'Node 2A' },position: { x: 375, y: 250 }},
  {id: '3a',  type: 'concreteProduct', data: { label: 'Node 3A' },position: { x: 550, y: 250 }},
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


const FactoryMethod = () => {
  
  return (
    <AddNodeOnEdgeDrop
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      initialNodes={initialNodes}
      initialEdges={initialEdges}
    />
  );
};

export default FactoryMethod;
