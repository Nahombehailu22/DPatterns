export const updateNodes = (setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, values, initialValues) => {
  let classes = [], methods = [], titles = [], descriptions = [];
  if (values) {
    ({ classes, methods, titles, descriptions } = values); 
    const {initialNodes, initialEdges} = initialValues;
    setNodes(initialNodes)
    setEdges(initialEdges)
  }

    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: values? classes[i]: node.data.class_name || "default",
          methods: values? methods[i]: node.data.methods || ["defaultMethod"],
          title: values? titles[i]: node.data.title || "default",
          description: values? descriptions[i]: node.data.description || "default",
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