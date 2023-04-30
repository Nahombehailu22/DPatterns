export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
      setNodes(nodes => 
        nodes.map(node => {
          if (node.id === "1") {
            const interfaceMethods = nodes.find(node => node.id === "0").data.methods
            const newMethods = interfaceMethods
  
            return {
              ...node,
              data: {...node.data, methods: newMethods}
            };
          }  
          return node;
        })
      );
    }, 250);
  };
  