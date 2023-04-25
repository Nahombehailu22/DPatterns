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
        const factoryNode = nodes.find(node => node.id ==="0");
        const factoryMethod = factoryNode.data.methods.find(method => method.id === "2").name;

        const newMethods = node.data.methods.map(method => {
          if (method.id === "1") {
            return {
              ...method,
              name: factoryMethod
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
      if(node.id.includes('a')) {
        const productNode = nodes.find(node => node.id ==="0a");
        const productMethod = productNode.data.methods.find(method => method.id === "1").name;

        const newMethods = node.data.methods.map(method => {
          if (method.id === "1") {
            return {
              ...method,
              name: productMethod
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
