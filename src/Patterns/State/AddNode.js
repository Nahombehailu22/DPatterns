export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden, newID }) => {
  setHidden([false, false, false, false, false, false, false, false, false]);
  setEdgeHidden([false, false, false, false, false, false, false, false, false]);

  const id = newID;
  const statePos = 200 * (newID - 2) + 475;

  const newNode = {
    id: `${id}a`,
    type: 'class',
    data: { 
        class_name: `ConcreteState${id}`,
        attributes: [
          {
              id: '1',
              name: 'context'
          }
      ],
      methods: [
          {
              id: 'a',
              name: 'setContext',
          },
          {
              id: '1',
              name: 'doThis'
          },
          
          {
              id: '2',
              name: 'doThat'
          }
      ],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete State",
        deletable: true,
    },
        position: {x: statePos, y: 250},
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