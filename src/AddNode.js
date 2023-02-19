import { useCallback } from 'react';
import { nodeTypes } from './FactoryMethodValues.js';

let id = 3;
const getId = () => `${id++}`;  
const OnConnectEnd = (props) => {
  const { reactFlowWrapper, source, project, setNodes, setEdges } = props;

const handleConnectEnd = useCallback((event) => {
    const targetIsPane = event.target.classList.contains('react-flow__pane');
    if (targetIsPane) {
      const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
      const id = getId();
      nodeTypes['concreteCreator'].id = id;
      nodeTypes['concreteCreator'].className = `ConcreteCreator${id}`;
      const newNode = {
        id,
        position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
        data: { label: `Node ${id}` },
        type: 'concreteCreator',
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
