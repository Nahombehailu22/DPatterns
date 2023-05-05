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

    for(let i = 1; i < nodeMap.size; i++){
        clientCode += `\n\t\t${nodeMap.get(0).class_name +" "+ `creator${i}` + " = new" + " " + nodeMap.get(i).class_name + "();"}`
    }
    clientCode += "\n\t"
    for(let i = 1; i < nodeMap.size; i++){
        clientCode += `\n\t\t${`creator${i}` + "." + nodeMap.get(0).methods.find(method => method.id === "1").name + "();"}`
    }
    clientCode += `\n\t}\n}`
    
    return clientCode
}
