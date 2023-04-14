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
