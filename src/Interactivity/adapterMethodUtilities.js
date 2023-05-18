export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
      setNodes(nodes => 
        nodes.map(node => {
          if (node.id === "0") { return updateTargetMethods(node, nodes)}
          else if (node.id === "1") { 
            return updateAdapterMethods(node, nodes)
          }
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
  const ObjectAdapter = node.data.class_name;
  const Adaptee = nodes.find(node => node.id === "2").data.class_name;
  const adaptee = node.data.attributes.find(attribute => attribute.id === "1").name

  const javaConstructor = [`${ObjectAdapter}(${Adaptee} ${adaptee}) {`, `\tthis.${adaptee} = ${adaptee};`, "}"]
  const pythonConstructor = [`def __init__(self, ${adaptee}):`, `\tself.${adaptee} = ${adaptee}` ]

  const orgMethods = node.data.methods.filter(method => !method.overRide);
  const implementedMethods = nodes.find(n => n.id === '0').data.methods.map(method => {
    const specificRequest = nodes.find(n => n.id === '2').data.methods.find(
      m => m.id.toString() === method.id.toString()
    ).name;

    const methodBodyPython = [[`self.${adaptee}.${specificRequest}()`]];
    const methodBodyJava = [[`this.${adaptee}.${specificRequest}()`]];

    const methodBody = [[methodBodyJava], [methodBodyPython]];

    return {
      ...method,
      interfaceMethod: false,
      overRide: true,
      notDeletable: true,
      methodBody
    };
  });

  const newMethods = orgMethods.concat(implementedMethods);
  return {
    ...node,
    data: {...node.data, constructor: [javaConstructor, pythonConstructor], methods: newMethods}
  };
};

  

const updateAdapteeMethod = (node, nodes) => {
  const adapterClass = nodes.find(node => node.id === "2").data.class_name;
  const adapterMethods = nodes.find(node => node.id === "2").data.methods;
  const newMethods = adapterMethods.map(method => {
    const Adaptee = node.data.class_name
    const specificRequest = method.name

    const methodBodyPython = [`print("${Adaptee}'s ${specificRequest}")`];
    const methodBodyJava = [`System.out.println("${adapterClass}'s ${specificRequest}")`];
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
 
