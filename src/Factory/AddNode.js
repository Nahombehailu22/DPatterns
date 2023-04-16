import { useCallback } from 'react';

let id = 3;
let creatorPos = -100;
let concretePos = 450;
let codePos = -100;

const getId = () => `${id++}`; 
const getCreatorPos = () => (creatorPos -= 200);
const getProductPosition = () => (concretePos+=175);
const getCodePos = () => (codePos -= 200);


export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);
 
      const id = getId();
      const creatorPos = getCreatorPos();
      const concretePos = getProductPosition();
      const codePos = getCodePos();

      const newNode = {
        id: id,
        type: 'class',
        data: { 
          class_name: `ConcreteCreator${id}`,
          methods: ['createProduct', 'method2'],
          handles: [0, 1, 0, 0, 1, 0, 0, 0],
          title: "Concrete Creator Class",
          description: "",
          deletable: true,
          pop: true,
      },
      position: {x:creatorPos, y: 280},
      };

      const newNode1 = {
        id: `${id}a`,
        type: 'class',
        data: { 
          class_name: `ConcreteProduct${id}`,
          methods: ['doStuff'],
          handles: [0, 0, 0, 0, 1, 0, 0, 0],
          title: "Concrete Product",
          description: "", 
          pop: true,
        },
        position: {x:concretePos, y: 250},
      };

      const newNode2 = {
        id: `${id}b`,
        type: 'code',
        position: {x:codePos, y: 510},
        data: { 
          handles: [0, 0, 0, 0, 1, 0, 0, 0],
          connectedId: id,
        },
      };
      
      setNodes((nodes) => [...nodes, newNode]);
      setEdges((edges) => [
        ...edges,
        {
          id,
          source: '0',
          sourceHandle: 'd',
          target: id,
          targetHandle: 'n',
          type: 'smoothstep'
        },

      ]);
      setTimeout(() =>{
      setNodes((nodes) => [...nodes, newNode1, newNode2]);
      setEdges((edges) => [
        ...edges,
        {
          id: `ea1-${id}a`,
          source: "0a",
          sourceHandle: "d",
          target: `${id}a`,
          targetHandle: "n",
          type: "buttonedge",
          animated: true
        },
        {
          id: `eb1-${id}b`,
          source: id,
          sourceHandle: "d",
          target: `${id}b`,
          targetHandle: "n",
          type: "straight",
          animated: true
        }
      ]);
    }, 500);
};

