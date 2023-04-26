export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden, newID }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);
 
      const id = newID;
      const decoratorPos = 250 * (newID - 1);

      const newNode = {
        id: `${id}a`,
        type: 'class',
        data: { 
            class_name: `ConcDecorator${id}`,
            methods: [
              { 
                id: '1',
                name: 'execute'
              },
              {
                id: '2',
                name: 'extra'
              }
            ],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Decorator",
            deletable: true,
        },
            position: {x: decoratorPos, y: 600},
        };
   
      setNodes((nodes) => [...nodes, newNode]);
      setEdges((edges) => [
        ...edges,
        { 
            id: `2-${id}a`, 
            source: '2', 
            sourceHandle: 'd', 
            target: `${id}a`, 
            type: 'smoothstep',  
            targetHandle: 'n',    
        },

      ]);
};

