export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
    setNodes(nodes => nodes.map(node => {
      if(node.id.includes('a') || node.id === "1" || node.id === "2") {

        const decoratorMethod = nodes.find(node => node.id ==="0").data.methods
        .find(method => method.id === "1").name;

        const newMethods = node.data.methods.map(method => {
          if (node.id === "2" && method.id === "2") {
            return {
              ...method,
              name: decoratorMethod
            };
          }

          else if(method.id === "1" && !(node.id === "2")) {
            return {
                ...method,
                name: decoratorMethod
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

