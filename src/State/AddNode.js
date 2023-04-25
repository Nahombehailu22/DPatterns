import { useCallback } from 'react';


let id = 3;
let strategyPos = 475;

const getId = () => `${id++}`; 
const getStrategyPos = () => (strategyPos += 200);

export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);
 
      const id = getId();
      const strategyPos = getStrategyPos();

      const newNode = {
        id: `${id}a`,
        type: 'class',
        data: { 
            class_name: `ConcreteStrategy${id}`,
            methods: ['execute'],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Strategy",
            deletable: true,
        },
            position: {x: strategyPos, y: 250},
        };
   
      setNodes((nodes) => [...nodes, newNode]);
      setEdges((edges) => [
        ...edges,
        { 
            id: `0a-${id}a`, 
            source: '0a', 
            sourceHandle: 'd', 
            target: `${id}a`, 
            type: 'smoothstep',  
            targetHandle: 'n',    
            animated: true
        },

      ]);
};