import { useCallback } from 'react';

let concretePos = 1125;
const getProductPosition = () => `${concretePos+=175}`;

let id = 3;
const getId = () => `${id++}`; 

const OnConnectEnd = (props) => {
  const { reactFlowWrapper, project, setNodes, setEdges, setHidden } = props;

  const handleConnectEnd = useCallback((event) => {
      setHidden([false, false, false, false, false, false, false, false]);
      const targetIsPane = event.target.classList.contains('react-flow__pane');
      
      if (targetIsPane) {
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const concretePos = getProductPosition();
        const newNode = {
          id: id,
          position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
          data: { 
            class_name: `ConcreteCreator${id}`,
            methods: ['createProduct', 'method2'],
            handles: [0, 1, 0, 0, 1, 0, 0, 0],
            title: "Concrete Creator Class",
            description: "",
            deletable: true,
            pop: true,
        },
          type: 'class',
        };

        const newNode1 = {
          id: `${id}a`,
          position: project({ x: concretePos, y: 475 }),
          data: { 
            class_name: `ConcreteProduct${id}`,
            methods: ['doStuff'],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Product",
            description: "", 
            pop: true,
          },
          type: "class"
        };

        const newNode2 = {
          id: `${id}b`,
          type: 'code',
          position: project({ x: event.clientX - left - 80, y: event.clientY - top + 250 }),
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
      }
    }, [project, reactFlowWrapper, setEdges, setNodes]);

    return handleConnectEnd;
};

export default OnConnectEnd;
