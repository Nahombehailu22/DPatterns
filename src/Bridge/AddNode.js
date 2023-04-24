let idC = 2;
let idI = 3;
let implementerPos = 450;
let refinedClassPos = 0;

const getIdC = () => `${idC++}`; 
const getImplementerPos = () => (implementerPos += 200);

const getIdI = () => `${idI++}`; 
const getrefinedClassPos = () => (refinedClassPos -= 200);

export const AddNodes = ({id, setNodes, setEdges, setHidden, setEdgeHidden }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);
 
      if(id === "0a"){
        const idI = getIdI();
        const implementerPos = getImplementerPos();

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
      }

    if(id === "0"){
      
      const idC = getIdC();
      const refinedClassPos = getrefinedClassPos();

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

    }
};

