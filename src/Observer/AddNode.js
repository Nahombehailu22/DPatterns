import { useCallback } from 'react';


let id = 3;
let subscriberPos = 475;

const getId = () => `${id++}`; 
const getSubscriberPos = () => (subscriberPos += 200);

export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);
 
      const id = getId();
      const subscriberPos = getSubscriberPos();

      const newNode = {
        id: `${id}a`,
        type: 'class',
        data: { 
            class_name: `ConcreteSubscriber${id}`,
            methods: ['update'],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Subscriber",
            deletable: true,
        },
            position: {x: subscriberPos, y: 250},
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

