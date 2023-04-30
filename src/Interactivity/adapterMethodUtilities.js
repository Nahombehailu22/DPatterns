export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
      setNodes(nodes => 
        nodes.map(node => {
          if (node.id === "1") {
            const interfaceMethod = nodes.find(node => node.id === "0").data.methods
            .find(method => method.id === "1").name

            const newMethods = node.data.methods.map(m => 
              m.id === '1' ? {...m, name: interfaceMethod} : m
            );
  
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
  