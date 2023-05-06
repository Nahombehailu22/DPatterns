export const ClientCodeJava = (nodes, setNodes) => {

    const nodeMap = new Map();
    nodes.map(node => {
      if (node.data.class_name && !isNaN(node.id)){
      nodeMap.set(parseInt(node.id), node.data)
      }
    })

    let clientCode = ""

    clientCode += `//Client Code`
    clientCode += "\nclass FactoryMethodDemo {"
    clientCode += "\n\tpublic static void main(String[] args) {"

    for (let key of nodeMap.keys()) {
        if (key != 0){
            clientCode += `\n\t\t${nodeMap.get(0).class_name +" "+ `creator${key}` + " = new" + " " + nodeMap.get(key).class_name + "();"}`
        }    
    }
    clientCode += "\n\t"
    for (let key of nodeMap.keys()) {
        if (key != 0){
            clientCode += `\n\t\t${`creator${key}` + "." + nodeMap.get(0).methods.find(method => method.id === "1").name + "();"}`
        }
        
    }
    
    clientCode += `\n\t}\n}`
    return clientCode
}
