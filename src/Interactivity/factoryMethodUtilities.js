export const handleNodeDelete = (id, nodes, edges, setNodes, setEdges) => {
    setNodes(nodes => nodes.filter(node => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));

    setNodes(nodes => nodes.filter(node => node.id !== id+"a"));
    setEdges((edges) => edges.filter((edge) => edge.source !== id+"a" && edge.target !== id+"a"));

    setNodes(nodes => nodes.filter(node => node.id !== id+"b"));
    setEdges((edges) => edges.filter((edge) => edge.source !== id+"b" && edge.target !== id+"b"));
  };


export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
    setNodes(nodes => nodes.map(node => {
      if (!isNaN(node.id) && node.id!= '0'){
        const newMethods = [...node.data.methods];
        newMethods[0] = nodes.find(node => node.id === "0").data.methods[1];

        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods,
          },
        }
      }
      if(node.id.includes('a')) {
        const newMethods = [...node.data.methods];
        newMethods[0] = nodes.find(node => node.id === "0a").data.methods[0];

        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods,
          },
        }
      }



      return node;
    }))
          
    }, 250);
  };

  
let concretePos = 1125;
const getProductPosition = () => `${concretePos+=175}`;

let id = 3;
const getId = () => `${id++}`;
  
export const addProduct = (event, reactFlowWrapper, project, setNodes, setEdges, setHidden) => {
    setHidden([false, false, false, false, false, false, false, false]);
    const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
  
    const id = getId();
    const concretePos = getProductPosition();
    const newNode = {
      id: `${id}a`,
      position: project({ x: concretePos, y: 475 }),
      data: { 
        class_name: `ConcreteProduct${id}`,
        methods: ['doStuff'],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Product",
        description: "", 
        pop: true,
      },
      type: "class"
    };
    const newNode1 = {
      id: `${id}b`,
      type: 'code',
      position: project({ x: event.clientX - left - 80, y: event.clientY - top + 250 }),
      data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: id,
      },
    };
    setTimeout(() => {
    setNodes((nodes) => [...nodes, newNode, newNode1]);
    setEdges(edges => [
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
        source: id,
        sourceHandle: "d",
        target: `${id}b`,
        targetHandle: "n",
        type: "straight",
        animated: true
      }
    ]);
        
    }, 500);
  }