export const AddNodesImp = ({setNodes, setEdges, setHidden, setEdgeHidden, newID }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);

        const idI = newID;
        const implementerPos = 200 * (newID - 2) + 450

        const newNode = {
          id: `${idI}a`,
          type: 'class',
          data: { 
              class_name: `ConcreteImp${idI}`,
              methods: [
                {
                  id: '1',
                  name: 'operationImp1'
                }
              ],
              handles: [0, 0, 0, 0, 1, 0, 0, 0],
              title: "Concrete Implementer",
              deletable: true,
          },
              position: {x: implementerPos, y: 250},
          };
    
        setNodes((nodes) => [...nodes, newNode]);
        setEdges((edges) => [
          ...edges,
          { 
              id: `0a-${idI}a`, 
              source: '0a', 
              sourceHandle: 'd', 
              target: `${idI}a`, 
              type: 'smoothstep',  
              targetHandle: 'n',    
              animated: true
          },

        ]);
      };


export const AddNodesAbs = ({id, setNodes, setEdges, setHidden, setEdgeHidden, newID }) => {
  setHidden([false, false, false, false, false, false, false, false, false]);
  setEdgeHidden([false, false, false, false, false, false, false, false, false]);
  
  const idC = newID;
  const refinedClassPos = -200 * (newID - 1)

  const newNode = {
    id: `${idC}`,
    type: 'class',
    data: { 
        class_name: `RefinedAbstraction${idC}`,
        methods: [
          {
            id: '1',
            name: 'featureN'
          }
        ],
        handles: [0, 1, 0, 0, 1, 0, 0, 0],
        title: "Refined Abstraction",
        deletable: true,
    },
    position: { x: refinedClassPos, y: 280 },

    };

  setNodes((nodes) => [...nodes, newNode]);
  setEdges((edges) => [
    ...edges,
    { 
      id: `0-${idC}`, 
      source: '0', 
      sourceHandle: 'd', 
      target: `${idC}`, 
      type: 'smoothstep', 
      targetHandle: 'n',
    },

  ]);


};