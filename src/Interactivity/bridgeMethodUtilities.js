  export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
    setNodes(nodes => nodes.map(node => {
    const newMethods = nodes.find(node => node.id === "0a").data.methods;
      if(node.id.includes('a')) {
    
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