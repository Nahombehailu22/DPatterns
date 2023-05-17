export const updateNodeMethods = (nodes, setNodes) => {
    setTimeout(() => {
        setNodes(nodes => nodes.map(node => {
            if (node.id === '0'){ 
                return updateAbstractFactoryMethods(node, nodes)
            }
            else if (!isNaN(node.id) && node.id != '0' && node.id != '0b1') {
                return updateConcreteFactoryMethods(node, nodes)
            }

            const methodIDs = nodes.find(node => node.id === "0").data.methods
            .map(method => method.id.toLowerCase())

            for (const methodId of methodIDs) {     
                if (node.id.includes(methodId)) {   
                    return updateProductMethods(methodId, node, nodes);
                }
            }

            return node;
        }))

    }, 150);
};

const updateAbstractFactoryMethods = (node, nodes) => {
    const interfaceMethods = nodes.find(node => node.id === "0").data.methods;
    const newMethods = interfaceMethods.map(method => {
    const idLower = method.id.toLowerCase()
    return {
        ...method,
        interfaceMethod: true,
        returnType: `0${idLower}`
        };
    });          

    return {
        ...node,
        data: {...node.data, methods: newMethods,
        },
    }
}

const updateConcreteFactoryMethods = (node, nodes) => {
    const abstractFactoryMethods = nodes.find(node => node.id === "0").data.methods;
    const newMethods = abstractFactoryMethods.map((method) => {
        let concreteProduct = "";
        if (nodes.find((n) => n.id === `0${method.id.toLowerCase()}${node.id}`)) {
          concreteProduct = nodes.find((n) => n.id === `0${method.id.toLowerCase()}${node.id}`).data.class_name;
        }
      
        const methodBodyPython = [`return ${concreteProduct}()`];
        const methodBodyJava = [`return new ${concreteProduct}()`];
      
        return {
          ...method,
          interfaceMethod: false,
          overRide: true,
          notDeletable: true,
          returnType: `0${method.id.toLowerCase()}`,
          methodBody: [methodBodyJava, methodBodyPython],
        };
      });


    return {
        ...node,
        data: { ...node.data, methods: newMethods,
        },
    }
}

const updateProductMethods = (methID, node, nodes) => {
    if (node.id === `0${methID}`){
        const newMethods = node.data.methods.map(method =>  ({ ...method, interfaceMethod: true, notDeletable:true}));
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
        const implementedMethods = nodes.find(n => n.id === `0${methID}`).data.methods
            .map(method =>  {
                const methodBodyPython = [[`print("Executing ${method.name} in ${node.data.class_name}")`]];
                const methodBodyJava = [[`System.out.println("Executing ${method.name} in ${node.data.class_name}")`]];
                
                return { 
                    ...method, 
                    interfaceMethod: false, 
                    overRide:true, 
                    notDeletable:true,
                    methodBody: [methodBodyJava, methodBodyPython]
                };
            });
    
    
        const newMethods = [...implementedMethods, ...orgMethods]
        return {
          ...node,
          data: {...node.data, methods: newMethods}
        };   
    }

}

 