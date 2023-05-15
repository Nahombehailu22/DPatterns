export const ClientCodeJava = (nodes, setNodes) => {

    const nodeMap = new Map();
    nodes.map(node => {
      if (node.data.class_name && !isNaN(node.id) && node.id!= "0b1"){
      nodeMap.set(parseInt(node.id), node.data)
      }
    })

    let clientCode = ""

    clientCode += `//Client Code`
    clientCode += "\nclass AbstractFactoryMethodDemo {"
    clientCode += "\n\tpublic static void main(String[] args) {"

    const methodIDs = nodes.find(node => node.id === "0").data.methods
    .map(method => method.id.toLowerCase())
    const abstractProducts = methodIDs.flatMap(methodID => nodes.filter(node => node.id === `0${methodID}`).map(node => ({...node, methodID})));

    for (let key of nodeMap.keys()) {
        if (key != 0){
            clientCode += `\n\t\t${nodeMap.get(0).class_name} factory${key} = new ${nodeMap.get(key).class_name}();`
            for (let i = 0; i < abstractProducts.length; i++){
                const productName = abstractProducts[i].id[1].toUpperCase()
                const abstractMethod = nodeMap.get(0).methods.find(method => method.id === methodIDs[i].toUpperCase()).name;
                clientCode += `\n\t\t${abstractProducts[i].data.class_name} product${productName}${key} = factory${key}.${abstractMethod}();`
            }

            for (let i = 0; i < abstractProducts.length; i++){
                const productName = abstractProducts[i].id[1].toUpperCase()
                const abstractProductMethod = abstractProducts[i].data.methods[0].name
                clientCode += `\n\t\tproduct${productName}${key}.${abstractProductMethod}();`
            }
        }
        clientCode += "\n"
    }

    
    clientCode += `\n\t}\n}`
    return clientCode
}
