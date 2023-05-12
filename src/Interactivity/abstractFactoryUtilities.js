export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
        setNodes(nodes => nodes.map(node => {
            if (node.id === '0'){
                const interfaceMethods = nodes.find(node => node.id === "0").data.methods;
                const newMethods = interfaceMethods.map(method => {
                    const idLower = method.id.toLowerCase()
                    return {
                        ...method,
                        interfaceMethod: true,
                        returnType: `0${idLower}`
                      };
                });          

                return {
                    ...node,
                    data: {...node.data, methods: newMethods,
                    },
                }
            }
            if (!isNaN(node.id) && node.id != '0') {
                const interfaceMethods = nodes.find(node => node.id === "0").data.methods;
                const newMethods = interfaceMethods.map(method => ({ ...method, interfaceMethod: false, overRide: true }));             

                return {
                    ...node,
                    data: { ...node.data, methods: newMethods,
                    },
                }
                
            }
            return node;
        }))

    }, 150);
};

export const handleNodeDelete = (id, nodes, edges, setNodes, setEdges, methodId) => {
    const deleteId = methodId.toLowerCase()
    setNodes(nodes => nodes.filter(node => node.id !== "0"+deleteId));
    setEdges((edges) => edges.filter((edge) => edge.source !== "0" +deleteId && edge.target !== "0" +deleteId));

    setNodes(nodes => nodes.filter(node => node.id !== "0"+deleteId+"1"));
    setEdges((edges) => edges.filter((edge) => edge.source !== "0" +deleteId +"1" && edge.target !== "0" +deleteId + "1"));

    setNodes(nodes => nodes.filter(node => node.id !== "0"+deleteId+"2"));
    setEdges((edges) => edges.filter((edge) => edge.source !== "0" +deleteId +"2" && edge.target !== "0" +deleteId + "2"));

  };