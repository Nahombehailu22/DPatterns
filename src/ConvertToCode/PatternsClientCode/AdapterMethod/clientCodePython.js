export const ClientCodePython = (nodes, setNodes) => {

    let clientCode = ""

    clientCode += `# Client Code\n`;
    clientCode += "if __name__ == \"__main__\":";

    const Adaptee = nodes.find(node => node.id === "2").data.class_name;
    const Target = nodes.find(node => node.id === "0").data.class_name;
    const ObjectAdapter = nodes.find(node => node.id === "1").data.class_name;
    const request = nodes.find(node => node.id === "1").data.methods
    .find(method => method.id === "1").name

    clientCode += `\n\tadaptee = ${Adaptee}()`
    clientCode += `\n\tadapter = ${ObjectAdapter}(adaptee)`
    clientCode += `\n\tadapter.${request}()`

    return clientCode
}
