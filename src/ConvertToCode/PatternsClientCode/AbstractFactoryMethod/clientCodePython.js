export const ClientCodePython = (nodes, setNodes) => {

    // const nodeMap = new Map();
    // nodes.map(node => {
    //   if (node.data.class_name && !isNaN(node.id)){
    //   nodeMap.set(parseInt(node.id), node.data)
    //   }
    // })

    let clientCode = ""

    // clientCode += `# Client Code\n`;
    // clientCode += "if __name__ == \"__main__\":";

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
