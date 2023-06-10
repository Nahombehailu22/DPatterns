import { MarkerType } from 'reactflow';

export const AddNodeFactory = ({setNodes, setEdges, setHidden, setEdgeHidden, newID, methodIDs }) => {
    setHidden([false, false, false, false, false, false, false, false, false, false, false]);
    setEdgeHidden([false, false, false, false, false, false, false, false, false, false, false, false]);
 
    const id = newID;
    const factoryPosition = id % 2 === 1? (id + 1) /2*(-275): 250 + (id/2-1) * 275

    const newNode = {
      id: `${id}`,
      type: 'class',
      data: { 
        class_name: `ConcreteFactory${id}`,
        methods: [ ],
        relation: ["implements", "0"],
        handles: id % 2 == 1? [0, 0, 0, 1, 0, 1, 0, 0]: [0, 0, 1, 1, 1, 0, 0, 0],
        deletable: true,
        pop: true,
    },
    position: {x: 0, y: factoryPosition},
    };
    
    setNodes((nodes) => [...nodes, newNode]);
    setEdges((edges) => [
      ...edges,
      { 
        id: `0-${id}`,
        source: '0', 
        sourceHandle: id % 2 === 1? 'u':'d', 
        target: `${id}`, 
        type: 'buttonedge', 
        targetHandle: id % 2 === 1? 's': 'n',
        animated: true,   
      },

    ]);

    for (let i = 0; i < methodIDs.length; i++){
      const methId = methodIDs[i];
      const idLower = methId.toLowerCase();
      const newNode = {
        id: `0${idLower}${id}`,
          type: 'class',
          data: { 
              class_name: `ConcreteProduct${methId}${id}`,
              handles: [0, 0, 0, 0, 1, 1, 0, 0],
              title: "Concrete Product",
              relation: ["implements", `0${idLower}`],
              methods: [],
              pop: true,
          },
          position: { x: (i+1)*-225, y: id % 2 === 1? factoryPosition+ 100: factoryPosition - 10},
      };
    
      setNodes((nodes) => [...nodes, newNode]);
      setEdges((edges) => [
        ...edges,
        { 
          id: `${id}-0${idLower}${id}`, 
          source: `${id}`, 
          sourceHandle: 'l', 
          target:  `0${idLower}${id}`, 
          type: 'buttonedge', 
          targetHandle: id % 2 === 1? 'n': 's',
          markerEnd: { type: MarkerType.Arrow },
          animated: true,   
        },
        { 
          id: `0${idLower}-${idLower}${id}`, 
          source: `0${idLower}`,
          sourceHandle: id % 2 === 1?'u':'d', 
          target: `0${idLower}${id}`, 
          type: 'straight', 
          targetHandle: id % 2 === 1?'s':'n',
          markerStart: { type: MarkerType.ArrowClosed},
          animated: true,   
        },
      ]);
    }
};

