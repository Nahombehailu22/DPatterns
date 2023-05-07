export const updateNodeMethods = (nodes, setNodes) => {
  setTimeout(() => {
    setNodes(nodes => 
      nodes.map(node => {
        if (node.id === '0') {
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

        if (!isNaN(node.id) && node.id !== '0') {
          const factoryNode = nodes.find(n => n.id === '0');
          const factoryMethod = factoryNode.data.methods.find(m => m.id === '2').name;

          let concreteProduct = ""
          if (nodes.find(n=> n.id === `${node.id+'a'}`)){
            concreteProduct = nodes.find(n=> n.id === `${node.id+'a'}`).data.class_name;
          }

          const methodBodyPython = [`return ${concreteProduct}()`]
          const methodBodyJava = [`return new ${concreteProduct}()`]
          
          const newMethods = node.data.methods.map(method => 
            method.id === '1' ? {
              ...method, 
              name: factoryMethod, 
              notDeletable:true,
              returnType: "0a",
              methodBody: [methodBodyJava, methodBodyPython]
              // returnM: `new ${concreteProduct}`,
              
            } : method
          );

          return {
            ...node,
            data: {...node.data, methods: newMethods}
          };
        }

        if (node.id.includes('a')) {
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
            const orgMethods = node.data.methods.filter(method => !method.overRide)
            const implementedMethods = nodes.find(n => n.id === '0a').data.methods
            .map(method =>  ({ 
              ...method, 
              interfaceMethod: false, 
              overRide:true, 
              notDeletable:true,
              print: `This is ${node.data.class_name}`
            
            }));

            const newMethods = [...implementedMethods, ...orgMethods]
            return {
              ...node,
              data: {...node.data, methods: newMethods}
            };
        }
      }
      

        return node;
      })
    );
  }, 250);
};
