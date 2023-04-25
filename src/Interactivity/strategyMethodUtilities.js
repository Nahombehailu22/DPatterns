export const handleNodeDelete = (id, nodes, edges, setNodes, setEdges) => {
    setNodes(nodes => nodes.filter(node => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));
  };


  export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
    setNodes(nodes => nodes.map(node => {
      if(node.id.includes('a')) {
        const interfaceNode = nodes.find(node => node.id ==="0a");
        const interfaceMethod = interfaceNode.data.methods.find(method => method.id === "1").name;

        const newMethods = node.data.methods.map(method => {
          if (method.id === "1") {
            return {
              ...method,
              name: interfaceMethod
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
