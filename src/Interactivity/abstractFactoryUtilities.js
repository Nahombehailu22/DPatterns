export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
        setNodes(nodes => nodes.map(node => {
            if (!isNaN(node.id) && node.id != '0') {
                const newMethods = [...node.data.methods];
                for (let i = 0; i < (nodes.find(node => node.id === "0").data.methods).length; i++) {
                    newMethods[i] = nodes.find(node => node.id === "0").data.methods[i];
                  }

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