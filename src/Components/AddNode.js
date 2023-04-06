import { useCallback } from 'react';


let id = 3;
const getId = () => `${id++}`;  
const OnConnectEnd = (props) => {
  const { reactFlowWrapper, source, project, setNodes, setEdges } = props;


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
          handles: [1, 0, 0, 0],
          title: "Concrete Creator Class",
          description: "",
          deletable: true,
      },
        type: 'class',
      };
      
      setNodes((nodes) => [...nodes, newNode]);
      setEdges((edges) => [
        ...edges,
        {
          id,
          source,
          sourceHandle: 'b',
          target: id,
          targetHandle: 'u',
          type: 'buttonedge'
        }
      ]);
    }
  }, [project, reactFlowWrapper, setEdges, setNodes, source]);

  return handleConnectEnd;
};

export default OnConnectEnd;