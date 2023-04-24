export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
        setNodes(nodes => nodes.map(node => {
            if (!isNaN(node.id) && node.id != '0') {
                // const newMethods = [...node.data.methods];
                const newMethods = nodes.find(node => node.id === "0").data.methods;
                // for (let i = 0; i < (nodes.find(node => node.id === "0").data.methods).length; i++) {
                //     newMethods[i] = nodes.find(node => node.id === "0").data.methods[i];
                //   }

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

    }, 150);
};

export const handleNodeDelete = (id, nodes, edges, setNodes, setEdges, methodId) => {
    
    const deleteId = methodId.toLowerCase()
    console.log(`deleteID:  ${deleteId}`)
    setNodes(nodes => nodes.filter(node => node.id !== "0"+deleteId));
    setEdges((edges) => edges.filter((edge) => edge.source !== "0" +deleteId && edge.target !== "0" +deleteId));

    setNodes(nodes => nodes.filter(node => node.id !== "0"+deleteId+"1"));
    setEdges((edges) => edges.filter((edge) => edge.source !== "0" +deleteId +"1" && edge.target !== "0" +deleteId + "1"));

    setNodes(nodes => nodes.filter(node => node.id !== "0"+deleteId+"2"));
    setEdges((edges) => edges.filter((edge) => edge.source !== "0" +deleteId +"2" && edge.target !== "0" +deleteId + "2"));

  };