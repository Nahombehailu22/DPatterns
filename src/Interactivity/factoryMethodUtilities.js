/* 
This function updates the methods of nodes passed to it through a setTimeout function.

It takes in two arguments: 
  - 'nodes': an array of nodes to be updated.
  - 'setNodes': a function that accepts a callback to modify state.
*/
export const updateNodeMethods = (nodes, setNodes) => {
  setTimeout(() => {
    setNodes(nodes => 
      nodes.map(node => {
        if (node.id === '0') { return updateFactoryMethod(node, nodes) }
        else if (!isNaN(node.id)) { return updateConcreteFactoryMethod(node, nodes) }
        else if (node.id.includes('a')) { return updateProductMethods(node, nodes) }
        
        return node;
      })
    );
  }, 250);
};

//Updates the Factory Method of the creator class
const updateFactoryMethod = (node, nodes) => {
  const productNode = nodes.find(node => node.id === "0a");
  const Product = productNode.data.class_name;
  const productMethod = productNode.data.methods.find(method => method.id === "1").name;
  const factoryMethod = node.data.methods.find(method => method.id === "2").name;
  
  const methodBodyPython = [[`product = self.${factoryMethod}()`], [`product.${productMethod}()`] ]
  const methodBodyJava = [[`${Product} product = ${factoryMethod}()`], [`product.${productMethod}()`] ]

  const newMethods = node.data.methods.map(method => 
    method.id === '1' ? {
      ...method, 
      notDeletable:true,
      methodBody: [methodBodyJava, methodBodyPython],
      
    } : method
  );

  return {
    ...node,
    data: {...node.data, methods: newMethods}
  };
}

// Updates the factory method of concrete creator classes
const updateConcreteFactoryMethod = (node, nodes) => {
  const factoryNode = nodes.find(n => n.id === '0');
  const factoryMethod = factoryNode.data.methods.find(m => m.id === '2').name;

  let concreteProduct = ""
  if (nodes.find(n=> n.id === `${node.id+'a'}`)){
    concreteProduct = nodes.find(n=> n.id === `${node.id+'a'}`).data.class_name;
  }

  const methodBodyPython = [[`return ${concreteProduct}()`]]
  const methodBodyJava = [[`return new ${concreteProduct}()`]]
  
  const newMethods = node.data.methods.map(method => 
    method.id === '1' ? {
      ...method, 
      name: factoryMethod, 
      notDeletable:true,
      returnType: "0a",
      methodBody: [methodBodyJava, methodBodyPython]
      
    } : method
  );

  return {
    ...node,
    data: {...node.data, methods: newMethods}
  };
  
}

//Updates product methods and concrete product methods
const updateProductMethods = (node, nodes) => {
  if (node.id === "0a"){
    const newMethods = node.data.methods.map(method =>  ({ ...method, interfaceMethod: true}));
    return {
      ...node,
      data: {
          ...node.data,
          methods: newMethods,
      },
  }
}
  else{
    const methodBodyPython = [[`print("This is ${node.data.class_name}")`]]
    const methodBodyJava = [[`System.out.println("This is ${node.data.class_name}")`]]

    const orgMethods = node.data.methods.filter(method => !method.overRide)
    const implementedMethods = nodes.find(n => n.id === '0a').data.methods
    .map(method =>  ({ 
      ...method, 
      interfaceMethod: false, 
      overRide:true, 
      notDeletable:true,
      methodBody: [methodBodyJava, methodBodyPython]
    
    }));

    const newMethods = [...implementedMethods, ...orgMethods]
    return {
      ...node,
      data: {...node.data, methods: newMethods}
    };
}
}
 

