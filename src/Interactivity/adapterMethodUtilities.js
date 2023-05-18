export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
      setNodes(nodes => 
        nodes.map(node => {
          if (node.id === "0") { return updateTargetMethods(node, nodes)}
          else if (node.id === "1") { return updateAdapterMethods(node, nodes)}
          else if (node.id === "2"){ return updateAdapteeMethod(node, nodes)}
          return node;
        })
      );
    }, 250);
  };

const updateTargetMethods = (node, nodes) => {
  const newMethods = node.data.methods.map(method =>  ({ ...method, interfaceMethod: true}));

  return {
    ...node,
    data: {...node.data, methods: newMethods}
  };
}
 

 
const updateAdapterMethods = (node, nodes) => {
  const orgMethods = node.data.methods.filter(method => !method.overRide);
  const implementedMethods = nodes.find(n => n.id === '0').data.methods.map(method => {
    let methodBody;
    if (method.id === "1") {
      const methodBodyPython = [[`adaptee.specificRequest()`]];
      const methodBodyJava = [[`adaptee.specificRequest()`]];
      methodBody = [[methodBodyJava], [methodBodyPython]];
    } else {
      methodBody = method.methodBody;
    }
    return {
      ...method, 
      interfaceMethod: false, 
      overRide: true, 
      notDeletable: true,
      methodBody: methodBody
    };
  });

  const newMethods = orgMethods.concat(implementedMethods);
  return {
    ...node,
    data: {...node.data, methods: newMethods}
  };
};

  

const updateAdapteeMethod = (node, nodes) => {
  const adapterClass = nodes.find(node => node.id === "2").data.class_name;
  const adapterMethods = nodes.find(node => node.id === "2").data.methods;
  const newMethods = adapterMethods.map(method => {

    const methodBodyPython = [`print("Adaptee's specific request")`];
    const methodBodyJava = [`System.out.println("${adapterClass}'s specific request")`];
    return {
        ...method,
        methodBody: [methodBodyJava, methodBodyPython],
        };
    });          

  return {
      ...node,
      data: {...node.data, methods: newMethods,
      },
  }
}
 
