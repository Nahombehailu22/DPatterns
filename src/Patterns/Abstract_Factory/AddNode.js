import { MarkerType } from 'reactflow';

export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden, nextID, factoryNodes }) => {
  setHidden([false, false, false, false, false, false, false, false, false, false, false]);
  setEdgeHidden([false, false, false, false, false, false, false, false, false, false, false, false]);

  const id = String.fromCharCode(nextID);
  const idLower = id.toLowerCase();
  const currPos = (nextID-64) * -225
  const newNode = {
      id: `0${idLower}`,
      type: 'interface',
      data: { 
          class_name: `AbstractProduct${id}`,
          handles: [1, 1, 0, 0, 0, 0, 0, 0],
          title: "Abstract Product",
          relation:[],
          methods: [
            {
              id: "1",
              name: `operation${id}`,
              interfaceMethod: true,
            }
          ],
          pop: true,
      },
      position: { x: currPos + 10, y: 30},
    };

  setNodes((nodes) => [...nodes, newNode]);

  for (let i = 0; i < factoryNodes.length; i++){
    const nodeId = factoryNodes[i]
    const yPos = nodeId % 2 === 1? (nodeId + 1) /2*(-275) + 100: 240 + (nodeId/2-1) * 275
    const newNode = {
      id: `0${idLower}${nodeId}`,
        type: 'class',
        data: { 
            class_name: `ConcreteProduct${id}${nodeId}`,
            handles: [0, 0, 0, 0, 1, 1, 0, 0],
            title: "Concrete Product",
            relation: ["implements", `0${idLower}`],
            methods: [
              {
                id: "1",
                name: `operation${id}`,
                overRide:true
              }
            ],
            pop: true,
        },
        position: { x: currPos, y: yPos},
    };
    setNodes((nodes) => [...nodes, newNode]);
    setEdges((edges) => [
      ...edges,
      { 
        id: `${nodeId}-0${idLower}${nodeId}`, 
        source: `${nodeId}`, 
        sourceHandle: 'l', 
        target:  `0${idLower}${nodeId}`,  
        type: 'buttonedge', 
        targetHandle: nodeId % 2 === 1? 'n': 's',
        markerEnd: { type: MarkerType.Arrow },
        animated: true,   
      },
      { 
        id: `0${idLower}-${idLower}${nodeId}`, 
        source: `0${idLower}`,
        sourceHandle: nodeId % 2 === 1?'u':'d', 
        target: `0${idLower}${nodeId}`, 
        type: 'straight', 
        targetHandle: nodeId % 2 === 1?'s':'n',
        markerStart: { type: MarkerType.ArrowClosed},
        animated: true,   
      },
    ]);
  }


};

