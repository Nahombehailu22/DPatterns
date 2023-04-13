import { useCallback } from 'react';

let concretePos = 1125;
const getProductPosition = () => `${concretePos+=175}`;

let id = 3;
const getId = () => `${id++}`; 

const OnConnectEnd = (props) => {
  const { reactFlowWrapper, source, project, setNodes, setEdges, setHidden } = props;

  const handleConnectEnd = useCallback((event) => {
      const targetIsPane = event.target.classList.contains('react-flow__pane');
      if (targetIsPane) {
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
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
        
        setNodes((nodes) => [...nodes, newNode]);
        setEdges((edges) => [
          ...edges,
          {
            id,
            source,
            sourceHandle: 'd',
            target: id,
            targetHandle: 'n',
            type: 'smoothstep'
          }
        ]);
      }
    }, [project, reactFlowWrapper, setEdges, setNodes, source]);

    return handleConnectEnd;
};

export default OnConnectEnd;
