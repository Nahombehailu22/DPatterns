export const updateNodeMethods = (nodes, setNodes) => {
  setTimeout(() => {
    setNodes(nodes => 
      nodes.map(node => {
        if (!isNaN(node.id) && node.id !== '0') {
          const factoryNode = nodes.find(n => n.id === '0');
          const factoryMethod = factoryNode.data.methods.find(m => m.id === '2').name;

          const newMethods = node.data.methods.map(m => 
            m.id === '1' ? {...m, name: factoryMethod} : m
          );

          return {
            ...node,
            data: {...node.data, methods: newMethods}
          };
        }

        if (node.id.includes('a')) {
          const productNode = nodes.find(n => n.id === '0a');
          const productMethod = productNode.data.methods.find(m => m.id === '1').name;

          const newMethods = node.data.methods.map(m => 
            m.id === '1' ? {...m, name: productMethod} : m
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
