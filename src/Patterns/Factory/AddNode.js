export const AddNodes = ({setNodes, setEdges, setHidden, setEdgeHidden, newID }) => {
      setHidden([false, false, false, false, false, false, false, false, false]);
      setEdgeHidden([false, false, false, false, false, false, false, false, false]);
 
      const id = newID;
      const creatorPos = -200 * (newID-2) - 100;
      const concretePos = 175 * (newID-2) + 450;
      const codePos = -200 * (newID-2) - 100

      const newNode = {
        id: `${id}`,
        type: 'class',
        data: { 
          class_name: `ConcreteCreator${id}`,
          methods: [
            {
              id: '1',
              name: 'createProduct',
            },
          ],
          relation: ["extends", "0"],
          handles: [0, 1, 0, 0, 1, 0, 0, 0],
          title: "Concrete Creator Class",
          description: "",
          deletable: true,
          pop: true,
      },
      position: {x:creatorPos, y: 280},
      };

      const newNode1 = {
        id: `${id}a`,
        type: 'class',
        data: { 
          class_name: `ConcreteProduct${id}`,
          methods: [],
          relation: ["implements", "0a"],
          handles: [0, 0, 0, 0, 1, 0, 0, 0],
          title: "Concrete Product",
          description: "", 
          pop: true,
        },
        position: {x:concretePos, y: 250},
      };

      const newNode2 = {
        id: `${id}b`,
        type: 'code',
        position: {x:codePos, y: 510},
        data: { 
          handles: [0, 0, 0, 0, 1, 0, 0, 0],
          connectedId: id,
        },
      };
      
      setNodes((nodes) => [...nodes, newNode]);
      setEdges((edges) => [
        ...edges,
        {
          id,
          source: '0',
          sourceHandle: 'd',
          target: `${id}`,
          targetHandle: 'n',
          type: 'smoothstep'
        },

      ]);
      setTimeout(() =>{
      setNodes((nodes) => [...nodes, newNode1, newNode2]);
      setEdges((edges) => [
        ...edges,
        {
          id: `ea1-${id}a`,
          source: "0a",
          sourceHandle: "d",
          target: `${id}a`,
          targetHandle: "n",
          type: "buttonedge",
          animated: true
        },
        {
          id: `eb1-${id}b`,
          source: `${id}`,
          sourceHandle: "d",
          target: `${id}b`,
          targetHandle: "n",
          type: "straight",
          animated: true
        }
      ]);
    }, 0);
};

