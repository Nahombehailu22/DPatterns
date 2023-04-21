export const handleNodeDelete = (id, nodes, edges, setNodes, setEdges) => {
    setNodes(nodes => nodes.filter(node => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));

  };
