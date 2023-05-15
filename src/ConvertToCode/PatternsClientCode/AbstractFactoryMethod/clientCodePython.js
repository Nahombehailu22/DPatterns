export const ClientCodePython = (nodes, setNodes) => {
    
    const nodeMap = new Map();
    nodes.map(node => {
      if (node.data.class_name && !isNaN(node.id) && node.id!= "0b1"){
      nodeMap.set(parseInt(node.id), node.data)
      }
    })

    let clientCode = ""
    clientCode += `# Client Code\n`;
    clientCode += "if __name__ == \"__main__\":";

    const methodIDs = nodes.find(node => node.id === "0").data.methods
    .map(method => method.id.toLowerCase())
    const abstractProducts = methodIDs.flatMap(methodID => nodes.filter(node => node.id === `0${methodID}`).map(node => ({...node, methodID})));

    for (let key of nodeMap.keys()) {
        if (key != 0){
            clientCode += `\n\tfactory${key} = ${nodeMap.get(key).class_name}()`

            for (let i = 0; i < abstractProducts.length; i++){
                const productName = abstractProducts[i].id[1].toUpperCase()
                const abstractMethod = nodeMap.get(0).methods.find(method => method.id === methodIDs[i].toUpperCase()).name;
                clientCode += `\n\tproduct${productName}${key} = factory${key}.${abstractMethod}()`
            }

            for (let i = 0; i < abstractProducts.length; i++){
                const productName = abstractProducts[i].id[1].toUpperCase()
                const abstractProductMethod = abstractProducts[i].data.methods[0].name
                clientCode += `\n\tproduct${productName}${key}.${abstractProductMethod}()`
            }
        }
        clientCode += "\n"
    }

    return clientCode


    // for (let key of nodeMap.keys()) {
    //     if (key != 0){
    //         clientCode += `\n\tcreator${key}` + " = " + nodeMap.get(key).class_name + "()";
    //     }    
    // }
    // clientCode += "\n\t"
    // for (let key of nodeMap.keys()) {
    //     if (key != 0){
    //         clientCode += `\n\t${`creator${key}` + "." + nodeMap.get(0).methods.find(method => method.id === "1").name + "()"}`
    //     }
        
    // }
    
    return clientCode
}
