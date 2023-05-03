export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
    setNodes(nodes => nodes.map(node => {
      if(node.id.includes('a')) {
        const interfaceNode = nodes.find(node => node.id ==="0a");
        const interfaceMethod1 = interfaceNode.data.methods.find(method => method.id === "1").name;
        const interfaceMethod2 = interfaceNode.data.methods.find(method => method.id === "2").name;
        const newMethods = node.data.methods.map(method => {
          if (method.id === "1") {
            return {
              ...method,
              name: interfaceMethod1
            };
          }
          if (method.id === "2") {
            return {
              ...method,
              name: interfaceMethod2
            };
          }
          return method;
        });


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
