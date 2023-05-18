export const ClientCodeJava = (nodes, setNodes) => {

    let clientCode = ""

    clientCode += `//Client Code`
    clientCode += "\nclass AdapterMethodDemo {"
    clientCode += "\n\tpublic static void main(String[] args) {"

    const Adaptee = nodes.find(node => node.id === "2").data.class_name;
    const Target = nodes.find(node => node.id === "0").data.class_name;
    const ObjectAdapter = nodes.find(node => node.id === "1").data.class_name;
    const request = nodes.find(node => node.id === "1").data.methods
    .find(method => method.id === "1").name

    clientCode += `\n\t\t${Adaptee} adaptee = new ${Adaptee}();`
    clientCode += `\n\t\t${Target} adapter = new ${ObjectAdapter}(adaptee);`
    clientCode += `\n\t\tadapter.${request}();`

    clientCode += `\n\t}\n}`
    return clientCode
}

