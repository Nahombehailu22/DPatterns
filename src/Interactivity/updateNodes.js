export const updateNodes = (setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, expClasses, expMethods) => {
    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: expClasses? expClasses[i]: node.data.class_name || "default",
          methods: expMethods? expMethods[i]: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: codeWritten,
          pop: popHidden[i],
          
        },
        hidden: hidden[i]
      };
    }));
  
    setEdges(eds => eds.map((edge, i) => {
      return {
        ...edge,
        hidden: edgeHidden[i]
      };
    }), []);
  }