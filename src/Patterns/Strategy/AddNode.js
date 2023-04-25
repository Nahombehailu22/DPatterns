export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden, newID }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);
 
      const id = newID;
      const strategyPos = 200 * (newID - 2) + 475;

      const newNode = {
        id: `${id}a`,
        type: 'class',
        data: { 
            class_name: `ConcreteStrategy${id}`,
            methods: [
              {
                  id: '1',
                  name: 'execute'
              }
          ],
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